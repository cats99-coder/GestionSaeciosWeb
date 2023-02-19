export const prop = (obj, atr) => {
  if (typeof atr !== "string") return "";
  if (atr.includes(".")) {
    const [a, b] = atr.split(".");
    if(!obj[a]) return ""
    return prop(obj[a], b);
  }
  return obj[atr];
};
