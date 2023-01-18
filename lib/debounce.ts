import { ifNotFunction } from "./validate";

/**
 * debounce
 * @param obj object to deep clone
 * @returns {Function}
 */

export function debounce(
  callback: Function,
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
