function maxProfit(prices) {
    let profit = 0;
    for (var x = 0; x < prices.length; x++) {
        for (var i = 0; i < prices.length; i++) {
            if (prices[i + x] > prices[x] && (prices[i + x] - prices[x]) > profit) {
                profit = prices[i + x] - prices[x]
            }
        }
    }
    return profit > 0 ? profit : -1
}