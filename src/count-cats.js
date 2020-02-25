module.exports = function countCats(matrix) {
  return matrix.reduce((sum, elem) => sum + elem.filter(val => val === '^^').length, 0);
};
