const reverseNumber = (n, b) => {
  numberBaseChanged = changeNumberBase(n, b);

  outString = ""
  for (let i = numberBaseChanged.length - 1; i >= 0; i--) {
    outString += numberBaseChanged[i];
  }

  return outString;
};

const changeNumberBase = (n, b) => {
  if (b === 1) {
    return b.toString().repeat(n);
  }

  return n.toString(b).toUpperCase();
}

module.exports = {
  reverseNumber,
  changeNumberBase,
};
