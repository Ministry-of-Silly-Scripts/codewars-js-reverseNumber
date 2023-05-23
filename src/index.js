const reverseNumber = (n, b) => {
  numberBaseChanged = changeNumberBase(n, b);

  outString = ""
  for (let i = numberBaseChanged.length - 1; i >= 0; i--) {
    outString += numberBaseChanged[i];
  }

  if (b == 1) {
    return n;
  }

  return parseInt(outString, b);
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
