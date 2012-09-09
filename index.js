var proxy = require("proxy-stream")

module.exports = reductions

function reductions(stream, iterator, initial) {
    return proxy(stream, write, read, stream.end, [pipeWrite])

    function write(chunk) {
        return stream.write(reduction(chunk))
    }

    function read(bytes) {
        var chunk = stream.read(bytes)
        return chunk === null ? null : reduction(chunk)
    }

    function pipeWrite(chunk, buffer) {
        buffer.push(reduction(chunk))
    }

    function reduction(value) {
        initial = iterator(initial, value)
        return initial
    }
}