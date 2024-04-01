import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

const modules = [
  {
    name: 'index',
    path: './lib/index.ts',
  },
  {
    name: 'type',
    path: './lib/methods/type.ts',
  },
  {
    name: 'debounce',
    path: './lib/methods/debounce.ts',
  },
  {
    name: 'throttle',
    path: './lib/methods/throttle.ts',
  },
  {
    name: 'deep-clone',
    path: './lib/methods/deep-clone.ts',
  },
  {
    name: 'time-format',
    path: './lib/methods/time-format.ts',
  },
  {
    name: 'memoize',
    path: './lib/methods/memoize.ts',
  },
  {
    name: 'copy-to-clipboard',
    path: './lib/methods/copy-to-clipboard.ts',
  },
  {
    name: 'enum-model',
    path: './lib/models/enum.ts',
  },
  {
    name: 'event-bus',
    path: './lib/event-bus.ts',
  },
  {
    name: 'cookie',
    path: './lib/cookie.ts',
  },
];

class Module {
  input = {};
  output = {};
  plugins = [];
  constructor({ plugins, output, modules }) {
    this.output = output;
    this.plugins = plugins;
    modules.forEach(item => {
      this.input[item.name] = item.path;
    });
  }
}

const esModules = new Module({
  modules,
  output: {
    dir: 'es',
    format: 'es',
  },
  plugins: [resolve(), typescript()],
});
const cjsModules = new Module({
  modules,
  output: {
    dir: 'cjs',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig-cjs.json' }),
  ],
});

export default [esModules, cjsModules];
