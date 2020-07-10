function glassWindow(matrix = [[]]) {
    let winCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j]= null
                winCount++;
                makeNull(matrix, i, j)
            }
        }
    }
    console.log(matrix)
    return winCount;
}

function updateIndices(list, matrix) {
    for (let [i, j] of list) {
        makeNull(matrix, i, j)
    }
}

function makeNull(matrix = [[]], i, j) {
    let furtherIndex = []
    if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j] === 1) {
            furtherIndex.push([i - 1, j])
            matrix[i - 1][j] = null
        }
    }
    if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j] === 1) {
            furtherIndex.push([i + 1, j])

            matrix[i + 1][j] = null
        }
    }
    if ([j - 1] >=0) {
        if (matrix[i][j - 1] === 1) {
            furtherIndex.push([i, j - 1])

            matrix[i][j - 1] = null
        }
    }
    if ([j + 1] <matrix[0].length) {
        if (matrix[i][j + 1] === 1) {
            furtherIndex.push([i, j + 1])
            matrix[i][j + 1] = null
        }
    }
    updateIndices(furtherIndex, matrix)
}

console.log(glassWindow(
    [
        [1,1,1,1,0],
        [1,1,0,1,0],
        [1,1,0,0,0],
        [0,0,0,0,0],
]
))
console.log(glassWindow(
    [
        [1,1,1],
        [0,1,0],
        [1,1,1],
]
))