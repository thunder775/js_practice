function recursiveKnapsack(wt, val, len, cap) {
    if (len === 0 || cap === 0) {
        return 0;
    }
    if (wt[len - 1] <= cap)
        return Math.max(val[len - 1] + recursiveKnapsack(wt, val, len - 1, cap - wt[len - 1]), recursiveKnapsack(wt, val, len - 1, cap))
    else
        return recursiveKnapsack(wt, val, len - 1, cap)
}

// console.log(recursiveKnapsack([10, 2, 3, 5, 8, 2], [100, 10, 10, 100, 80, 100], 6, 15))

// console.log(recursiveKnapsack([1,2,3], [10,15,40], 3, 6))

function topDownKnapsack(wt, val, len, cap) {
    let dp = Array(len + 1).fill(Array(cap + 1));
    for (let i = 0; i < len + 1; i++) {
        dp[i][0] = 0;
    }
    dp[0] = Array(cap + 1).fill(0)
    for (let i = 1; i < len + 1; i++) {
        for (let j = 1; j < cap + 1; j++) {
            if (wt[i - 1] <= j) {
                dp[i][j] = Math.max(val[i - 1] + dp[i - 1][j - wt[i - 1]], dp[i - 1][j])
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[len][cap]
}

function knapSack(W, wt, val, n) {
    let K = Array(n + 1).fill(Array(W + 1));
    // Build table K[][] in bottom up manner
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (i === 0 || w === 0)
                K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w] = Math.max(
                    val[i - 1] + K[i - 1][w - wt[i - 1]],
                    K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }
    return K[n][W];
}

console.log(knapSack(15, [10, 2, 3, 5, 8, 2], [100, 10, 10, 100, 80, 100], 6))
// console.log(topDownKnapsack([10, 2, 3, 5, 8, 2], [100, 10, 10, 100, 80, 100], 6, 15))
// console.log(topDownKnapsack([10, 2, 3, 5, 8, 2], [100, 10, 10, 1000, 80, 100], 6, 15))



