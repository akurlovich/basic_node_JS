const { pipeline } = require("stream");
const { inputStream } = require("./inputStream");
const { outputStream } = require("./outputStream");
const { transformStream } = require("./transform_text");
const validation = require("./validation");

exports.process = (config, input, output) => {
  // console.log(config.split('-'));
  const valid = validation(config);
  if (!valid) {
    console.error("Config are required");
    process.exit(9);
  }

  // if (config === '') {
  //   console.error("NO Config");
  //   process.exit(9);
  // }

  // shift = action === "encode" ? shift * 1 : shift * -1;

  pipeline(
    // console.log('object', config),
    inputStream(input),
    // console.log(inputStream(input)),
    transformStream(),
    outputStream(output),
    error => {
      if (error) {
        console.error("Somthing gone wrong", error);
        process.exit(9);
      }
    }
  );
}


// exports.process = (shift, action, input, output) => {
//   if (!action || !shift) {
//     console.error("Action and shift are required");
//     process.exit(9);
//   }

//   shift = action === "encode" ? shift * 1 : shift * -1;

//   pipeline(
//     inputStream(input),
//     transformStream(shift),
//     outputStream(output),
//     error => {
//       if (error) {
//         console.error("Somthing gone wrong", error);
//         process.exit(9);
//       }
//     }
//   );
// }
