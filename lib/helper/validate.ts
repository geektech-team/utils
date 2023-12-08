import { FUNC_ERROR_TEXT } from "./constant";
import { isFunction } from "../methods/type";

export const ifNotFunction = (fn: unknown) => {
  if (!isFunction(fn)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
};
