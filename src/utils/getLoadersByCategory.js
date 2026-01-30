import { loaderRegistry } from "../loaders/registry";

export function getLoadersByCategory(categoryId) {
  return loaderRegistry.filter((loader) => loader.category === categoryId);
}
