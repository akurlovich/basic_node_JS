const { processes } = require("./process");
const getValue = require("./utils/utils");

// console.log(process.argv);


// const message = getValue('-i');
// console.log(message);

processes(getValue('-c'), getValue('-i'), getValue('-o'));


// const program = new Command();
// program
//   .storeOptionsAsProperties(false)
//   .option("-c, --config <type>", "a config", value => value)
//   .option("-i, --input <type>", "an input file", value => value)
//   .option("-o, --output <type>", "an output file", value => value)
//   .action(() => {
//     const { config, input, output } = program.opts();
//     console.log(program.opts());
//     // console.log(config);
//     // console.log(input);
//     // console.log(output);
//     process(
//       config,
//       input,
//       output
//     )
//   })
//   .parse(process.argv);