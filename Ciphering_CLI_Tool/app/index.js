const { Command } = require("commander");
const { process } = require("./process");

const program = new Command();
program
  .storeOptionsAsProperties(false)
  .option("-c, --config <type>", "a config", value => value)
  .option("-i, --input <type>", "an input file", value => value)
  .option("-o, --output <type>", "an output file", value => value)
  .action(() => {
    const { config, input, output } = program.opts();
    console.log(program.opts());
    // console.log(config);
    // console.log(input);
    // console.log(output);
    process(
      config,
      input,
      output
    )
  })
  .parse(process.argv);