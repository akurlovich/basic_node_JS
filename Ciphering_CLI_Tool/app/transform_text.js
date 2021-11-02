const { Transform } = require("stream"),
      { ceasar } = require("./caesar");
const { atbash } = require("./atbash");

exports.transformStream = () => {
  // console.log('from transform')
  // return ceasar('chunk.toString("utf8")', 2);
  return new Transform({
    transform(chunk, _encoding, callback) {
      // console.log('chunk', chunk.toString("utf8"));
      // this.push(ceasar(chunk.toString("utf8"), shift));
      this.push(atbash(chunk.toString("utf8")));
      callback();
    }
  })
}
