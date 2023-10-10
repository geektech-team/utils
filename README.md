# utils

## Dev

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Test

```bash
pnpm test
```

## Usage

### Common

#### type

```js
isArray(obj)
```

#### debounce

```js
debounce(callback, delay)
```

#### throttle

```js
throttle(callback, delay)
```

#### deepClone

```js
deepClone(source)
```

#### memoize

```js
memoize(callback)
```

#### timeFormat

```js
timeFormat(time, format); // "yyyy-MM-dd hh:mm:ss"
```

### Web

#### copyToClipboard

```js
copyToClipboard(text); 
```

### Model

#### EnumModel

```js
const enums = new EnumModel(); 
enums.addEnum(value, display, alias)
```
