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

import PulsingDots from "./pulsing-dots/PulsingDots.loader";
import PulsingDotsPreview from "./pulsing-dots/PulsingDots.preview";


import LinearProgress from "./linear-progress/LinearProgress.loader";
import LinearProgressPreview from "./linear-progress/LinearProgress.preview";

import CircularProgress from "./circular-progress/CircularProgress.loader";
import CircularProgressPreview from "./circular-progress/CircularProgress.preview";

import ShimmerSkeleton from "./shimmer-skeleton/ShimmerSkeleton.loader";
import ShimmerSkeletonPreview from "./shimmer-skeleton/ShimmerSkeleton.preview";

import Wave from "./wave/Wave.loader";
import WavePreview from "./wave/Wave.preview";

// import OrbitingDots from "./orbiting-dots/OrbitingDots.loader";
// import OrbitingDotsPreview from "./orbiting-dots/OrbitingDots.preview";

// import PulseRings from "./pulse-rings/PulseRings.loader";
// import PulseRingsPreview from "./pulse-rings/PulseRings.preview";

export const loaderRegistry = [
  // Spinner and Dots are the most basic, so we can keep them at the top for easy access
  {
    id: "spinner",
    name: "Spinner / Circular Loader",
    description: "A classic rotating circular loader.",
    categories: ["rings", "minimal", "chat"],
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
    categories: ["dots", "minimal", "chat"],
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
    categories: ["dots", "minimal", "chat"],

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
    categories: ["bars", "minimal", "audio"],

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
    categories: ["rings", "minimal", "chat"],

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
    categories: ["rings", "minimal", "chat"],

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

  {
    id: "pulsing-dots",
    name: "Pulsing Dots",
    description: "Soft, rhythmic dot pulses to indicate ongoing activity.",
    categories: ["dots", "minimal", "chat"],

    Loader: PulsingDots,
    Preview: PulsingDotsPreview,

    writeup: {
      intro:
        "The pulsing dots loader animates dots with a gentle scaling or opacity change. It creates a calm and subtle loading experience, ideal for non-intrusive feedback.",

      useCases: [
        "Messaging and chat interfaces",
        "Lightweight background operations",
        "Friendly or informal applications",
      ],

      advantages: ["Soft and unobtrusive", "Feels friendly and approachable"],

      limitations: [
        "Not suitable for long waits",
        "No indication of progress or completion time",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },
    {
    id: "linear-progress",
    name: "Linear Progress",
    description: "Smooth horizontal bar with shimmer effect.",
    categories: ["progress", "modern", "minimal"],

    Loader: LinearProgress,
    Preview: LinearProgressPreview,

    writeup: {
      intro:
        "A modern linear progress bar with a smooth shimmer animation. It gives users a clear sense of ongoing activity with a sleek, contemporary feel.",

      useCases: [
        "File uploads",
        "Page loading",
        "Form submissions",
        "Long-running processes",
      ],

      advantages: [
        "Shows continuous activity clearly",
        "Familiar and intuitive",
        "Highly customizable",
      ],

      limitations: [
        "Does not show exact percentage unless enhanced",
        "Can feel generic if overused",
      ],
    },

    controls: {
      height: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "circular-progress",
    name: "Circular Progress",
    description: "SVG-based circular loader with smooth animation.",
    categories: ["rings", "progress", "modern"],

    Loader: CircularProgress,
    Preview: CircularProgressPreview,

    writeup: {
      intro:
        "A clean, scalable circular progress loader built with SVG. It provides a premium feel and works beautifully at any size.",

      useCases: [
        "Dashboard widgets",
        "Profile updates",
        "Data processing",
      ],

      advantages: [
        "Scales perfectly at any resolution",
        "Can show progress percentage",
        "Modern and professional appearance",
      ],

      limitations: [
        "Slightly more complex than basic spinners",
        "May need extra logic for real progress tracking",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "shimmer-skeleton",
    name: "Shimmer Skeleton",
    description: "Skeleton loading card with shimmer effect.",
    categories: ["skeleton", "modern", "ui"],

    Loader: ShimmerSkeleton,
    Preview: ShimmerSkeletonPreview,

    writeup: {
      intro:
        "A realistic content placeholder with animated shimmer. This is the industry standard for loading states in content-heavy applications.",

      useCases: [
        "Card layouts",
        "List views",
        "Profile pages",
        "Data tables",
      ],

      advantages: [
        "Excellent user experience during loading",
        "Reduces perceived loading time",
        "Highly realistic",
      ],

      limitations: [
        "Takes more space than simple loaders",
        "Best used with actual content structure",
      ],
    },

    controls: {
      // Usually no controls needed, or you can add theme later
    },
  },

  // Wave
  {
    id: "wave",
    name: "Wave Loader",
    description: "Animated wavy line resembling sound or signal waves.",
    categories: ["wave", "modern", "bars"],

    Loader: Wave,
    Preview: WavePreview,

    writeup: {
      intro:
        "A dynamic wave animation that flows smoothly. It creates a sense of movement and fluidity, perfect for modern interfaces.",

      useCases: [
        "Processing data",
        "Streaming content",
        "Audio-related UIs",
      ],

      advantages: [
        "Very visually appealing",
        "Unique and memorable",
        "Calming motion",
      ],

      limitations: [
        "Slightly more distracting than minimal loaders",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  // {
  //   id: "orbiting-dots",
  //   name: "Orbiting Dots",
  //   description: "Central dot with orbiting dots around it.",
  //   categories: ["dots", "modern", "premium"],

  //   Loader: OrbitingDots,
  //   Preview: OrbitingDotsPreview,

  //   writeup: {
  //     intro:
  //       "Elegant loader featuring a central point with dots orbiting around it. Creates a sophisticated and premium loading experience.",

  //     useCases: [
  //       "Premium applications",
  //       "AI tools",
  //       "Creative portfolios",
  //     ],

  //     advantages: [
  //       "Eye-catching and unique",
  //       "Modern and futuristic feel",
  //     ],

  //     limitations: [
  //       "Slightly more complex animation",
  //       "May not suit very minimal designs",
  //     ],
  //   },

  //   controls: {
  //     size: true,
  //     speed: true,
  //     color: true,
  //   },
  // },

  // {
  //   id: "pulse-rings",
  //   name: "Pulse Rings",
  //   description: "Multiple concentric rings pulsing outward.",
  //   categories: ["rings", "modern", "minimal"],

  //   Loader: PulseRings,
  //   Preview: PulseRingsPreview,

  //   writeup: {
  //     intro:
  //       "Multiple expanding rings that pulse outward, creating a radar-like or breathing effect. Very smooth and calming.",

  //     useCases: [
  //       "Scanning / searching",
  //       "Syncing",
  //       "Background activity",
  //     ],

  //     advantages: [
  //       "Beautiful and elegant",
  //       "Very smooth performance",
  //     ],

  //     limitations: ["Can be subtle on small screens"],
  //   },

  //   controls: {
  //     size: true,
  //     speed: true,
  //     color: true,
  //   },
  // },

  // {
  //   id: "linear-progress",
  //   name: "Linear Progress",
  //   description: "Smooth horizontal bar with shimmer effect.",
  //   categories: ["progress", "modern", "minimal"],

  //   Loader: LinearProgress,
  //   Preview: LinearProgressPreview,

  //   writeup: {
  //     intro:
  //       "A modern linear progress bar with a smooth shimmer animation. It gives users a clear sense of ongoing activity with a sleek, contemporary feel.",

  //     useCases: [
  //       "File uploads",
  //       "Page loading",
  //       "Form submissions",
  //       "Long-running processes",
  //     ],

  //     advantages: [
  //       "Shows continuous activity clearly",
  //       "Familiar and intuitive",
  //       "Highly customizable",
  //     ],

  //     limitations: [
  //       "Does not show exact percentage unless enhanced",
  //       "Can feel generic if overused",
  //     ],
  //   },

  //   controls: {
  //     height: true,
  //     speed: true,
  //     color: true,
  //   },
  // },

];