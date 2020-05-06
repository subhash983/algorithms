const maxProfit = (prices) => {
  let mProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > mProfit) {
      mProfit = prices[i] - minPrice;
    }
  }
  return mProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
