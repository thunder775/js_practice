function getWays(n, c) {
    let memo = new Map();
    return rec(n, c, n.length - 1, memo);
}

function rec(array = [], capacity = 1, index = 1, memo = new Map()) {
    let val = memo.get(`${capacity}:${index}`);
    if (val) {
        return val
    } else {
        if (capacity === 0) {
            return 1;
        }
        if (capacity < 0 || index < 0) {
            return 0;
        }
        if (capacity < array[index]) {
            let x = rec(array, capacity, index - 1);
            memo.set(`${capacity}:${index - 1}`, x);
            return x;
        } else {
            let x = rec(array, capacity - array[index], index) + rec(array, capacity, index - 1)
            memo.set(`${capacity}:${index}`, x);
            return x;
        }
    }
}

console.log(getWays([2, 5, 3, 6], 10))