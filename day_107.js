// Queen Threat
// Create a function that takes a character from a to h as the column number and an
// integer from 1 to 8 as the row number which together represent the location of a
// queen on a normal-sized chess board. Return this two dimensional 8x8 array.

// This array must consist of zeroes and ones. The ones are placed in positions where
// the queen can move in one move and zeroes represent positions on the board where it cannot.

// checkBoard("a", 1) ➞ [
//   [1, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0, 0],
//   [1, 0, 0, 1, 0, 0, 0, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0],
//   [1, 1, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1]
// ]

// checkBoard("h", 4) ➞ [
//   [0, 0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1]
// ]
let charMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
};

function matrix(m, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(new Array(m).fill(0))
    }
    return result
}

function checkBoard(col, row) {
    let board = matrix(8, 8);
    // handle row
    // let newRow = [];
    // for (let i = 0; i < 8; i++) {
    //     if (i !== charMap[col]) {
    //         newRow.push(1);
    //     } else {
    //         newRow.push(0);
    //     }
    // }
    // board[8 - row] = newRow;
// handle upper board
    col = charMap[col] - 1;
    row--;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let xOffset = Math.abs((col - j));
            let yOffset = Math.abs((row - i));

            if (xOffset === yOffset || xOffset === 0 || yOffset === 0) {
                board[i][j] = 1
            }

        }
    }
    // board[row - 1] = Array(8).fill(1);
    board[row][col] = 0;
    board.forEach((row) => console.log(row));
}


checkBoard('c', 4);