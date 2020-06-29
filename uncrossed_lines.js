function uncrossedLines(upperPane = [], lowerPane = []) {
    let connectionHistoryMap = new Map();
    for (let u = 0; u < upperPane.length; u++) {
        let upperValue = upperPane[u];
        for (let l = 0; l < lowerPane.length; l++) {
            let lowerValue = lowerPane[l];
            if (upperValue === lowerValue) {
                if (connectionHistoryMap.get(upperValue + `:${u}`) === undefined) {
                    connectionHistoryMap.set(upperValue + `:${u}`, [l]);
                } else {
                    if (Math.abs(u - l) < Math.abs(u - connectionHistoryMap.get(upperValue + `:${u}`))) {
                        connectionHistoryMap.set(upperValue + `:${u}`, [l])
                    }
                    if (Math.abs(u - l) === Math.abs(u - connectionHistoryMap.get(upperValue + `:${u}`))) {
                        connectionHistoryMap.get(upperValue + `:${u}`).push(l)

                    }
                }
            }
        }
    }
    console.log(connectionHistoryMap);
    let connectionArray = Array.from(connectionHistoryMap);
    // console.log(connectionArray);
    for (let i = 1; i < connectionArray.length; i++) {
        let [nodeName1, dist1] = connectionArray[i - 1];
        let [nodeName2, dist2] = connectionArray[i];
        if (dist1[0] >= dist2[0]) {
            connectionArray.splice(i - 1, 1)
        }
    }
    console.log(connectionArray.length)
    return connectionArray.length
}


// uncrossedLines(
//     [3, 3, 3, 1],
//     [2, 2, 3, 3]);
// uncrossedLines([2, 5, 1, 2, 2], [10, 5, 2, 1, 5, 2]);
// uncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]);


// function uncrossed(panel1 = [], panel2 = []) {
//     for(let pa)
// }

function uncrossedLines2(upperPanel = [], lowerPanel = [], ptr1 = 0, ptr2 = 0) {
    let array = [];
    for (let p1 = ptr1; p1 < upperPanel.length; p1++) {
        for (let p2 = ptr2; p2 < lowerPanel.length; p2++) {
            let sumIfJoined = 0;
            let sumIfNotJoined = 0;
            if (upperPanel[p1] === lowerPanel[p2]) {
                sumIfJoined++;
                sumIfJoined += uncrossedLines2(upperPanel, lowerPanel, p1 + 1, p2 + 1);
                sumIfNotJoined += uncrossedLines2(upperPanel, lowerPanel, p1, p2 + 1);
                array.push(Math.max(sumIfJoined, sumIfNotJoined));
                break;
            }
        }
    }
    if (array.length !== 0) return array.reduce((a, b) => Math.max(a, b));
    else return 0;
}

console.log(uncrossedLines2(
    [3, 3, 3, 1],
    [2, 2, 3, 3]));
console.log(uncrossedLines2(
    [1],
    [0]));
console.log(uncrossedLines2(
    [1],
    [1]));
console.log(uncrossedLines2([1, 4, 2], [1, 2, 4]) === 2);
console.log(uncrossedLines2([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]) === 3);
console.log(uncrossedLines2([1, 2, 3, 4, 5, 6], [2, 3, 1, 4, 5, 6]) === 5);
console.log(uncrossedLines2([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]) === 2);
console.log(uncrossedLines2([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]) === 3);
console.log(uncrossedLines2([1, 1, 2, 1, 2], [1, 3, 2, 3, 1]) === 3);
