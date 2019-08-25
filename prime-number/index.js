const isPrimeNumber = n => {
  let isPrime = true;
  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

console.log(isPrimeNumber(11));
