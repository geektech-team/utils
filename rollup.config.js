import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: {
    index: "./lib/index.ts",
    'type': './lib/methods/type.ts',
    'debounce': './lib/methods/debounce.ts',
    'throttle': './lib/methods/throttle.ts',
    'deep-clone': './lib/methods/deep-clone.ts',
    'time-format': './lib/methods/time-format.ts',
    'memoize': './lib/methods/memoize.ts',
    'copy-to-clipboard': './lib/methods/copy-to-clipboard.ts',
    'enum-model': './lib/models/enum.ts',
    'event-bus': './lib/event-bus.ts',
    'cookie': './lib/cookie.ts',
  },
  output: {
    dir: "dist",
  },
  plugins: [resolve(), commonjs(), typescript()],
};
