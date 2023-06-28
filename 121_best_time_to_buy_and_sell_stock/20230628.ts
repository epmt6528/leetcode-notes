/**
 * @param {number[]} prices
 * @return {number}
 */
// Greedy Approach O(n)
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    const currentProfit = prices[i] - minPrice;
    if (currentProfit > maxProfit) maxProfit = currentProfit;
  }

  return maxProfit;
};

var maxProfit = function (prices) {
  let maxProfit = 0;
  let left = 0; // Buy
  let right = 1; // Sell

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const currentProfit = prices[right] - prices[left]; // Our current profit
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};
