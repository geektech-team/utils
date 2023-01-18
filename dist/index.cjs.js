'use strict';

const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
function isArray(obj) {
    return getType(obj) === "Array";
}
function isObject(obj) {
    return getType(obj) === "Object";
}
function isString(obj) {
    return getType(obj) === "String";
}
function isNumber(obj) {
    return getType(obj) === "Number" && obj === obj;
}
function isRegExp(obj) {
    return getType(obj) === "RegExp";
}
function isFile(obj) {
    return getType(obj) === "File";
}
function isBlob(obj) {
    return getType(obj) === "Blob";
}
function isUndefined(obj) {
    return obj === undefined;
}
function isFunction(obj) {
    return typeof obj === "function";
}
function isEmptyObject(obj) {
    return isObject(obj) && Object.keys(obj).length === 0;
}

const FUNC_ERROR_TEXT = "Expected a function";

const ifNotFunction = (fn) => {
    if (!isFunction(fn)) {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
};

/**
 * debounce
 * @param obj object to deep clone
 * @returns {Function}
 */
function debounce(callback, delay = 60) {
    ifNotFunction(callback);
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback.call(this, ...args);
        }, delay);
    };
}

/**
 * 节流
 * @param fn {*}  执行函数
 * @param delay {*}  节流时间,毫秒
 * @returns {Function}
 */
function throttle(callback, delay = 60) {
    ifNotFunction(callback);
    let flag = true;
    return function (...args) {
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

const find = (uniqueList, source) => {
    for (var i = 0; i < uniqueList.length; i++) {
        if (uniqueList[i].source === source) {
            return uniqueList[i];
        }
    }
    return null;
};
const deepClone = (source) => {
    const uniqueList = [];
    return (function _deepClone(source) {
        let target = Array.isArray(source) ? [] : {};
        if (source && typeof source === "object") {
            const uniqueData = find(uniqueList, source);
            if (uniqueData)
                return uniqueData.target;
            uniqueList.push({
                source: source,
                target: target,
            });
            for (let key in source) {
                let prop = source[key];
                if (prop && typeof prop === "object") {
                    target[key] = _deepClone(prop);
                }
                else {
                    target[key] = prop;
                }
            }
        }
        return target;
    })(source);
};

exports.debounce = debounce;
exports.deepClone = deepClone;
exports.isArray = isArray;
exports.isBlob = isBlob;
exports.isEmptyObject = isEmptyObject;
exports.isFile = isFile;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isRegExp = isRegExp;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.throttle = throttle;
