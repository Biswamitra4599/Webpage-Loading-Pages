import Spinner from "./spinner/Spinner.loader";
import SpinnerPreview from "./spinner/Spinner.preview";

import Dots from "./dots/Dots.loader";
import DotsPreview from "./dots/Dots.preview";

import BouncingDots from "./bouncing-dots/BouncingDots.loader";
import BouncingDotsPreview from "./bouncing-dots/BouncingDots.preview";

import EqualizerBars from "./equalizer-bars/EqualizerBars.loader";
import EqualizerBarsPreview from "./equalizer-bars/EqualizerBars.preview";

import Ripple from "./ripple/Ripple.loader";
import RipplePreview from "./ripple/Ripple.preview";

import StrokeRing from "./stroke-ring/StrokeRing.loader";
import StrokeRingPreview from "./stroke-ring/StrokeRing.preview";

// import PulsingDots from "./pulsing-dots/PulsingDots.loader";
// import PulsingDotsPreview from "./pulsing-dots/PulsingDots.preview";

// import BouncingDots from "./bouncing-dots/BouncingDots";


// import StrokeRing from "./stroke-ring/StrokeRing";

// import PulsingDots from "./pulsing-dots/PulsingDots";
import PulsingDots from "./pulsing-dots/PulsingDotsLoader";

export const loaderRegistry = [
  {
    id: "spinner",
    name: "Spinner / Circular Loader",
    description: "A classic rotating circular loader.",
    category: "minimal",
    Loader: Spinner,
    Preview: SpinnerPreview,

    writeup: {
      intro:
        "A spinner is one of the most traditional loading indicators, usually represented by a rotating circle.",

      useCases: [
        "Short waiting times",
        "Background tasks without a known duration",
      ],

      advantages: ["Simple and universally recognized", "Easy to implement"],

      limitations: [
        "Does not indicate progress",
        "No estimate of remaining time",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "dots",
    name: "Dots Loader",
    description: "Three animated dots indicating activity.",
    category: "minimal",
    Loader: Dots,
    Preview: DotsPreview,

    writeup: {
      intro:
        "The dots loader uses sequentially animated dots to convey ongoing activity in a lightweight and friendly way.",

      useCases: [
        "Chat applications",
        "Typing indicators",
        "Casual or playful UIs",
      ],

      advantages: [
        "Feels lightweight and friendly",
        "Great for conversational interfaces",
      ],

      limitations: ["Not suitable for long waits", "Does not show progress"],
    },

    controls: {
      size: true,
      color: true,
    },
  },

  {
    id: "bouncing-dots",
    name: "Bouncing Dots",
    description:
      "Three dots bouncing in sequence to indicate ongoing activity.",
    category: "dots",

    Loader: BouncingDots,
    Preview: BouncingDotsPreview,

    writeup: {
      intro:
        "The bouncing dots loader uses a simple three-dot animation where each dot scales or moves in sequence. It is commonly used to convey lightweight, continuous activity.",

      useCases: [
        "Chat and messaging interfaces",
        "Typing indicators",
        "Short background operations",
      ],

      advantages: [
        "Feels lightweight and friendly",
        "Works well in conversational UIs",
        "Simple animation with low visual noise",
      ],

      limitations: [
        "Does not indicate progress",
        "Not ideal for long or blocking operations",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "equalizer-bars",
    name: "Equalizer Bars",
    description: "Animated audio-style bars that rise and fall in sequence.",
    category: "bars",

    Loader: EqualizerBars,
    Preview: EqualizerBarsPreview,

    writeup: {
      intro:
        "The equalizer bars loader mimics the look of audio equalizers, with multiple vertical bars animating at different heights. It conveys continuous activity with a rhythmic, energetic feel.",

      useCases: [
        "Audio or music-related interfaces",
        "Media players",
        "Live activity indicators",
      ],

      advantages: [
        "Visually dynamic and engaging",
        "Works well for media-centric applications",
      ],

      limitations: [
        "Can feel distracting in minimal UIs",
        "Does not convey progress or duration",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "ripple",
    name: "Ripple",
    description: "Expanding circular waves radiating outward.",
    category: "rings",

    Loader: Ripple,
    Preview: RipplePreview,

    writeup: {
      intro:
        "The ripple loader displays expanding circular waves that fade as they grow. It suggests propagation or spreading activity, making it ideal for touch or interaction-based feedback.",

      useCases: [
        "Touch or click feedback",
        "Location-based actions",
        "Background polling or syncing",
      ],

      advantages: [
        "Smooth and calming visual effect",
        "Feels responsive and modern",
      ],

      limitations: [
        "Not suitable for precise progress indication",
        "May feel slow for short waits",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "stroke-ring",
    name: "Stroke Ring",
    description: "Minimal circular spinner using CSS stroke animation.",
    category: "rings",

    Loader: StrokeRing,
    Preview: StrokeRingPreview,

    writeup: {
      intro:
        "The stroke ring loader uses an SVG circle with an animated stroke to create a clean, minimal spinning effect. It is commonly seen in modern dashboards and design systems.",

      useCases: [
        "Dashboards and admin panels",
        "Form submissions",
        "Minimal or professional interfaces",
      ],

      advantages: [
        "Crisp and scalable at any size",
        "Low visual noise",
        "Easy to theme with color",
      ],

      limitations: [
        "Less expressive than complex animations",
        "May feel generic if overused",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },
];