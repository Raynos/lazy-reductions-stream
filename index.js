var through = require("through-stream")
    , reemit = require("re-emitter").reemit

module.exports = reduce

function reduce(stream, iterator, initial) {
    var reduced = through(write, read, stream.end)

    reemit(stream, reduced, ["readable", "drain", "end"])

    reduced.writable = stream.writable
    reduced.readable = stream.readable

    reduced.pipe = pipe

    return reduced

    function write(chunk) {
        return stream.write(reduction(chunk))
    }

    function read(bytes) {
        var chunk = stream.read(bytes)
        return chunk === null ? null : reduction(chunk)
    }

    function pipe(target) {
        var reducer = through(writeChunk)
        reducer.pipe(target)
        stream.pipe(reducer)
        return target
    }

    function writeChunk(chunk, buffer) {
        buffer.push(reduction(chunk))
    }

    function reduction(value) {
        initial = iterator(initial, value)
        return initial
    }
}