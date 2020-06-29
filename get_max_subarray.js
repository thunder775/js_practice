function maxContiguousSubarray(array = []) {
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
        let temp = sum + array[i];
        sum = Math.max(temp, array[i])
    }
    return sum;
}

maxContiguousSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);