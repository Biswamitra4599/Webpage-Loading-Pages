import { loaderRegistry } from "../loaders/registry.js";

export function getLoadersByCategory(categoryId) {
  if (categoryId === "all") return loaderRegistry;

  return loaderRegistry.filter((loader) =>
    loader.categories?.includes(categoryId),
  );
}
