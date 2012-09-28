# lazy-reductions-stream

Wrap a stream with a reduction

## Example

```
var from = require("read-stream").fromArray
    , to = require("write-stream").toArray
    , reductions = require("lazy-reductions-stream")
    , assert = require("assert")

// reduce(stream, iterator, initialValue)
var sums = reductions(from([1,2,3,4,5]), function (acc, value) {
    return acc + value
}, 0)

sums.pipe(to([], function (list) {
    // the summed states
    assert.deepEqual(list, [1, 3, 6, 10, 15])
    console.log("list", list)
}))
```

reductions takes a stream as the first arguments and reduces a new readable / writable stream that applies the reduction transformation to all reads / writes.

The pipe method of the returned stream is overwritten to pipe the underlying stream through a reducing through stream

## Installation

`npm install lazy-reductions-stream`

## Contributors

 - Raynos

## MIT Licenced
