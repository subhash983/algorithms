const generateSpiral = n => {
  let resultSet = [];
  for (let i = 0; i < n; i++) {
    resultSet.push([]);
  }
  let start_row = 0;
  let start_column = 0;
  let end_row = n - 1;
  let end_column = n - 1;

  let counter = 1;

  while (start_row <= end_row && start_column <= end_column) {
    //Top row
    for (let i = start_column; i <= end_column; i++) {
      resultSet[start_row][i] = counter;
      counter++;
    }
    start_row++;
    //Right column
    for (let i = start_row; i <= end_row; i++) {
      resultSet[i][end_column] = counter;
      counter++;
    }
    end_column--;
    //Bottom row
    for (let i = end_column; i >= start_column; i--) {
      resultSet[end_row][i] = counter;
      counter++;
    }
    end_row--;
    //left column
    for (let i = end_row; i >= start_row; i--) {
      resultSet[i][start_column] = counter;
      counter++;
    }
    start_column++;
  }
  return resultSet;
};

console.log(generateSpiral(5));
