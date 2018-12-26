const printSteps = n => {
  let nLengthString = "";
  for (let i = 0; i < n; i++) {
    nLengthString += "a";
  }
  console.log(nLengthString.length);
  for (let i = 0; i < n; i++) {
    let firsPart = nLengthString.slice(0, i + 1);
    console.log(firsPart);
    firsPart = firsPart.replace("a", "#");
    let secondPart = nLengthString.slice(i + 1);
    console.log(firsPart + secondPart);
  }
};

printSteps(2);
