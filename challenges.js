// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
// Note: Please solve it without division and in O(n).
function getProducts(list) {
    let temp = list.reduce((a, b) => a * b);
    for (let i = 0; i < list.length; i++) {
        list[i] = temp * Math.pow(list[i], -1);
    }
}

function productExceptSelf(list) {
    let temp = list[0];
    let output = [];
    for (let i = 0; i < list.length; i++) {
        output.push(temp);
        if(i!=0){temp *= list[i]};
    }
    temp = 1;
    for (let i = list.length - 1; i >= 0; i--) {
        output[i] *= temp;
        temp *= list[i];
    }
    return output;
}
productExceptSelf([9,0,-2]);