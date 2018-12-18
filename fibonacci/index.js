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
  let a = 0;
  let b = 1;
  if (n === 0) {
    return a;
  }
  for (let i = 1; i < n; i++) {
    b = a + b;
    a = b - a;
  }
  return b;
};

console.log(fibonacci(3));
