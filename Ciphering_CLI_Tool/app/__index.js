// const programm = require('commander');
// const pkg = require('../package.json');

// programm.version(pkg.version).parse(process.argv);

// console.log('hi node');
// console.log(process.argv.slice(2));

// const { stdout } = process;
// stdout.write('Node.js');

// const { stdin, stdout } = process;
// stdin.on('data', data => stdout.write(data));

// const { stdin, stdout } = process;

// let name1 = '';

// stdout.write('Как тебя зовут?\n');
// stdin.on('data', data => {
//   name1 = data.toString();
//   stdout.write('Привет, ');
//   stdout.write(name1);
//   process.exit(0);
// });
// process.on('exit', code => {
//   console.log('111', name1)
//   if (code === 0) {
//     stdout.write(`Удачи, ${name1}`)
//   } else {
//     stdout.write(`gvgvg ${name1}, some wrong`)
//   }
// });

// function getValue(flag) {
//   const flagIndex = process.argv.indexOf(flag);
//   return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
// }
// const message = getValue('-m');
// console.log(message);

const { stdout, stdin, exit } = process;
const flag = process.argv[3];
const allowedFlags = ['-c', '-i', '-o'];
console.log('flags', flag.split('-')[0][0])
if (!allowedFlags.includes(flag)) {
    stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
    exit();
}
stdout.write('Введите, пожалуйста, два числа\n');
stdin.on('data', data => {
    const numString = data.toString();
    const numStringsArray = numString.split(' ');
    const hasIncorrectLength = numStringsArray.length !== 2;
    console.log('first', numStringsArray[1])
    const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
    if (hasIncorrectLength || hasIncorrectValues) {
        stdout.write('Нужно ввести 2 числа, разделенных пробелом');
        exit();
    }
    const [firstNum, secondNum] = numStringsArray.map(numStr => +numStr);
    if (flag === '-s') {
        const sum = firstNum + secondNum;
        stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
    } else {
        const mult = firstNum * secondNum;
        stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
    }
    exit();
});
