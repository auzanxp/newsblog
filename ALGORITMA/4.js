const diagonals = (matrix) => {
  const size = matrix.length;
  let first = 0;
  let second = 0;

  for (let i = 0; i < size; i++) {
    first += matrix[i][i];
    second += matrix[i][size - i - 1];
  }

  console.log(Math.abs(first - second));
};

diagonals([
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]);