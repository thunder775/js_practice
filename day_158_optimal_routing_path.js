function optimalNetwork(matrix = [[]]) {
    let workingArray = [[0, 0, 0]];
    // console.log(workingArray.splice(0, 1).flat())
    for (let i = 0; i < workingArray.length; i++) {
        let [x, y, path] = workingArray.splice(i, 1).flat(1);
        let right = matrix[x] !== undefined ? matrix[x][y + 1] : undefined;
        let below = matrix[x + 1] !== undefined ? matrix[x + 1][y] : undefined;
        if (right !== undefined || below !== undefined) {
            if (right !== undefined) {
                workingArray.push([x, y + 1, Math.max(Math.abs(matrix[x][y] - right), path)])
            }
            if (below !== undefined) {
                workingArray.push([x + 1, y, Math.max(Math.abs(matrix[x][y] - below), path)])
            }
            i--;
        }
    }
    console.log(workingArray);
    return workingArray.reduce((a, b) => {
        if (a[2] < b[2]) return a;
        return b;
    })[2];
}

console.log(optimalNetwork([[5, 1, 3, 2], [7, 4, 1, 8], [6, 7, 5, 9]]));