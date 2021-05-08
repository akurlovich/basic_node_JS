const { Transform } = require("stream"),
      { ceasar } = require("./logic");

exports.transformStream = (shift) => {
  return new Transform({
    transform(chunk, _encoding, callback) {
      this.push(ceasar(chunk.toString("utf8"), shift));
      callback();
    }
  })
}
