# math-precision [![build status](https://travis-ci.org/FlorinDavid/node-math-precision.svg)](http://travis-ci.org/FlorinDavid/node-math-precision)[![Dependencies](https://img.shields.io/david/FlorinDavid/node-math-precision.svg)](https://david-dm.org/FlorinDavid/node-math-precision)

> .round, .ceil, .floor with precision parameter. E.g. `.round(1.234, 2)` → `1.23`

This `node.js` package gives you a cleaner way to round numbers using precision
. It's simple, lightweight and it relies entirely on JS `Math` functions. 
It has no dependencies and it works on any `node.js` version. 
It's a pity not to use it! :)

All world wide web documentation about `decimal rounding` in *JavaScript*, 
including [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#PHP-Like_rounding_Method) 
lead us to this solution: multiply the number with 10 at the power of the 
desired precision (number of decimals), apply the `Math.` function and divide it 
with 10 at the same power
 
E.g. To round 1.2347 with precision 2 you should call

  `Math.round(1.2347 * 100) / 100   // = 1.23`
  
which is what this package actually does behind the scenes _(check the source 
code)_


> See other [examples](#examples) or run the [tests](#test) 

## Install

```sh
$ npm install math-precision
```

## Examples  

### round

```js
var round = require('math-precision').round

console.log(round(1.2347, 2))        // 1.23
console.log(round(1.235, 2))         // 1.24
console.log(round(1.2, 2))           // 1.2

```

### ceil

```js
var ceil = require('math-precision').ceil

console.log(ceil(1.2347, 2))          // 1.24
console.log(ceil(1.2, 2))             // 1.2

```

### floor

```js
var floor = require('math-precision').floor

console.log(floor(1.2361, 2))         // 1.23
console.log(floor(1.8, 2))            // 1.8

```

### using math object

```js
var math = require('math-precision')

console.log(math.round(1.2358, 2))    // 1.24
console.log(math.ceil(1.2358, 2))     // 1.24
console.log(math.floor(1.2358, 2))    // 1.23

```


## Test

Simply clone the repo, `npm install`, and run `npm test`

## License

#### [MIT](https://opensource.org/licenses/MIT)
