const reverseInt = int => {
  return parseInt(
    int
      .toString()
      .split("")
      .reverse()
      .join(""),
    10
  );
};

module.exports = {
  reverseInt: reverseInt
};
