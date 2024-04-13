/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';

import extractZip from 'extract-zip';

import {promisify} from 'node:util';

import {downloadFile} from './download-file';
import {makeFileExecutableIfItIsNot} from './make-file-executable';
import type {LogLevel} from './log-level';
import {Log} from './logger';
import type {DownloadBrowserProgressFn} from './on-browser-download';
// import {getDownloadsCacheDir} from './get-download-destination';

const TESTED_VERSION = '123.0.6312.86';

type Platform = 'linux64' | 'mac-x64' | 'mac-arm64' | 'win64';

function getChromeDownloadUrl({
	platform,
	version,
}: {
	platform: Platform;
	version: string | null;
}): string {
	return `https://storage.googleapis.com/chrome-for-testing-public/${
		version ?? TESTED_VERSION
	}/${platform}/chrome-headless-shell-${platform}.zip`;
}

const mkdirAsync = fs.promises.mkdir;
const unlinkAsync = promisify(fs.unlink.bind(fs));

function existsAsync(filePath: string): Promise<boolean> {
	return new Promise((resolve) => {
		fs.access(filePath, (err) => {
			return resolve(!err);
		});
	});
}

interface BrowserFetcherRevisionInfo {
	folderPath: string;
	executablePath: string;
	url: string;
	local: boolean;
}

const getPlatform = (): Platform => {
	const platform = os.platform();
	switch (platform) {
		case 'darwin':
			return os.arch() === 'arm64' ? 'mac-arm64' : 'mac-x64';
		case 'linux':
			return 'linux64';
		case 'win32':
			return 'win64';
		default:
			throw new Error('Unsupported platform: ' + platform);
	}
};

const destination = 'chrome-headless-shell';

const getDownloadsFolder = () => {
	return path.join(
		//getDownloadsCacheDir()
		'downloads-cache-dir',
		 destination);
};

export const downloadBrowser = async ({
	logLevel,
	indent,
	onProgress,
	version,
}: {
	logLevel: LogLevel;
	indent: boolean;
	onProgress: DownloadBrowserProgressFn;
	version: string | null;
}): Promise<BrowserFetcherRevisionInfo | undefined> => {
	const platform = getPlatform();
	const downloadURL = getChromeDownloadUrl({platform, version});
	const fileName = downloadURL.split('/').pop();
	if (!fileName) {
		throw new Error(`A malformed download URL was found: ${downloadURL}.`);
	}

	const downloadsFolder = getDownloadsFolder();
	const archivePath = path.join(downloadsFolder, fileName);
	const outputPath = getFolderPath(downloadsFolder, platform);

	if (await existsAsync(outputPath)) {
		return getRevisionInfo();
	}

	if (!(await existsAsync(downloadsFolder))) {
		await mkdirAsync(downloadsFolder, {
			recursive: true,
		});
	}

	// Use system Chromium builds on Linux ARM devices
	if (os.platform() !== 'darwin' && os.arch() === 'arm64') {
		throw new Error(
			[
				'Chrome Headless Shell is not available for Linux for arm64 architecture.',
				'If you are on Ubuntu, you can install with:',
				'sudo apt install chromium',
				'sudo apt install chromium-browser',
			].join('\n'),
		);
	}

	try {
		await downloadFile({
			url: downloadURL,
			to: () => archivePath,
			onProgress: (progress) => {
				if (progress.totalSize === null || progress.percent === null) {
					throw new Error('Expected totalSize and percent to be defined');
				}

				onProgress({
					downloadedBytes: progress.downloaded,
					totalSizeInBytes: progress.totalSize,
					percent: progress.percent,
				});
			},
			indent,
			logLevel,
		});
		Log.info({indent, logLevel});
		await extractZip(archivePath, {dir: outputPath});
	} finally {
		if (await existsAsync(archivePath)) {
			await unlinkAsync(archivePath);
		}
	}

	const revisionInfo = getRevisionInfo();
	makeFileExecutableIfItIsNot(revisionInfo.executablePath);

	return revisionInfo;
};

const getFolderPath = (downloadsFolder: string, platform: Platform): string => {
	return path.resolve(downloadsFolder, platform);
};

const getExecutablePath = () => {
	const downloadsFolder = getDownloadsFolder();
	const platform = getPlatform();
	const folderPath = getFolderPath(downloadsFolder, platform);

	return path.join(
		folderPath,
		`chrome-headless-shell-${platform}`,
		platform === 'win64'
			? 'chrome-headless-shell.exe'
			: 'chrome-headless-shell',
	);
};

export const getRevisionInfo = (): BrowserFetcherRevisionInfo => {
	const executablePath = getExecutablePath();
	const downloadsFolder = getDownloadsFolder();
	const platform = getPlatform();
	const folderPath = getFolderPath(downloadsFolder, platform);

	const url = getChromeDownloadUrl({platform, version: null});
	const local = fs.existsSync(folderPath);
	return {
		executablePath,
		folderPath,
		local,
		url,
	};
};
