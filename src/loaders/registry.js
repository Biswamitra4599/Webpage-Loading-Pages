// export const loaderRegistry = [
//   {
//     id: "spinner",
//     name: "Spinner",
//     description: "Classic rotating loader",
//     category: "minimal",
//   },
// ];

import Spinner from "./spinner/Spinner.loader";
import SpinnerPreview from "./spinner/Spinner.preview";

export const loaderRegistry = [
  {
    id: "spinner",
    name: "Spinner",
    description: "Classic rotating loader",
    category: "minimal",
    Loader: Spinner,
    Preview: SpinnerPreview,
  },
];
