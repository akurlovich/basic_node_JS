const { pipeline } = require("stream"),
      { inputStream } = require("./inputStream"),
      { outputStream } = require("./outputStream"),
      { transformStream } = require("./transform_text");

exports.process = (shift, action, input, output) => {
  if (!action || !shift) {
    console.error("Action and shift are required");
    process.exit(9);
  }

  shift = action === "encode" ? shift * 1 : shift * -1;

  pipeline(
    inputStream(input),
    transformStream(shift),
    outputStream(output),
    error => {
      if (error) {
        console.error("Somthing gone wrong", error);
        process.exit(9);
      }
    }
  );
}
