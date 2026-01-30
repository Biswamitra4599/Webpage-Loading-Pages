import Spinner from "./spinner/Spinner.loader";
import SpinnerPreview from "./spinner/Spinner.preview";

import Dots from "./dots/Dots.loader";
import DotsPreview from "./dots/Dots.preview";

import BouncingDots from "./bouncing-dots/BouncingDots";

import EqualizerBars from "./equalizer-bars/EqualizerBars";

import Ripple from "./ripple/Ripple";

import StrokeRing from "./stroke-ring/StrokeRing";

// import PulsingDots from "./pulsing-dots/PulsingDots";
import PulsingDots from "./pulsing-dots/PulsingDotsLoader";



export const loaderRegistry = [
  {
    id: "spinner",
    name: "Spinner",
    description: "Classic rotating loader",
    category: "minimal",
    Loader: Spinner,
    Preview: SpinnerPreview,
    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "dots",
    name: "Dots",
    description: "Three bouncing dots",
    category: "minimal",
    Loader: Dots,
    Preview: DotsPreview,
    controls: {
      size: true,
      speed: false,
      color: true,
    },
  },

  {
    id: "bouncing-dots",
    name: "Bouncing Dots",
    description: "Three dots bouncing in sequence",
    Loader: BouncingDots,
    controls: { size: true, speed: true, color: true },
  },

  {
    id: "equalizer-bars",
    name: "Equalizer Bars",
    description: "Animated audio-style bars",
    Loader: EqualizerBars,
    controls: { size: true, speed: true, color: true },
  },

  {
    id: "ripple",
    name: "Ripple",
    description: "Expanding wave circles",
    Loader: Ripple,
    controls: { size: true, speed: true, color: true },
  },

  {
    id: "stroke-ring",
    name: "Stroke Ring",
    description: "SVG circular stroke spinner",
    Loader: StrokeRing,
    controls: { size: true, speed: true, color: true },
  },

  {
    id: "pulsing-dots",
    name: "Pulsing Dots",
    Loader: PulsingDots,
    controls: { size: true, speed: true, color: true },
  },
];
