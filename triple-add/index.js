const tripleAdd = n => {
  return function(n1) {
    return function(n2) {
      return n2 + n + n1;
    };
  };
};

console.log(tripleAdd(10)(20)('x'));
