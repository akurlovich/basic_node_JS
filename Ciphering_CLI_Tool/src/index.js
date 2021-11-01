const programm = require('commander');
const pkg = require('../package.json')

programm.version(pkg.version).parse(process.argv)

console.log('hi node');
console.log(process.argv);