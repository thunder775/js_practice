// Greater Than the Sum
// For each number in an array, check if that number is greater
// than the sum of all numbers that appear before it in the array.
// If all numbers in the array pass this test, return true. Return false otherwise.

// greaterThanSum([2, 3, 7, 13, 28]) ➞ true
function greaterThanSum(list) {
    let sum = 0;
    for (let i = 1; i < list.length; i++) {
        sum += list[i - 1];
        if (sum > list[i]) {
            return false;
        }
    }
    return true;
}

console.log(greaterThanSum([2, 3, 7, 13, 28]));
console.log(greaterThanSum([2, 3, 4, 13, 28]));