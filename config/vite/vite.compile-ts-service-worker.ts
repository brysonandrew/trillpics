import {
  rollup,
  InputOptions,
  OutputOptions,
} from 'rollup';
import rollupPluginTypescript from 'rollup-plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export const compileTsServiceWorker = () => ({
  name: 'compile-typescript-service-worker',
  async writeBundle(_options, _outputBundle) {
    const inputOptions: InputOptions = {
      input:
        'src/main/service-worker/index.ts',
      plugins: [rollupPluginTypescript(), nodeResolve()],
    };
    const outputOptions: OutputOptions = {
      file: 'assets/service-worker.js',
      format: 'es',
    };
    const bundle = await rollup(inputOptions);
    await bundle.write(outputOptions);
    await bundle.close();
  },
});
