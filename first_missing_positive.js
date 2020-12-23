function firstMissingPositive(arr = []) {
    let keeperArray = Array(300).fill(-1);
    for (let val of arr) {
        if (val <= 299 && val > 0) {
            keeperArray[val-1] = 1;
        }
    }
    for (let i = 0; i < keeperArray.length; i++) {
        if (keeperArray[i] === -1) {
            return i + 1;
        }
    }
    return 300
}

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3,4,-1,1]))
console.log(firstMissingPositive([7,8,9,11,12]))