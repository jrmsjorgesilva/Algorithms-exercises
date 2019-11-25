const reverseInt = int => {
  return (
    parseInt(
      int
        .toString()
        .split("")
        .reverse()
        .join(""),
      10
    ) * Math.sign(int)
  );
};

module.exports = {
  reverseInt: reverseInt
};
