const functionCallCounter = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  };
})();


console.log(functionCallCounter());
console.log(functionCallCounter());
console.log(functionCallCounter());
