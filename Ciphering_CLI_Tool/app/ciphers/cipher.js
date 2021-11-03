const { atbash } = require("./atbash");
const { ceasar } = require("./caesar");
const { rot8 } = require("./rot_8");

const cipher = (text, config) => {
  // console.log('from cipher', config)
  const arr = config.split('-');
  let readyCipher = text;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'c') {
      if (arr[i][1] === '1') {
        readyCipher = ceasar(readyCipher, 1);
      };
      if (arr[i][1] === '0') {
        readyCipher = ceasar(readyCipher, -1);
      }
    }
    if (arr[i][0] === 'R') {
      if (arr[i][1] === '1') {
        readyCipher = rot8(readyCipher, 1);
      };
      if (arr[i][1] === '0') {
        readyCipher = rot8(readyCipher, -1);
      }
    }
    if (arr[i][0] === 'A') {
      readyCipher = atbash(readyCipher);
    }
  }
  return readyCipher;
};

// console.log(cipher('This is secret. Message about "_" symbol!', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1'));
// console.log(cipher('a', 'C1-A'));
// cipher('abCz', 'C1-C1-R0-A');

module.exports = cipher;