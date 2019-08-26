const getPrimeFactors = n => {
  let primeFactArr = [];
  while (n % 2 === 0) {
    primeFactArr.push(2);
    n /= 2;
  }
  for (let index = 3; index <= Math.sqrt(n); index += 2) {
    while (n % index === 0) {
      primeFactArr.push(index);
      n /= index;
    }
  }
  if (n > 2) {
    primeFactArr.push(n);
  }
  return primeFactArr;
};

console.log(getPrimeFactors(9898989898998998));
