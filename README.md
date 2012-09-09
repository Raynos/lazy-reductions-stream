# lazy-reduce-stream

Wrap a stream with a reduction

## Example

```
var from = require("read-stream")
    , to = require("write-stream")
    , reduce = require("lazy-reduce-stream")
    , assert = require("assert")
    , list = []

// reduce(stream, iterator, initialValue)
var sums = reduce(from([0,1,2,3,4,5]), function (acc, value) {
    return acc + value
}, 0)

sums.pipe(to(list, function () {
    /* the summed states */
    assert.deepEqual(list, [0, 1, 3, 7, 12])
}))
```

## Installation

`npm install lazy-reduce-stream`

## Contributors

 - Raynos

## MIT Licenced