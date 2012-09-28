var from = require("read-stream").fromArray
    , to = require("write-stream").toArray
    , reductions = require("..")
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
