let amount = 5
let coins = [1, 2, 5];

var change = function(amount, coins) {
    let count = 0;
    let dp = new Array(coins.length + 1).fill(0).map(()=> new Array(amount + 1).fill(0))
    for(let i in dp){
        dp[i][0] = 1
    }

    for(let i = 0;i < coins.length;i++){
        for(let j = 0;j <= amount;j++){
            if(coins[i] > j){
                dp[i + 1][j] = dp[i][j]
            }
            else{
                dp[i + 1][j] = dp[i][j] + dp[i + 1][j - coins[i]];
            }
        }
    }

    console.log(dp)
    console.log(count)
};

change(amount, coins)