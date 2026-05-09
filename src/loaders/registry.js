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

import OrbitingDots from "./orbiting-dots/OrbitingDots.loader";
import OrbitingDotsPreview from "./orbiting-dots/OrbitingDots.preview";

import PulseRings from "./pulse-rings/PulseRings.loader";
import PulseRingsPreview from "./pulse-rings/PulseRings.preview";

import StripedBar from "./striped-bar/StripedBar.loader";
import StripedBarPreview from "./striped-bar/StripedBar.preview";

import TypingDots from "./typing-dots/TypingDots.loader";
import TypingDotsPreview from "./typing-dots/TypingDots.preview";

import FlipCard from "./flip-card/FlipCard.loader";
import FlipCardPreview from "./flip-card/FlipCard.preview";

import CubeSpinner from "./cube-spinner/CubeSpinner.loader";
import CubeSpinnerPreview from "./cube-spinner/CubeSpinner.preview";

import GearLoader from "./gear-loader/GearLoader.loader";
import GearLoaderPreview from "./gear-loader/GearLoader.preview";

import Hourglass from "./hourglass/Hourglass.loader";
import HourglassPreview from "./hourglass/Hourglass.preview";



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

  // Stroker Ring is a more refined and modern take on the classic spinner, using SVG stroke animation for a crisp and scalable effect. It is ideal for professional dashboards and interfaces where a clean, minimal loading indicator is desired.
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

  // Pulsing Dots is a gentle, rhythmic animation where dots softly scale or change opacity in a loop. It creates a calm and subtle loading experience, ideal for non-intrusive feedback in chat interfaces or friendly applications. The smooth pulsing motion conveys ongoing activity without being distracting, making it perfect for short waits or background tasks.
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

  // Linear Progress is a modern take on the traditional progress bar, featuring a smooth shimmer animation that continuously flows across the bar. It provides a sleek and contemporary feel while giving users a clear sense of ongoing activity. This loader is ideal for file uploads, page loading, form submissions, and any long-running processes where you want to indicate that something is happening without showing exact progress. The shimmer effect adds visual interest and can be customized in terms of height, speed, and color to fit seamlessly into various design systems.
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

  // Circular Progress is a clean, scalable circular progress loader built with SVG. It provides a premium feel and works beautifully at any size. This loader is ideal for dashboard widgets, profile updates, and data processing tasks where you want to indicate that something is happening without showing exact progress. The smooth animation creates a modern and professional appearance, while the ability to show progress percentage can enhance user feedback. However, it may require extra logic for real progress tracking and can be slightly more complex than basic spinners.
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

      useCases: ["Dashboard widgets", "Profile updates", "Data processing"],

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

  // Shimmer Skeleton is a realistic content placeholder that uses an animated shimmer effect to indicate loading. It is the industry standard for loading states in content-heavy applications, providing users with a clear sense of what is being loaded while reducing perceived waiting time. This loader is ideal for card layouts, list views, profile pages, and data tables where you want to maintain the structure of the content while it loads. The shimmer animation creates a visually engaging experience, but it takes more space than simple loaders and works best when used with actual content structure.
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

      useCases: ["Card layouts", "List views", "Profile pages", "Data tables"],

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

  // Wave is a dynamic wave animation that flows smoothly. It creates a sense of movement and fluidity, perfect for modern interfaces. This loader is ideal for processing data, streaming content, or audio-related UIs where you want to convey ongoing activity with a visually appealing and unique animation. The calming motion of the waves can enhance user experience, but it may be slightly more distracting than minimal loaders in very simple interfaces.
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

      useCases: ["Processing data", "Streaming content", "Audio-related UIs"],

      advantages: [
        "Very visually appealing",
        "Unique and memorable",
        "Calming motion",
      ],

      limitations: ["Slightly more distracting than minimal loaders"],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  // Orbiting Dots is an elegant loader featuring a central point with dots orbiting around it. It creates a sophisticated and premium loading experience, ideal for applications that want to convey a sense of creativity and modernity. This loader works well in AI tools, creative portfolios, and premium applications where you want to impress users with a unique animation. However, it may be slightly more complex than basic loaders and may not suit very minimal designs.
  {
    id: "orbiting-dots",
    name: "Orbiting Dots",
    description: "Central dot with orbiting dots around it.",
    categories: ["dots", "modern", "premium"],

    Loader: OrbitingDots,
    Preview: OrbitingDotsPreview,

    writeup: {
      intro:
        "Elegant loader featuring a central point with dots orbiting around it. Creates a sophisticated and premium loading experience.",

      useCases: ["Premium applications", "AI tools", "Creative portfolios"],

      advantages: ["Eye-catching and unique", "Modern and futuristic feel"],

      limitations: [
        "Slightly more complex animation",
        "May not suit very minimal designs",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  {
    id: "pulse-rings",
    name: "Pulse Rings",
    description: "Multiple concentric rings pulsing outward.",
    categories: ["rings", "modern", "minimal"],

    Loader: PulseRings,
    Preview: PulseRingsPreview,

    writeup: {
      intro:
        "Multiple expanding rings that pulse outward, creating a radar-like or breathing effect. Very smooth and calming.",

      useCases: ["Scanning / searching", "Syncing", "Background activity"],

      advantages: ["Beautiful and elegant", "Very smooth performance"],

      limitations: ["Can be subtle on small screens"],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  // Striped Bar is a dynamic progress bar with animated diagonal stripes that move continuously. It gives a strong sense of ongoing activity and is commonly used in modern interfaces. This loader is ideal for file uploads, data processing, and long-running tasks where you want to indicate that something is happening without showing exact progress. The moving stripes add visual interest and can be customized in terms of height, speed, and color to fit seamlessly into various design systems. However, it does not show exact percentage by default and can feel visually busy in very minimal designs.
  {
    id: "striped-bar",
    name: "Striped Bar",
    description: "Progress bar with moving diagonal stripes.",
    categories: ["progress", "modern", "bars"],

    Loader: StripedBar,
    Preview: StripedBarPreview,

    writeup: {
      intro:
        "A dynamic progress bar with animated diagonal stripes that move continuously. It gives a strong sense of ongoing activity and is commonly used in modern interfaces.",

      useCases: [
        "File uploads",
        "Data processing",
        "Long-running tasks",
        "Progress indicators",
      ],

      advantages: [
        "Visually engaging and modern",
        "Clearly indicates activity",
        "Familiar progress metaphor",
      ],

      limitations: [
        "Does not show exact percentage by default",
        "Can be visually busy in very minimal designs",
      ],
    },

    controls: {
      height: true,
      speed: true,
      color: true,
    },
  },

  // Typing Dots,
  {
    id: "typing-dots",
    name: "Typing Dots",
    description: "Animated typing indicator with dots and text.",
    categories: ["dots", "chat", "minimal"],

    Loader: TypingDots,
    Preview: TypingDotsPreview,

    writeup: {
      intro:
        "A realistic typing indicator that shows animated dots along with the word 'Loading'. Perfect for simulating real-time typing in chat interfaces.",

      useCases: [
        "Chat and messaging apps",
        "AI assistants",
        "Comment sections",
        "Live support systems",
      ],

      advantages: [
        "Highly familiar to users",
        "Creates sense of live activity",
        "Great for conversational UIs",
      ],

      limitations: [
        "Best suited for short waits",
        "Not ideal for heavy background tasks",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  // Flip Card is a playful and visually engaging loader that features a 3D flipping card animation. It adds a unique and modern touch to loading states, making it ideal for creative portfolios, fun applications, game interfaces, and dashboard widgets. The animation demonstrates depth and 3D capability, creating an eye-catching effect. However, it may be slightly more performance heavy than simpler loaders and may not suit very professional or minimal UIs.
  {
    id: "flip-card",
    name: "Flip Card",
    description: "A 3D flipping card animation.",
    categories: ["modern", "fun", "3d"],

    Loader: FlipCard,
    Preview: FlipCardPreview,

    writeup: {
      intro:
        "A continuous 3D flipping card loader that rotates on the Y-axis. It adds a playful and modern touch to loading states.",

      useCases: [
        "Creative portfolios",
        "Fun applications",
        "Game interfaces",
        "Dashboard widgets",
      ],

      advantages: [
        "Eye-catching and unique",
        "Demonstrates depth and 3D capability",
        "Great visual appeal",
      ],

      limitations: [
        "Slightly more performance heavy",
        "May not suit very professional/minimal UIs",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  // Cube Spinner is a fully 3D rotating cube loader created with CSS 3D transforms. It adds depth and a modern, premium feel to loading states, making it ideal for creative websites, 3D-focused applications, modern dashboards, and portfolio projects. The impressive 3D visual effect can captivate users and enhance the perceived value of the application. However, it may be slightly heavier on performance than simpler loaders and may not suit ultra-minimal designs.
  {
    id: "cube-spinner",
    name: "Cube Spinner",
    description: "3D rotating cube loader.",
    categories: ["3d", "modern", "premium"],

    Loader: CubeSpinner,
    Preview: CubeSpinnerPreview,

    writeup: {
      intro:
        "A fully 3D rotating cube created with CSS 3D transforms. It adds depth and a modern, premium feel to loading states.",

      useCases: [
        "Creative websites",
        "3D-focused applications",
        "Modern dashboards",
        "Portfolio projects",
      ],

      advantages: [
        "Impressive 3D visual effect",
        "No external dependencies",
        "Highly customizable",
      ],

      limitations: [
        "Slightly heavier on performance",
        "May not suit ultra-minimal designs",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },

  // Gear Loader
  {
    id: "gear-loader",
    name: "Gear Loader",
    description: "Interlocking rotating gears.",
    categories: ["mechanical", "modern", "premium"],

    Loader: GearLoader,
    Preview: GearLoaderPreview,

    writeup: {
      intro:
        "Multiple interlocking gears rotating in opposite directions. This mechanical loader gives a technical, industrial, and premium feel to loading states.",

      useCases: [
        "Settings / Configuration",
        "Processing heavy tasks",
        "Engineering & technical tools",
        "Dashboard loaders",
      ],

      advantages: [
        "Unique and memorable",
        "Conveys complex processing",
        "Great visual depth",
      ],

      limitations: [
        "Slightly more complex animation",
        "May not suit very minimal UIs",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },
  // Hourglass Loader is a classic and elegant loading animation that features an hourglass with flowing sand. It conveys the passage of time in a visually appealing way, making it ideal for waiting screens, processing requests, elegant web applications, and classic design systems. The hourglass is a universally understood symbol for waiting, and its timeless design adds a touch of sophistication to any interface. However, it does not show exact progress and is best suited for medium to long waits.
  {
    id: "hourglass",
    name: "Hourglass",
    description: "Classic sand flowing hourglass animation.",
    categories: ["classic", "elegant", "minimal"],

    Loader: Hourglass,
    Preview: HourglassPreview,

    writeup: {
      intro:
        "A timeless hourglass loader with flowing sand animation. It elegantly represents the passage of time and is perfect for sophisticated interfaces.",

      useCases: [
        "Waiting screens",
        "Processing requests",
        "Elegant web applications",
        "Classic design systems",
      ],

      advantages: [
        "Universally understood symbol",
        "Very elegant and timeless",
        "Strong visual metaphor for time",
      ],

      limitations: [
        "Does not show exact progress",
        "Best for medium to long waits",
      ],
    },

    controls: {
      size: true,
      speed: true,
      color: true,
    },
  },
];