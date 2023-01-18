const getType = (obj: unknown) =>
  Object.prototype.toString.call(obj).slice(8, -1);

export function isArray(obj: any): obj is any[] {
  return getType(obj) === "Array";
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return getType(obj) === "Object";
}

export function isString(obj: any): obj is string {
  return getType(obj) === "String";
}

export function isNumber(obj: any): obj is number {
  return getType(obj) === "Number" && obj === obj;
}

export function isRegExp(obj: any) {
  return getType(obj) === "RegExp";
}

export function isFile(obj: any): obj is File {
  return getType(obj) === "File";
}

export function isBlob(obj: any): obj is Blob {
  return getType(obj) === "Blob";
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === "function";
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}
