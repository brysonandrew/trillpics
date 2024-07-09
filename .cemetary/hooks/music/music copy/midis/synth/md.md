   // const {
    //   duration = 0.4,
    //   volume = 1,
    //   type = "sawtooth",
    //   midi: baseMidi,
    //   stepIndex = 0,
    //   gain = 1,
    //   ...synthwaveOptions
    // } = options;
    // console.log(stepIndex);
    // if (
    //   stepIndex === 0 &&
    //   !o.isStarted
    // ) {
    //   console.log("START");
    //   o.oscillator.start(startTime);
    //   o.isStarted = true;
    // }
    // start(
    //   o.oscillator,
    //   hz,
    //   stepIndex,
    //   startTime,
    //   duration
    // );
  // const { start, stop } =
  //   useSchedulingStart();

    let o = useBasicOscillator({
    context,
    frequency,
    detune,
    type: "sawtooth",
  });

  // gainNode.gain.linearRampToValueAtTime(
    //   (0.04 * volume) & gain,
    //   startTime
    // );
    // gainNode1.gain.linearRampToValueAtTime(
    //   0.01 * volume * gain,
    //   startTime
    // );


    // filter.connect(gainNode);
    // gainNode.connect(master);

    // delay.connect(filter1);
    // filter1.connect(gainNode1);