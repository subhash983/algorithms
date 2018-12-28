const printPyramid = n => {
  let midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};

const printPyramidRecursion = (n, row = 0, level = "") => {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    printPyramidRecursion(n, row + 1);
  } else {
    let midpoint = Math.floor((2 * n - 1) / 2);
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      level += "#";
    } else {
      level += " ";
    }
    printPyramidRecursion(n, row, level);
  }
};

printPyramidRecursion(3);
