const getFibonacciNumber = n => {
  let result = [0, 1];
  for (let index = 1; index < n; index++) {
    result.push(result[index] + result[index - 1]);
  }
  return result[n];
};

const getFibonacciNumberRecursion = (() => {
  let fibArray = [0, 1];
  return function(n) {
    if (fibArray[n] !== undefined) {
      return fibArray[n];
    }
    fibArray[n] =
      getFibonacciNumberRecursion(n - 1) + getFibonacciNumberRecursion(n - 2);
    return fibArray[n];
  };
})();

console.log(getFibonacciNumberRecursion(9));
