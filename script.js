var uniqueInOrder = function (iterable) {
  return iterable.split("").filter((a, i) => a !== iterable[i - 1]);
};
