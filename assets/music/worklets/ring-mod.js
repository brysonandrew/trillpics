
const atan = (t) => Math.atan(t);

const acosh = (t) => Math.acosh(t);

const tanh = (t) => Math.tanh(t);

const sawtooth = (t) =>
  t === 0 ? 0 : Math.pow(-1, t + 1) * (2 / (t * Math.PI));

const square = (t) => {
  const x = Math.sin(t);
  if (x >= 0.0) return 1.0;
  else return -1.0;
};

const triangle = (t) => Math.asin(Math.cos(t)) / 1.57079633;

class Processor extends AudioWorkletProcessor {
  constructor() {
    super();
    // this.port.onmessage = (event) =>
    //   (this.startTime = event.data);
    // this.startTime = Number.POSITIVE_INFINITY;
}
  static get parameterDescriptors() {
    return [
      {
        name: "gain",
        defaultValue: 0.5,
        minValue: -10,
        maxValue: 10,
      },
      {
        name: "rate",
        defaultValue: 0.5,
        minValue: -1000,
        maxValue: 1000,
      },
      {
        name: "blend",
        defaultValue: 0.5,
        minValue: -1000,
        maxValue: 1000,
      },
      {
        name: "waveform",
        defaultValue: 0,
        minValue: 0,
        maxValue: 10,
      },
    ];
  }

  process(inputs, outputs, parameters) {
    // if (currentTime < this.startTime) { 
    //   return true;
    // }
    let t = 0;

    let input = inputs[0];
    let output = outputs[0];

    const gain = parameters.gain[0];
    const rate = parameters.rate[0];
    const blend = parameters.blend[0];
    const waveform = ~~parameters.waveform[0];
    let factor = 0;

    for (let i = 0; i < output.length; i++) {
      jloop: for (let j = 0; j < output[i].length; j++) {
        if (
          typeof input[i] === "undefined" ||
          typeof input[i][j] === "undefined"
        )
          continue jloop;

        switch (waveform) {
          case 0: {
            factor = Math.sin(t);
            break;
          }
          case 1: {
            factor = triangle(t);
            break;
          }
          case 2: {
            factor = square(t);
            break;
          }
          case 3: {
            factor = atan(t);
            break;
          }
          case 4: {
            factor = Math.cos(t);
            break;
          }
          case 5: {
            factor = Math.tan(t);
            break;
          }
          case 6: {
            factor = Math.exp(t);
            break;
          }
          case 7: {
            factor = Math.expm1(t);
            break;
          }
          case 8: {
            factor = Math.cosh(t);
            break;
          }
          case 9: {
            factor = Math.sinh(t);
            break;
          }
          default: {
            factor = tanh(t);
            break;
          }
        }

        t += rate * 0.02;

        if (t > 6.28318531) t -= 6.28318531;

        output[i][j] =
          ((1.0 - blend) * input[i][j] +
            blend * factor * input[i][j]) *
          gain;
      }
    }

    return true;
  }
}

registerProcessor("ring-mod", Processor);
