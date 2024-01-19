import { ifNotFunction } from "../helper/validate";

/**
 * debounce
 * @param obj object to deep clone
 * @returns {(...args: any[]) => void}
 */

export function debounce(
  callback: (...args: any[]) => void,
  delay = 60
): (this: any, ...args: any[]) => void {
  ifNotFunction(callback);
  let timer: any;
  return function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.call(this, ...args);
    }, delay);
  };
}
