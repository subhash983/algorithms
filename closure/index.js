function outerFunc(num) {
  return function innerFunc(abc) {
    return abc + num;
  };
}

var func = outerFunc(5);
console.log(func(10));
 