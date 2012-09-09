var from = require("read-stream")
    , to = require("write-stream")
    , through = require("through-stream")
    , reduce = require("..")
    , assert = require("assert")
    , list = []

// reduce(stream, iterator, initialValue)
var sums = reduce(from([1,2,3,4,5]), function (acc, value) {
    return acc + value
}, 0)

sums.pipe(to(list, function () {
    // the summed states
    assert.deepEqual(list, [1, 3, 6, 10, 15])
    console.log("list", list)
}))