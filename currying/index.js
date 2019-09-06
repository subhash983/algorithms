const getProduct = (num1, num2) => {
  return num1 * num2;
};

const currGetProduct = num1 => {
  return function(num2) {
    return num1 * num2;
  };
};

console.log(currGetProduct(10)(20));

