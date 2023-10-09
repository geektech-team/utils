import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: {
    index: "./lib/index.ts",
    'type': './lib/utils/type.ts',
    'debounce': './lib/utils/debounce.ts',
    'throttle': './lib/utils/throttle.ts',
    'deep-clone': './lib/utils/deep-clone.ts',
    'time-format': './lib/utils/time-format.ts',
    'memoize': './lib/utils/memoize.ts',
  },
  output: {
    dir: "dist",
  },
  plugins: [resolve(), commonjs(), typescript()],
};
