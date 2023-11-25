// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepCopy = (obj?: any): typeof obj => {
  if (Array.isArray(obj)) {
    return obj.map((_obj) => deepCopy(_obj));
  }

  if (obj && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, deepCopy(v)])
    );
  }

  return obj;
};
