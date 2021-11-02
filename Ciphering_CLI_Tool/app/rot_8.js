const alphabet = "abcdefghijklmnopqrstuvwxyz",
      alphabetUpper = alphabet.toUpperCase(),
      shift = 8;

exports.rot8 = (text) => {
  const map = Array.prototype.map;
  return map.call(text, char => {
    const length = alphabet.length,
          lengthUpper = alphabetUpper.length;
    if (alphabet.includes(char)) {
      let position = (alphabet.indexOf(char) + shift) % length;
      position = position < 0 ? length + position : position
      return alphabet[position];
    }
    if (alphabetUpper.includes(char)) {
      let position = (alphabetUpper.indexOf(char) + shift) % lengthUpper;
      position = position < 0 ? lengthUpper + position : position
      return alphabetUpper[position];
    }
    return char;
  }).join('');
}