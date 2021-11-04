const validation = require("../utils/validation");

const getConfig = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  if ((process.argv[flagIndex + 1]) === undefined) {
    console.error("Config are required");
    process.exit(9);
  }
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    // console.log('first')
    // return flagIndex !== -1 ? process.argv[flagIndex + 1] : 'no config';
    if (flagIndex !== -1) {
      // console.log('second')
      const valid = validation(process.argv[flagIndex + 1]);
      if (!valid) {
        console.error("Config are required");
        process.exit(9);
      };
      return process.argv[flagIndex + 1];
    } else {
      console.log('object')
      console.error("No config options");
      process.exit(9);
    }
  } else {
    console.error("Сonfig duplicate");
    process.exit(9);
  }
};

// if (config === 'no config') {
//     console.error("no config");
//     process.exit(9);
//   };

//   if (config === 'config dulicate' || input === 'config dulicate' || output === 'config dulicate') {
//     console.error("config dulicate");
//     process.exit(9);
//   };

const getInput = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
  } else {
    console.error("Input file config duplicate");
    process.exit(9);
  }
};

const getOutput = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
  } else {
    console.error("Ouput file config duplicate");
    process.exit(9);
  }
};

module.exports = { 
  getConfig,
  getInput,
  getOutput,
}

