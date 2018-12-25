const anagrams = (stringA, stringB) => {
  let stringAArray = stringA.toLowerCase().match(/\w/g);
  let stringBArray = stringB.toLowerCase().match(/\w/g);
  if (stringAArray.length !== stringBArray.length) {
    return false;
  }
  let stringAMap = {};
  let stringBMap = {};
  for (let i = 0; i < stringAArray.length; i++) {
    stringAMap[stringAArray[i]] = ++stringAMap[stringAArray[i]] || 1;
    stringBMap[stringBArray[i]] = ++stringBMap[stringBArray[i]] || 1;
  }
  console.log(stringAMap);
  console.log(stringBMap);
  for (let char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) {
      return false;
    }
  }
  return true;
};

const anotherAnagram = (stringA, stringB) => {
  let sortedStringA = stringA
    .toLowerCase()
    .match(/\w/g)
    .sort()
    .join("");
  let sortedStringB = stringB
    .toLowerCase()
    .match(/\w/g)
    .sort()
    .join("");
  return sortedStringA === sortedStringB;
};

console.log(anotherAnagram("RAIL! SAFETY!", "Fairy tales"));
