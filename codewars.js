//Delete occurrences of an element if it occurs more than n times
const deleteNth = (arr, n) => {
  let retArr = [];
  let counterObj = {};
  return arr.filter(val => {
    let propVal = counterObj[val] || 0;
    if (propVal < n) {
      counterObj[val] = propVal + 1;
      return val;
    }
  });
};

// console.log(deleteNth([
//   1, 1, 1, 1
// ], 2));

//I Spy
const spyOn = func => {
  let callCount = 0;
  let argsList = [];
  let returnedVals = [];
  let spyOnFunc = function(...args) {
    callCount++;
    argsList.push(...args);
    let retVal = func(...args);
    returnedVals.push(retVal);
    return retVal;
  };
  spyOnFunc.callCount = function() {
    return callCount;
  };
  spyOnFunc.wasCalledWith = function(val) {
    return argsList.includes(val);
  };
  spyOnFunc.returned = function(val) {
    return returnedVals.includes(val);
  };
  return spyOnFunc;
};

function adder(n1, n2) {
  return n1 + n2;
}
var adderSpy = spyOn(adder);
// console.log(adderSpy(3, 5));
// console.log(adderSpy(2, 4));
// console.log(adderSpy.callCount());

//Tour distance
const tour = (friends, fTowns, distTable) => {
  let totalDistance = 0;
  let prevTownDistance;
  let isFirst = true;
  for (let i = 0; i < friends.length; i++) {
    let town = fTowns.filter(fTown => fTown.includes(friends[i]))[0];
    if (town) {
      let townDistance = distTable[distTable.indexOf(town[1]) + 1];
      if (isFirst) {
        totalDistance += townDistance;
        isFirst = false;
      } else {
        totalDistance += Math.sqrt(
          Math.pow(townDistance, 2) - Math.pow(prevTownDistance, 2)
        );
      }
      prevTownDistance = townDistance;
    }
  }
  totalDistance += prevTownDistance;
  return Math.floor(totalDistance);
};
var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];
//console.log(tour(friends1, fTowns1, distTable1));

//MongoDB ObjectID
const Mongo = {
  isValid: function(s) {
    return false;
  },
  getTimestamp: function(s) {
    //getting first 4 bytes which contains timestamp
    let hexadecimalMap = {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    };
    let dateHexString = s.substr(0, 8);
    let dateHexStringArr = dateHexString.split("");
    let index = 7;
    let decimalEquivalent = 0;
    for (const hexChar of dateHexStringArr) {
      decimalEquivalent +=
        (hexadecimalMap[hexChar] || hexChar) * Math.pow(16, index--);
    }
    return new Date(decimalEquivalent * 1000);
  }
};

console.log(Mongo.getTimestamp('507f1f77bcf86cd799439011'));

