// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) return {};
    if (currency >= 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };

    var coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    }

    var coinsToBeGiven = {};

    for (coin in coins) {
        if (currency / coins[coin] >= 1) {
            coinsToBeGiven[coin.toString()] = Math.floor(currency / coins[coin]).toString();
            currency -= coins[coin] * coinsToBeGiven[coin.toString()];
        }
    }

    return coinsToBeGiven;
}
