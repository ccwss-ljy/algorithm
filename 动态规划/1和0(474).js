// let strs = ["10", "0001", "111001", "1", "0"]
// let m = 5
// let n = 3

let strs = ["10", "0", "1"]
let m = 1
let n = 1

var findMaxForm = function (strs, m, n) {
    let dp = Array.from({ length: strs.length + 1 },
        () => Array.from({ length: m + 1 }, () => Array(n + 1).fill(0)));

    for (let i = 0; i < strs.length; i++) {
        let { countZero, countOne } = countNum(strs[i]);
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                if(countZero > j || countOne > k){
                    dp[i + 1][j][k] = dp[i][j][k];
                }
                else{
                    dp[i + 1][j][k] = Math.max(dp[i][j][k], dp[i][j - countZero][k - countOne] + 1);
                }             
            }
        }
    }

    console.log(dp[strs.length][m][n])
};

function countNum(str) {
    let countZero = 0;
    let countOne = 0;
    for (let i in str) {
        if (str[i] == 0) {
            countZero++;
        }
        else {
            countOne++;
        }
    }
    return { countZero, countOne }
}

findMaxForm(strs, m, n)