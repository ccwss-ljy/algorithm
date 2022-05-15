// 使得背包内物品价值最大

let n = 5 //n件物品
let v = 8 //容量大小为V
let w = [0, 3, 5, 1, 2, 2]; //每个物品的所占容量
let c = [0, 4, 5, 2, 1, 3]; //每个物品的价值

function maxValue(n, v, w, c) {
    // 初始化数组，顺便初始化边界，因为当背包容量为0和放置0个物品，背包的价值都为0
    // let dp = Array(n + 1).fill().map(() => Array(v + 1).fill(0));
    let dp = Array.from({ length: n + 1 },
        () => Array(v + 1).fill(0));
    console.log(dp[0][0])
    for (let i = 1; i <= n; i++) {
        for (let j = w[i]; j <= v; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i]] + c[i]); //不放第i个物品和放第i个物品比较最大值
        }
    }
    let max = -Infinity;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= v; j++) {
            max = Math.max(max, dp[i][j])
        }
    }
    console.log(max)
}

maxValue(n, v, w, c)