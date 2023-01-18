/**
 * 节流
 * @param fn {*}  执行函数
 * @param delay {*}  节流时间,毫秒
 * @returns {Function}
 */
export declare function throttle(callback: Function, delay?: number): typeof callback;
