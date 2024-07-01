export const subStr = (str: string): string => {
  if (str.length > 80) return str.substring(0, 80) + "...";
  return str;
};
