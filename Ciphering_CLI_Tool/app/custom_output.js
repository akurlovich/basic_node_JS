const stream = require('stream');
const fs = require('fs');

function customOutputStream(filename) {
  const customInput = stream.Writable();
  customInput._write = function(chunk, enc, next) {
    fs.createWriteStream(filename, {flags: 'a'});
    // console.log(chunk.toString());
    next();
  }
  return customInput;
};

module.exports = customOutputStream;