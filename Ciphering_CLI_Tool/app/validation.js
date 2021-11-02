const validation = (string) => {
  const baseArr = ['C0', 'C1', 'R0', 'R1', 'A'];
  const arr = string.split('-');
  for (let i = 0; i < arr.length; i++) {
    if (!baseArr.includes(arr[i])) {
      // console.log('same wrong')
      return false;
    }
  }
  return true;
}


// console.log(validation('C1-C1-R0-A'));

module.exports = validation;