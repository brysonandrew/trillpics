export class NoiseWhite extends AudioWorkletProcessor {
  constructor() {
    super();

    this.port.onmessage = (event) =>
      (this.startTime = event.data);
    this.startTime = Number.POSITIVE_INFINITY;
    //scheduledAudioNode.port.postMessage(15); to start at 15secs

  }

  static get parameterDescriptors() {
    return [
      {
        name: "gain",
        defaultValue: 0.5,
        minValue: -100,
        maxValue: 100,
      },
    ];
  }

  process(_, outputs, parameters) {
    if (currentTime < this.startTime) { 
      return true;
    }

    const gains = parameters["gain"];
    const output = outputs[0];

    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < output[i].length; j++) {
        const gain =
          gains.length === 1 ? gains[0] : gains[j];

        output[i][j] = (Math.random() * 2 - 1) * gain;
      }
    }
    return true;
  }
}

registerProcessor("noise-white", NoiseWhite);
