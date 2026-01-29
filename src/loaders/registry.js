// import Spinner from "./spinner/Spinner.loader";
// import SpinnerPreview from "./spinner/Spinner.preview";

// export const loaderRegistry = [
//   {
//     id: "spinner",
//     name: "Spinner",
//     description: "Classic rotating loader",
//     category: "minimal",
//     Loader: Spinner,
//     Preview: SpinnerPreview,
//   },
// ];

import Spinner from "./spinner/Spinner.loader";
import SpinnerPreview from "./spinner/Spinner.preview";

import Dots from "./dots/Dots.loader";
import DotsPreview from "./dots/Dots.preview";

export const loaderRegistry = [
  {
    id: "spinner",
    name: "Spinner",
    description: "Classic rotating loader",
    category: "minimal",
    Loader: Spinner,
    Preview: SpinnerPreview,
  },
  {
    id: "dots",
    name: "Dots",
    description: "Three bouncing dots",
    category: "minimal",
    Loader: Dots,
    Preview: DotsPreview,
  },
];
