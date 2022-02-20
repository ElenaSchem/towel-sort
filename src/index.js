
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) return matrix.reduce((arr, item, index) => {return arr.concat(index % 2 === 1 ? item.reverse() : item)}, []);
  else return [];
}
