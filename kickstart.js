function findX(arr = []) {
    let commutativeSum = [];
    let sum = 0;
    for (let val of arr) {
        sum += val;
        commutativeSum.push(sum);
    }
    let min = commutativeSum.reduce((a, b) => Math.min(a, b));
    return min < 1 ? Math.abs(min) + 1 : (-min) + 1;
}

console.log(findX([2, 3, 1, 0]))
console.log(findX([0, 0, 1, -5]))
console.log(findX([10, 3, 1, -5]))