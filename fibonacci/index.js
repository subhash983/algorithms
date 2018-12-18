//using recursion

// const fibonacci = (function() {
//   let fibArray = [0, 1];
//   return function(n) {
//     if (fibArray[n] !== undefined) {
//       return fibArray[n];
//     }
//     fibArray[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     return fibArray[n];
//   };
// })();

//using for loop

const fibonacci = n => {
  let result = [0, 1];
  for (let i = 1; i < n; i++) {
    result.push(result[i] + result[i - 1]);
  }
  return result[n];
};

console.log(fibonacci(6));
