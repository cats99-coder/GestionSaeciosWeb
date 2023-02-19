import { prop } from "./prop";

/**
 *
 * @param {String} query
 */
export const filterSearch = (query) => {
  if (query === "") return () => true;
  const queryNormalize = query.toLowerCase();
  return (value) => {
    if (typeof value == "string") {
      return value === queryNormalize;
    }
    if (typeof value == "object") {
      return Object.keys(value).some((key) => {
        const normalizeValue = prop(value, key);
        return normalizeValue.toLowerCase() === queryNormalize;
      });
    }
  };
};
