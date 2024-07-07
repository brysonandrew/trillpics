export class BitcrusherProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    // this.port.onmessage = (event) =>
    //   (this.startTime = event.data);
    // this.startTime = Number.POSITIVE_INFINITY;
  }
  static get parameterDescriptors() {
    return [
      {
        name: "bits",
        defaultValue: 8,
        minValue: -512,
        maxValue: 512,
      },
      {
        name: "frequency",
        defaultValue: 0.4,
        minValue: -0.99,
        maxValue: 0.99,
      },
    ];
  }

  process(inputs, outputs, parameters) {
    // if (currentTime < this.startTime) { 
    //   return true;
    // }
    const bitsArr = parameters["bits"];
    const frequencys = parameters["frequency"];
    let phaser = 0;
    let last = 0;

    const input = inputs[0];
    const output = outputs[0];

    for (let i = 0; i < output.length; i++) {
      jloop: for (let j = 0; j < output[i].length; j++) {
        if (
          typeof input[i] === "undefined" ||
          typeof input[i][j] === "undefined"
        )
          continue jloop;

        const bits =
          bitsArr.length === 1 ? bitsArr[0] : bitsArr[j];
        const step = Math.pow(1 / 2, bits);
        const frequency =
          frequencys.length === 1
            ? frequencys[0]
            : frequencys[j];

        phaser += frequency;
        if (phaser >= 1.0) {
          phaser -= 1.0;
          last =
            step * Math.floor(input[i][j] / step + 0.5);
        }
        output[i][j] = last;
      }
    }
    return true;
  }
}

registerProcessor("bitcrusher", BitcrusherProcessor);
