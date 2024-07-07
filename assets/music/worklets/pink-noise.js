export class PinkNoise extends AudioWorkletProcessor {
  constructor() {
    super()
    // this.port.onmessage = (event) =>
    //   (this.startTime = event.data);
    // this.startTime = Number.POSITIVE_INFINITY;
  }
  static get parameterDescriptors() {
    return [
      {
        name: "gain",
        defaultValue: 0.5,
        minValue: 0,
        maxValue: 1000,
      },
    ];
  }

  process(inputs, outputs, parameters) {
    // if (currentTime < this.startTime) { 
    //   return true;
    // }
    const gains = parameters["gain"];

    let b0, b1, b2, b3, b4, b5, b6;
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;

    const input = inputs[0];
    const output = outputs[0];

    for (let i = 0; i < output.length; i++) {
      jloop: for (let j = 0; j < output[i].length; j++) {
        if (
          typeof input[i] === "undefined" ||
          typeof input[i][j] === "undefined"
        )
          continue jloop;

        const gain =
          gains.length === 1 ? gains[0] : gains[j];

        const sample = input[i][j]; // Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + sample * 0.0555179;
        b1 = 0.99332 * b1 + sample * 0.0750759;
        b2 = 0.969 * b2 + sample * 0.153852;
        b3 = 0.8665 * b3 + sample * 0.3104856;
        b4 = 0.55 * b4 + sample * 0.5329522;
        b5 = -0.7616 * b5 - sample * 0.016898;
        output[i][j] =
          b0 +
          b1 +
          b2 +
          b3 +
          b4 +
          b5 +
          b6 +
          sample * 0.5362;
        output[i][j] *= gain;
        b6 = sample * 0.115926;
      }
    }
    return true;
  }
}

registerProcessor("pink-noise", PinkNoise);
