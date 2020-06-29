function oddSquarePatch(matrix = [[]]) {
    let maxSquareDimension = Math.min(matrix.length, matrix[0].length);
    for (let i = maxSquareDimension; i > 0; i--) {
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix[j].length; k++) {
                if (getMatrix(matrix, i, j, k)) return i;
            }
        }
    }
    return 0;
}

function getMatrix(matrix = [[]], size, row, col) {
    if (row + size > matrix.length) {
        return false;
    }
    if (col + size > matrix[0].length) {
        return false;
    }
    let matrixToCheck = matrix.slice(row, row + size);
    matrixToCheck = matrixToCheck.map((row) => row.slice(col, col + size));
    return isAOddMatrix(matrixToCheck);
}

function isAOddMatrix(matrix = [[]]) {
    for (let row of matrix) {
        if (row.some((value) => value % 2 === 0)) {
            return false;
        }
    }
    return true;
}

console.log(oddSquarePatch([
    [1, 1, 1, 9],
    [1, 5, 5, 7],
    [3, 3, 1, 7],
    [1, 1, 1, 1]
]));
// console.log(getMatrix([
//     [1, 2, 4, 9],
//     [4, 5, 5, 7],
//     [3, 6, 1, 7],
// ], 3, 0, 1,));
// console.log(isAOddMatrix([
//     [1, 2, 4, 9],
//     [4, 5, 5, 7],
//     [3, 6, 1, 7]
// ]));



