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
// const Mongo = {
//   hexadecimalMap: {
//     a: 10,
//     b: 11,
//     c: 12,
//     d: 13,
//     e: 14,
//     f: 15
//   },
//   isValid: function(s) {
//     //Every hex character takes 2 bytes and Object ID is of 12 bytes
//     if (typeof s !== "string" || s.toString().length !== 24) {
//       return false;
//     }
//     let hexArr = s.split("");
//     let notHexChars = hexArr.filter(
//       char => !this.hexadecimalMap[char] && isNaN(char)
//     );
//     if (notHexChars.length > 0) {
//       return false;
//     }
//     return true;
//   },
//   getTimestamp: function(s) {
//     if(!this.isValid(s)){
//       return false;
//     }
//     //getting first 4 bytes which contains timestamp
//     let dateHexString = s.substr(0, 8);
//     let dateHexStringArr = dateHexString.split("");
//     let index = 7;
//     let decimalEquivalent = 0;
//     for (const hexChar of dateHexStringArr) {
//       decimalEquivalent +=
//         (this.hexadecimalMap[hexChar] || hexChar) * Math.pow(16, index--);
//     }
//     return new Date(decimalEquivalent * 1000);
//   }
// };

//Best Solution
var Mongo = {
  isValid: function(s) {
    return /^[a-f\d]{24}$/.test(s);
  },
  getTimestamp: function(s) {
    return this.isValid(s) && new Date(parseInt(s.substr(0, 8), 16) * 1000);
  }
};

// console.log(Mongo.getTimestamp("507f1f77bcf86cd799439011"));
//console.log(Mongo.isValid(123123123123123123123123));

const dataFile = `##################################
Location: DEU
##################################
 Ammonia: 023 particles
 Nitrogen Oxide: 919 particles
 Carbon Monoxide: 027 particles
##################################
##################################
Location: USA
##################################
 Ammonia: 422 particles
 Nitrogen Oxide: 220 particles
 Carbon Monoxide: 130 particles
##################################
##################################
Location: AUS
##################################
 Ammonia: 122 particles
 Nitrogen Oxide: 102 particles
 Carbon Monoxide: 399 particles
##################################
##################################
Location: BHS
##################################
 Ammonia: 323 particles
 Nitrogen Oxide: 363 particles
 Carbon Monoxide: 399 particles
##################################
##################################
Location: BRB
##################################
 Ammonia: 344 particles
 Nitrogen Oxide: 324 particles
 Carbon Monoxide: 314 particles
##################################
##################################
Location: CHN
##################################
 Ammonia: 422 particles
 Nitrogen Oxide: 477 particles
 Carbon Monoxide: 398 particles
##################################
##################################
Location: COG
##################################
 Ammonia: 044 particles
 Nitrogen Oxide: 144 particles
 Carbon Monoxide: 244 particles
##################################
##################################
Location: CRI
##################################
 Ammonia: 092 particles
 Nitrogen Oxide: 099 particles
 Carbon Monoxide: 399 particles
##################################
##################################
Location: ISL
##################################
 Ammonia: 021 particles
 Nitrogen Oxide: 009 particles
 Carbon Monoxide: 077 particles
##################################
##################################
Location: VEN
##################################
 Ammonia: 102 particles
 Nitrogen Oxide: 103 particles
 Carbon Monoxide: 022 particles
##################################`;
//Captain Planet
const parseData = () => {
  let dataFileArr = dataFile.split("\n");
  let dataFileObj = {};
  let currentLocation = "";
  for (const data of dataFileArr) {
    [label, value] = data.split(":").map(ele => ele.trim());

    if (data.startsWith("Location")) {
      dataFileObj[value] = {};
      currentLocation = value;
    } else if (!data.trim().startsWith("################")) {
      if (value !== undefined) {
        dataFileObj[currentLocation][label] = parseInt(
          value.substring(0, value.indexOf("particles")).trim()
        );
      }
    }
  }

  let highestAmonia, highestNitrogen, highestCarbon;
  highestAmonia = highestNitrogen = highestCarbon = 0;
  let ammoniaCountryArr = [];
  let nitrogenArr = [];
  let carbonArr = [];

  for (const country in dataFileObj) {
    let countryData = dataFileObj[country];
    let ammoniaQty = countryData["Ammonia"];
    let nitrogenOxideQty = countryData["Nitrogen Oxide"];
    let carbonMonoxideQty = countryData["Carbon Monoxide"];
    if (ammoniaQty > highestAmonia) {
      highestAmonia = ammoniaQty;
      ammoniaCountryArr = [country];
    } else if (ammoniaQty == highestAmonia) {
      ammoniaCountryArr.push(country);
    }
    if (nitrogenOxideQty > highestNitrogen) {
      highestNitrogen = nitrogenOxideQty;
      nitrogenArr = [country];
    } else if (nitrogenOxideQty == highestNitrogen) {
      nitrogenArr.push(country);
    }
    if (carbonMonoxideQty > highestCarbon) {
      highestCarbon = carbonMonoxideQty;
      carbonArr = [country];
    } else if (carbonMonoxideQty == highestCarbon) {
      carbonArr.push(country);
    }
  }

  let returnStr = `Ammonia levels in ${ammoniaCountryArr.join(
    ", "
  )} are too high. Nitrogen Oxide levels in ${nitrogenArr.join(
    ", "
  )} are too high. Carbon Monoxide levels in ${carbonArr.join(
    ", "
  )} are too high.`;

  console.log(returnStr);
};

const parseDataAlternative = () => {
  let countries = readData();
  let reports = [
    createReport(countries, "Ammonia"),
    createReport(countries, "Nitrogen Oxide"),
    createReport(countries, "Carbon Monoxide")
  ];
  return reports.join(" ");
};

const readData = () => {
  let countries = [];
  dataFile.split("\n").forEach(line => {
    if (/^Location: /.test(line)) {
      countries.push({ name: line.slice(10) });
    } else {
      let match = line.match(/^\s*([a-z\s]+): (\d+)/i);
      if (match) {
        [fullMatch, substance, quantity] = match;
        countries[countries.length - 1][substance] = Number(quantity);
      }
    }
  });
  return countries;
};

const createReport = (countries, substance) => {
  let max = Math.max(...countries.map(cntry => cntry[substance]));
  let maxCountries = countries
    .filter(cntry => cntry[substance] === max)
    .map(cntry => cntry.name);
  return `${substance} levels in ${maxCountries.join(", ")} are too high.`;
};

//parseData();
// console.log(parseDataAlternative());

//Bribe the Guards of the Crown Jewels
let bribeAmount = 0;
const leastBribes = (bribes, roomNumber) => {
  let middleIndex = Math.ceil(bribes.length / 2);
  bribeAmount += bribes[middleIndex];
  if (middleIndex === roomNumber) {
    return bribeAmount;
  } else if (roomNumber < middleIndex) {
    bribeAmount += leastBribes(bribes.slice(0, middleIndex - 1));
  } else {
    bribeAmount += leastBribes(bribes.slice(middleIndex));
  }
  return bribeAmount
};
