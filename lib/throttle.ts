import { ifNotFunction } from "./validate";

/**
 * 节流
 * @param fn {*}  执行函数
 * @param delay {*}  节流时间,毫秒
 * @returns {Function}
 */
export function throttle(callback: Function, delay = 60): typeof callback {
  ifNotFunction(callback);
  let flag = true;
    return function (
    this: any,
    ...args: any[]
  ) {
    if (flag) {
      flag = false;
      const res = callback.call(this, ...args);
      setTimeout(() => {
        flag = true;
      }, delay);
      return res;
    }
    return undefined;
  };
}
