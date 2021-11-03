const getConfig = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : 'no config';
  } else {
    return 'config dulicate';
  }
};

const getInput = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
  } else {
    return 'config dulicate';
  }
};

const getOutput = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
  } else {
    return 'config dulicate';
  }
};

module.exports = { 
  getConfig,
  getInput,
  getOutput,
}

