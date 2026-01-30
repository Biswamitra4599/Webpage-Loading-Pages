import { loaderRegistry } from "../loaders/registry";

export const categories = Array.from(
  new Map(
    loaderRegistry.map((loader) => [
      loader.category,
      {
        id: loader.category,
        label:
          loader.category.charAt(0).toUpperCase() +
          loader.category.slice(1) +
          " Loaders",
      },
    ]),
  ).values(),
);
