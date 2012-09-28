var proxy = require("proxy-stream")

module.exports = reductions

function reductions(stream, iterator, initial) {
    return proxy(stream, transformation)

    function transformation (chunk, next) {
        initial = iterator(initial, chunk)
        next(initial)
    }
}
