function maxProfit(prices) {
    let max_profit = prices[1] - prices[0];
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        let potentialProfit = currentPrice - min;
        max_profit = Math.max(max_profit, potentialProfit);
        min = Math.min(min, currentPrice)
    }
    return max_profit;
}