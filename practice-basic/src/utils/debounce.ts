/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/debounce.ts
export const debounce = (func: (...args: any[]) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), 1000);
  };
};
