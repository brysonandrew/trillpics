// import {TTrackId} from '~/editor/remotion/components/tracks/types';
// import {useSetStoreState} from '~/editor/store/hooks/use-edit-store-data';
// import {TCombinedSlices} from '~/editor/store/types';
// import {isString} from '~/editor/utils/validation/is/string';

import { isString } from "unocss";
import { set } from "zod";

// import {isTrackMain} from '~/editor/utils/validation/is/track/main';
export const POSTER_EXTRACTION_INTERVAL = 10;
const EXTENSION = "png";
const INIT_SECONDS = 1;

const x = (e: any) => {
  // e.style.position = 'fixed';
  // e.style.left = '0px';
  // e.style.top = '0px';
  // e.style.bottom = '0px';
  // e.style.right = '0px';
  // e.style.backgroundColor = 'red';
  // e.style.width = '1000px';
  // e.style.height = '1000px';
  // document.body.append(e);
};

export const useTracksVideoWithPosterSeries =
  () => {
    // const set = useSetStoreState();

    const handler = async (
      // trackId: TTrackId,
      video: HTMLVideoElement
    ) => {
      // Fetch and demux the media data.
      // const demuxer = new MP4Demuxer(opts.videoUrl, {
      //   onConfig: function (config) {
      //     if (opts.onConfig) opts.onConfig(config);
      //     decoder.configure(config);
      //   },
      //   onFinish: function () {
      //     if (opts.onFinish) opts.onFinish();
      //     onFinishResolver();
      //   },
      //   onChunk: function (chunk) {
      //     decoder.decode(chunk);
      //   },
      //   setStatus: function (a, b) {
      //     // console.log("status:", a, b);
      //   },
      //   videoDecoder: decoder,
      // });
      // const init = {
      //   output: console.log,
      //   error: (e) => {
      //     console.log(e.message);
      //   },
      // };

      // const config = {
      //   codec: "vp8",
      //   codedWidth: 640,
      //   codedHeight: 480,
      // };

      // let decoder = new VideoDecoder(init);
      // decoder.configure(config);
      // const decoder = new VideoDecoder({
      //   output: console.log, // the callback to handle all the VideoFrame objects
      //   error: e => console.error(e),
      // });
      // decoder.configure(config); // depends on the input file, your demuxer should provide it
      // demuxer.start((chunk) => { // depends on the demuxer, but you need it to return chunks of video data
      //   decoder.decode(chunk); // will trigger our onFrame callback
      // })

      const source =
        document.createElement(
          "source"
        );
      const canvas =
        document.createElement(
          "canvas"
        );
      const context =
        canvas.getContext("2d");
      x(video);
      x(canvas);
      // canvas.style.display = 'none';
      console.dir(video, context);

      source.setAttribute(
        "src",
        video.src
      );

      const posterCount = Math.floor(
        video.duration /
          POSTER_EXTRACTION_INTERVAL
      );
      console.dir(video);

      const picAtTime = async () => {
        // console.log(now, metadata);
        return new Promise<Blob>(
          (resolve, reject) => {
            if (!context) {
              console.error(
                "Failed to create canvas"
              );
              reject();

              return;
            }
            context.drawImage(
              video,
              0,
              0,
              video.videoWidth,
              video.videoHeight
            );

            canvas.toBlob((blob) => {
              if (!blob) return;
              const file = new File(
                [blob],
                `poster-preview.${EXTENSION}`,
                {
                  type: `image/${EXTENSION}`,
                }
              );
              resolve(blob);
            });
          }
        );
      };
      const seek = (
        seconds: number
      ) => {
        console.log("seek", seconds);
        if (video.fastSeek) {
          video.fastSeek(seconds);
        } else {
          video.currentTime = seconds;
        }
      };

      video.addEventListener(
        "loadedmetadata",
        () => {
          console.log(
            video,
            "loadedmetadata"
          );
        }
      );
      video.addEventListener(
        "loadeddata",
        () => {
          console.log(
            video,
            "loadeddata"
          );
        }
      );
      // const decoder = new VideoDecoder({
      //   output: onFrame, // the callback to handle all the VideoFrame objects
      //   error: e => console.error(e),
      // });
      // decoder.configure(config); // depends on the input file, your demuxer should provide it
      // demuxer.start((chunk) => { // depends on the demuxer, but you need it to return chunks of video data
      //   decoder.decode(chunk); // will trigger our onFrame callback
      // })
      let i = 0;
      // A simple helper
      const waitForRAF = async () => {
        return new Promise((res) => {
          const handleFrame: VideoFrameRequestCallback =
            (
              now: DOMHighResTimeStamp,
              metadata: VideoFrameCallbackMetadata
            ) => {
              i++;
              console.log(
                now,
                metadata
              );
              // seek(i * 40);
              res({ now, metadata });
            };
          video.requestVideoFrameCallback(
            handleFrame
          );
        });
      };
      const requestDataFromTensor =
        async () => {
          console.log(
            "requestDataFromTensor"
          );
          return null;
          // Send new data to the worker, wait for its response.
        };
      const waitForVideoInput =
        async () => {
          // See https://stackoverflow.com/questions/32699721
          return;
        };
      let data: any = null; // We'll store the Tensor results in here
      const updateDataFromTensorFlow =
        async () => {
          await waitForVideoInput();
          await requestDataFromTensor();
        };
      const updateLoop = async () => {
        console.log("updateLoop");

        while (true) {
          // Wait for both the data update and rAF,
          // so we don't produce useless data in case
          // it takes less than a monitor frame.
          const r = await Promise.all([
            updateDataFromTensorFlow(),
            waitForRAF(),
          ]);
          i++;
          console.log(r);
          seek(0.5 * i);
          const r1 = await picAtTime();
          console.log(r1);
        }
      };
      const renderLoop = async () => {
        console.log("renderLoop");
        while (true) {
          await waitForRAF();
          if (data) {
            data = await picAtTime();
            data = null; // Avoid redrawing if nothing new was received since last frame
          }
        }
      };
      // Now run both loops in parallel

      async function* stills(): AsyncGenerator<any> {
        let index = 0;
        while (true) {
          if (posterCount > index) {
            console.log(index);
            const nextTimeInSeconds =
              POSTER_EXTRACTION_INTERVAL *
                index +
              INIT_SECONDS;
            seek(nextTimeInSeconds);
            const files =
              await picAtTime();
            updateLoop();
            renderLoop();
            yield files;
            index++;
          } else {
            return;
          }
        }
      }

      // try {
      //   let p = [] as any[];
      //   const stillsGenerator =
      //     stills();
      //   const init = async () => {
      //     const done = async () => {
      //       const next: IteratorResult<
      //         Blob,
      //         void
      //       > =
      //         (await stillsGenerator.next()) ??
      //         null;
      //       if (!next) {
      //         console.log(
      //           "stills task failed"
      //         );
      //         stillsGenerator.throw(
      //           "stills task failed"
      //         );
      //       }
      //       if (next.done) {
      //         console.log("done");
      //         set(
      //           (
      //             draft: TCombinedSlices
      //           ) => {
      //             const track =
      //               draft.tracksMap.get(
      //                 trackId
      //               );
      //             if (
      //               isTrackMain(
      //                 track
      //               ) &&
      //               isString(next.value)
      //             ) {
      //               if (
      //                 !track.posterSeries
      //               ) {
      //                 track.posterSeries =
      //                   p;
      //               }
      //               // track.posterSeries?.push(next.value);
      //             }
      //           }
      //         );
      //         stillsGenerator.return(
      //           "stills task complete"
      //         );
      //       } else {
      //         p.push(next.value);
      //         const url =
      //           URL.createObjectURL(
      //             next.value
      //           );
      //         console.log(url);
      //         const img =
      //           document.createElement(
      //             "img"
      //           );
      //         img.src = url;
      //         x(img);
      //         console.log(
      //           "seeking clip"
      //         );

      //         await done();
      //         // await deleteEntryPaths(cwd, next.value ?? [], [], handleEnd);
      //       }
      //     };
      //     await done();
      //   };
      //   init();
      //   // video.remove();
      //   // canvas.remove();
      // } catch (error) {
      //   console.error(error);
      // }
    };

    return handler;
  };
