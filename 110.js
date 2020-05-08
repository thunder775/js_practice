// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent
// houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

/// recursive method
// function getMaxMoney(housesList) {
//     if(housesList.length===3){
//         return Math.max(housesList[0]+housesList[2],housesList[1])
//     }
//     if(housesList.length===2){
//         return Math.max(housesList[0],housesList[1])
//     }
//     if(housesList.length===1){
//         return housesList[0]
//     }
//     let sum1 = housesList[0];
//     let sum2 = housesList[1];
//     sum1 += getMaxMoney(housesList.slice(2, housesList.length));
//     sum2 += getMaxMoney(housesList.slice(3, housesList.length));
//     return Math.max(sum1,sum2)
// }
//
// console.log(getMaxMoney([0,1,1,99,100,99]));
// console.log(getMaxMoney([2,7,9,3,1]));
// console.log(getMaxMoney([1,2,3,1]));
// console.log(getMaxMoney([1, 3, 1, 4, 45]));
// console.log(getMaxMoney([1, 3, 1, 4, 5,4]));

///non recursive method
function rob(houseList) {
    let toAdd = houseList.length % 3;
    for (let i = 3 - toAdd; i > 0; i--) {
        houseList.unshift(0)
    }
    console.log(houseList);
    let a0 = houseList[houseList.length - 3] + houseList[houseList.length - 1];
    let b0 = houseList[houseList.length - 2];
    let c0 = houseList[houseList.length - 1];
    houseList.splice(houseList.length - 3, 3);
    let a1;
    let b1;
    let c1;

    while (houseList.length !== 0) {
        c1 = houseList[houseList.length - 1] + Math.max(b0, c0);
        b1 = houseList[houseList.length - 2] + Math.max(a0, b0);
        a1 = Math.max(houseList[houseList.length - 3] + c0, houseList[houseList.length - 3] + Math.max(a0, b0))

    }
}

rob([1]);


















