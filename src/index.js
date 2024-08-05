module.exports = function reverse (n) {
  const nString = n.toString().split('');
  if (nString[0] == '-') {
    nString.shift();
    return Number(nString.reverse().join(''));
  } else {
    return Number(nString.reverse().join(''));
  }
}
