// Given a seating arrangement of a matrix of m x n seats (m rows, n columns) in a theathre where each element represent a person's id.
// Return an array containing the ids of all the people starting from (0,0) postition in a spiral form clockwise.
//     Input-1:
// [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]
// Output-1: [1,2,3,6,9,8,7,4,5]
//
// Input-2:
// [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
// ]
// Output-2: [1,2,3,4,8,12,11,10,9,5,6,7]
//
// Input-3:
// [
//     [1,2,3,4]
// ]
// Output-3: [1,2,3,4]
//
// Output-2: [1,2,3,4,8,12,11,10,9,5,6,7]
//
// Input-4:
// [
//     [1,2]
//         [3,4]
// ]
// Output-4: [1,2,4,3]
function seatingArrangement(matrix = [[]]) {
    let m = matrix.length;
    let n = matrix[0].length;
    let result = [];
    let invertedCopy = [];
    for (let i = matrix[0].length - 1; i >= 0; i--) {
        let temp = []
        for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i])
        }
        invertedCopy.push(temp);
    }
    let iteration = 0;
    while (matrix.length !== 0) {
        if (matrix.length >= 1) {
            result.push(...matrix.shift().slice(iteration, n - iteration))
            if (matrix.length !== 0) result.pop();
        }
        if (invertedCopy.length >= 2) {
            result.push(...invertedCopy.shift().slice(iteration, m - iteration))
            result.pop()
        }
        if (matrix.length >= 1) {
            result.push(...matrix.pop().slice(iteration, n - iteration).reverse())
            if (matrix.length !== 0) result.pop()
        }
        if (invertedCopy.length >= 2) {
            result.push(...invertedCopy.pop().slice(iteration, m - iteration).reverse())
            result.pop()
        }
        iteration++;
    }
    return result;
}

console.log(seatingArrangement(
    [
        [1],
        [2],
        [3],
        [4]
    ]
));
seatingArrangement(
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ]
);