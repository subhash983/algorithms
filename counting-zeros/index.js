const countZeros = num => {
  let count = 0;
  for (let index = 1; index <= num; index++) {
    count += getZeros(index);
  }
  return count;
};

const getZeros = num => {
  let count = 0;
  while (num != 0) {
    if (num % 10 === 0) {
      count++;
    }

    num = Math.floor(num / 10);
  }
  return count;
};

console.log(countZeros(103));
