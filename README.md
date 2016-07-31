# math-precision

This node.js package gives you a cleaner way to round numbers using pecision
 
e.g. To round 1.2347 with precision 2 you can call
 
 `math.round(1.2347, 2) = 1.23`

instead of using something like
 
 `Math.round(1.2347 * 100) / 100   // = 1.23`   (this is done beneath the function call `.round(number, precision)`)
 

> See other [examples](#examples) or run the [tests](#test) 

## Install

```sh
$ npm i math-precision
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
