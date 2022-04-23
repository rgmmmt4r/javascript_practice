var maxProfit = function(prices) {
    let lowest = prices[0]
    let profit = 0
    for(let i  = 0; i< prices.length;i++){
        if(prices[i] < lowest){
            lowest = prices[i]
        }
        if(prices[i] - lowest > profit)
            profit = prices[i] - lowest
    }
    return profit
};