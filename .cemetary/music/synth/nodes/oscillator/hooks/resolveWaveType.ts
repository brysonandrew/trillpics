import { ECustomWave } from "~/pages/video/music/synth/nodes/oscillator/hooks/custom-waves";
import {
  generateWave,
  blackmanWave,
  parabolaWave,
  sawtoothWave,
  squareWave,
  sine,
  sineII,
  sineIV,
  expReverseSawtooth,
  triangularWave,
  triangleWave,
  cosineWave,
  tanWave,
  hammingWave,
  hannWave,
  generateMirrorCurve,
  generateChipTuneWave,
  rectangularWave,
  bartlettWave,
  bartlettHannWave,
  gaussWave,
  morningStarWave,
  lanczosWave,
  standardWave,
  distortion,
  sharkFinn,
  generateBasicWave,
} from "~/pages/video/music/synth/nodes/oscillator/hooks/utils";
import { BASS_WAVE } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/bass";
import { BELL_WAVE } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/bell";
import { BRASS_WAVE } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/brass";
import { CHIME } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/chime";
import { GONG_WAVE } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/gong";
import { HORN_WAVE } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/horn";
import { ORGAN } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/organ";
import { ORGAN_II } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/organ-II";
import { ORGAN_III } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/organ-III";
import { STEEL_DRUM } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/steel-drum";
import { TUBULAR } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/tubular";
import { TUBULAR_II } from "~/pages/video/music/synth/nodes/oscillator/hooks/wave-presets/tubular-II";

type TConfig = {
  wave?: string;
  context: AudioContext;
};

type TUpdateConfig = {
  o: OscillatorNode;
  wave?: string;
  context: AudioContext;
};

export const resolveCustomWaveValues = (
  wave: string
): null | PeriodicWaveOptions => {
  switch (wave) {
    case ECustomWave.Blackmann:
      return generateWave(blackmanWave);
    case ECustomWave.Parabola:
      return generateWave(parabolaWave);
    case ECustomWave.Sawtooth:
      return generateWave(sawtoothWave);
    case ECustomWave.Square:
      return generateWave(squareWave);
    case ECustomWave.Sine:
      return generateWave(sine);
    case ECustomWave.SineII:
      return generateWave(sineII);
    case ECustomWave.SineIII:
      return generateWave(sineII);
    case ECustomWave.SineIV:
      return generateWave(sineIV);
    // case ECustomWave.SineV:
    //   return generateWave(sineV);
    case ECustomWave.ExponentialReverseSawtooth:
      return generateWave(
        expReverseSawtooth
      );
    case ECustomWave.Triangular:
      return generateWave(
        triangularWave
      );
    case ECustomWave.Triangle:
      return generateWave(triangleWave);
    case ECustomWave.Cosine:
      return generateWave(cosineWave);
    case ECustomWave.Tan:
      return generateWave(tanWave);
    case ECustomWave.Hamming:
      return generateWave(hammingWave);
    case ECustomWave.Hann:
      return generateWave(hannWave);
    case ECustomWave.Mirror:
      return generateMirrorCurve();
    case ECustomWave.Chiptune:
      return generateChipTuneWave();
    case ECustomWave.Horn:
      return HORN_WAVE;
    case ECustomWave.Rectangle:
      return generateWave(
        rectangularWave
      );
    case ECustomWave.Bartlett:
      return generateWave(bartlettWave);
    case ECustomWave.BartlettHann:
      return generateWave(
        bartlettHannWave
      );

    case ECustomWave.Gauss:
      return generateWave(gaussWave);
    case ECustomWave.MorningStar:
      return generateWave(
        morningStarWave
      );
    case ECustomWave.Lanczos:
      return generateWave(lanczosWave);

    case ECustomWave.Standard:
      return generateWave(standardWave);

    case ECustomWave.Blackmann:
      return generateWave(blackmanWave);

    case ECustomWave.Bass:
      return BASS_WAVE;
    case ECustomWave.Distortion:
      return generateWave(distortion);

    case ECustomWave.SharkFinn:
      return generateWave(sharkFinn);

    case ECustomWave.SteelDrum:
      return STEEL_DRUM;

    case ECustomWave.Brass:
      return BRASS_WAVE;

    case ECustomWave.Bell:
      return BELL_WAVE;

    case ECustomWave.Gong:
      return GONG_WAVE;

    case ECustomWave.Chime:
      return CHIME;

    case ECustomWave.Tubular:
      return TUBULAR;

    case ECustomWave.TubularII:
      return TUBULAR_II;

    case ECustomWave.Organ:
      return ORGAN;

    case ECustomWave.OrganII:
      return ORGAN_II;

    case ECustomWave.OrganIII:
      return ORGAN_III;

    default:
      return null;
  }
};

export const resolveCurve = ({
  o,
  wave,
  context,
}: TUpdateConfig): PeriodicWave | null => {
  let curve = null;

  if (wave) {
    const result =
      resolveCustomWaveValues(wave);
    if (result) {
      curve = new PeriodicWave(
        context,
        result
      );
    }
  }

  return curve;
};

export const updateOscillator = (
  config: TUpdateConfig
) => {
  const { o } = config;
  const curve = resolveCurve(config);
  if (curve) {
    o.setPeriodicWave(curve);
  }
  return o;
};

export const resolveOscillator = (
  config: TConfig
) => {
  const o =
    config.context.createOscillator();

  return updateOscillator({
    o,
    ...config,
  });
};
