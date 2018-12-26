const printSteps = n => {
  let nLengthString = "";
  for (let i = 0; i < n; i++) {
    nLengthString += " ";
  }
  for (let i = 0; i < n; i++) {
    let firsPart = nLengthString.slice(0, i + 1).replace(/\s/g, "#");
    let secondPart = nLengthString.slice(i + 1);
    console.log(firsPart + secondPart);
  }
};

const printStepsRecursion = (n, row = 0, stair = "") => {
  if (row === n) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    printStepsRecursion(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
};
printSteps(4);
