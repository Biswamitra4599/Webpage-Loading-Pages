import { loaderRegistry } from "../loaders/registry";

export const categories = Array.from(
  new Map(
    loaderRegistry
      .flatMap((loader) => loader.categories ?? [])
      .map((category) => [
        category,
        {
          id: category,
          label:
            category.charAt(0).toUpperCase() + category.slice(1) + " Loaders",
        },
      ]),
  ).values(),
);
