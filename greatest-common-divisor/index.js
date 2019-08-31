const gcd = (n1, n2) => {
  if (n1 === 0) {
    return n2;
  }
  if (n2 === 0) {
    return n1;
  }
  if (n1 === n2) return n1;
  let lowestNumber = n1 < n2 ? n1 : n2;
  let greatestNumber = n1 > n2 ? n1 : n2;
  let commonFactors = [1];
  for (let index = 2; index <= lowestNumber / 2; index++) {
    if (n1 % index === 0 && n2 % index === 0) {
      commonFactors.unshift(index);
    }
  }

  if (greatestNumber % lowestNumber === 0) {
    commonFactors.unshift(lowestNumber);
  }
  return commonFactors[0];
};

console.log(gcd(12, 6));

const gcdRecursive = (n1,n2) =>{
    if(n2===0){
        return n1;
    }
    return gcdRecursive(n2,n1%n2);
}