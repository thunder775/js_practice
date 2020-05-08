function minDifferencePair(list) {
    list.sort((a, b) => a - b);
    let differences = [];
    for (let i = 0; i < list.length - 1; i++) {
        differences.push(Math.abs(list[i] - list[i + 1]))
    }
    let minDifference = differences.reduce((a, b) => {
        return a <= b ? a : b;
    });
    let pairs = [];
    for (let i = 0; i < differences.length; i++) {
        if (differences[i] === minDifference) {
            pairs.push([list[i], list[i + 1]]);
        }
    }
    // console.log(pairs);
    if (pairs.length !== 1) {
        let temp = [];
        pairs.forEach((pair) => {
            temp.push(pair[0] + pair[1])
        })
        // console.log(temp)
        let minSum = temp.reduce((a, b) => (a <= b ? a : b));
        let index = temp.indexOf(minSum);
        return pairs[index];
    } else {
        return pairs[0];
    }
}

console.log(minDifferencePair([40, 16, 8, 17, 15]));