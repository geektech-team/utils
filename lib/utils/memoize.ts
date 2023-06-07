/**
 * memoize
 * @param callback
 * @returns {Function}
 */
export function memoize(callback: Function) {
  const cache = new Map();
  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = callback.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
