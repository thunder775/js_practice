function divide(list = [], n = 1) {
    if (list.length === 0) {
        return [[]]
    }
    let sum = list[0];
    let result = [];
    let currentSubArray = [list[0]];
    for (let i = 1; i < list.length; i++) {
        sum += list[i];
        if (sum > n) {
            result.push(currentSubArray);
            currentSubArray = [];
            sum = 0;
            i--;
        } else {
            currentSubArray.push(list[i])
        }
    }
   result.push(currentSubArray);
    return result;
}


console.log(divide([1, 2, 3, 4, 1, 0], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]

divide([1, 0, 1, 1, -1, 0, 0], 1); //  [[1, 0], [1], [1, -1, 0, 0]]

divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3); // [[2, 1, 0, -1, 0, 0], [2, 1], [3]]
console.log(divide([], 3)); // [[2, 1, 0, -1, 0, 0], [2, 1], [3]]