const { pipeline } = require("stream");
const customOutputStream = require("./custom_output");
const { inputStream } = require("./inputStream");
const { outputStream } = require("./outputStream");
const { transformStream } = require("./transform_text");
const validation = require("./utils/validation");

exports.processes = (config, input, output) => {
  const customOut = customOutputStream(output);
  // if (config === 'no config') {
  //   console.error("no config");
  //   process.exit(9);
  // };

  // if (config === 'config dulicate' || input === 'config dulicate' || output === 'config dulicate') {
  //   console.error("config dulicate");
  //   process.exit(9);
  // };

  // const valid = validation(config);
  // if (!valid) {
  //   console.error("Config are required");
  //   process.exit(9);
  // };

  // if (config === '') {
  //   console.error("NO Config");
  //   process.exit(9);
  // }

  // shift = action === "encode" ? shift * 1 : shift * -1;

  pipeline(
    // console.log('object', config),
    inputStream(input),
    // console.log(inputStream(input)),
    transformStream(config),
    // outputStream(output),
    customOut,
    // customOutputStream(output),
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
