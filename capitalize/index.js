const capitalize = str => {
  let strArray = str.split(" ");
  let retArray = [];
  for (let word of strArray) {
    retArray.push(word[0].toUpperCase() + word.slice(1));
  }
  return retArray.join(" ");
};

const anotherCapitalize = str => {
  let retStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0 || str[i - 1] === " ") {
      retStr += str[i].toUpperCase();
    } else {
      retStr += str[i];
    }
  }
  return retStr;
};

console.log(anotherCapitalize("look, it is working!"));
