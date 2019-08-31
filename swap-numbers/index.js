const swapNumbers = (a, b) => {
  console.log("previous a :" + a);
  console.log("previous b :" + b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("a :" + a);
  console.log("b :" + b);
};

swapNumbers(17, 22);
