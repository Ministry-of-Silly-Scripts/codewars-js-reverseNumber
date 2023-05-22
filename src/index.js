const reverseNumber = () => true;

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
