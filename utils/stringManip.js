const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const palindrome = str => {
  const Ispal = str;
  return Ispal === reverse(str);
};

module.exports = {
  reverse: reverse,
  palindrome: palindrome
};
