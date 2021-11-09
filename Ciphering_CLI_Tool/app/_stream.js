
const { Transform, pipeline } = require("stream"),
      inputStream = process.stdin,
      outputStream = process.stdout;

const upperStream = new Transform({
  transform(chunk, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

pipeline(
  inputStream,
  upperStream,
  outputStream,
  err => {
    if (err) {
      console.error("error", err);
    }
  }
)