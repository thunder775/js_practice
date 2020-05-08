// JavaScript offers some bit operations but not bit rotation. To complete that, create a function that takes three parameters:

// 1. n: Integer, which in binary representaion should be rotated.
// 2. m: Number of rotation steps that should be performed.
// 3. d: Boolean value; true = rotation right, false = rotation left.
// Your function should return an integer as a result of its rotated binary representation.

// bitRotate(8, 1, true) ➞ 4
// 8 in bin: 1000, rotated 1 step to the right: 0100, in dec: 4

// bitRotate(16, 1, false) ➞ 1
// 16 in bin: 10000, rotated 1 step to the left: 00001, in dec: 1
function bitRotate(n, m, d) {
    let bitList = parseInt(n).toString(2).split('');
    for (let i = 0; i < m; i++) {
        if (d) {
            let last = bitList.pop();
            bitList.unshift(last)
        } else {
            let first = bitList.shift();
            bitList.push(first)
        }
    }

    return parseInt(bitList.join(''), 2)
}

console.log(bitRotate(8, 1, true));
console.log(bitRotate(8, 3, true));
console.log(bitRotate(16, 1, false));