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
}

// console.log(deleteNth([
//   1, 1, 1, 1
// ], 2));


//I Spy
const spyOn = func =>
{
  let callCount = 0;
  let argsList = [];
  let returnedVals = [];
  let spyOnFunc = function(...args){
    callCount++;
    argsList.push(...args);
    let retVal =  func(...args);
    returnedVals.push(retVal);
    return retVal;
  }
  spyOnFunc.callCount = function(){
    return callCount;
  }
  spyOnFunc.wasCalledWith = function(val){
    return argsList.includes(val);
  }
  spyOnFunc.returned = function(val){
    return returnedVals.includes(val);
  }
  return spyOnFunc;
}

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn(adder);
console.log(adderSpy(3, 5));
console.log(adderSpy(2, 4));
console.log(adderSpy.callCount());
