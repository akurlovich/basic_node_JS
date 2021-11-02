const { Transform } = require("stream");
const cipher = require("./ciphers/cipher");

exports.transformStream = (config) => {
  // console.log('from transform', config)
  // return ceasar('chunk.toString("utf8")', 2);
  return new Transform({
    transform(chunk, _encoding, callback) {
      // console.log('chunk', chunk.toString("utf8"));
      // this.push(ceasar(chunk.toString("utf8"), shift));
      // this.push(atbash(chunk.toString("utf8")));
      this.push(cipher(chunk.toString("utf8"), config));
      callback();
    }
  })
}
