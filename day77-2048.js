// 2048 Tiles Slide
// 2048 is a game where you need to slide numbered tiles (natural powers of 2) up, down,
// left or right on a square grid to combine them in a tile with the number 2048.

// The sliding procedure is described by the following rules:

// - Tiles slide as far as possible in the chosen direction until they are stopped by either
//  another tile or the edge of the grid.
// - If two tiles of the same number collide while moving, they will merge into a tile with the total 
// value of the two tiles that collided.
// - If more than one variant of merging is possible, move direction shows one that will take effect.
// 			- Tile cannot merge with another tile more than one time.

// Sliding is done almost the same for each direction and for each row/column of the grid,
// so your task is to implement only the left slide for a single row.

// leftSlide([2, 2, 2, 0]) ➞ [4, 2, 0, 0]
// leftSlide([2, 2, 4, 4, 8, 8]) ➞ [4, 8, 16, 0, 0, 0]

function leftSlide(row) {
    let output = [];
    output = row.filter((item) => item !== 0);
    for (let i = 0; i < output.length - 1; i++) {
        if (output[i] === output[i + 1]) {
            output[i] += output[i + 1];
            output.splice(i + 1, 1)
        }
    }
    let outputLength = output.length;
    for (let i = 0; i < row.length - outputLength; i++) {
        output.push(0)
    }
    // console.log(output);
    return output
};

function rightSlide(row) {
    return leftSlide(row.reverse()).reverse()
};

function leftSlideBoard(board) {
    let output = [];
    board.forEach((row) => {
        output.push(leftSlide(row));
    });
    // console.log(output);
    // output.forEach((row) => console.log(row));
    return output;
}

function rightSlideBoard(board) {
    let output = [];
    board.forEach((row) => {
        output.push(rightSlide(row));
    });
    // output.forEach((row) => console.log(row));
    return output;
}

let board = [
    [2, 2, 2, 0],
    [2, 4, 0, 4],
    [0, 2, 2, 0],
    [8, 4, 4, 8],
];
// leftSlideBoard(board);
// console.log('-------')
// rightSlideBoard(board);
// console.log('-------')
console.log(leftSlide([2, 2, 2, 0]));
console.log(leftSlide([4, 0, 0, 4]));
console.log(leftSlide([2, 2, 4, 4, 8, 8]));
console.log(rightSlide([2, 2, 2, 0]));
console.log(rightSlide([4, 0, 0, 4]));
console.log(rightSlide([2, 2, 4, 4, 8, 8]));
console.log(rightSlide([8, 4, 4, 8]));
console.log(leftSlide([8, 4, 4, 8]));

function transpose(matrix) {
    let output = [];
    matrix.forEach((x) => output.push([]));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            output[j][i] = matrix[i][j];
        }
    }
    return output;
}

// transpose(board);
function upSlideBoard(board) {
    board = transpose(board);
    board = leftSlideBoard(board);
    board = transpose(board);
    // board.forEach((row) => console.log(row));
    return board;
};

function downSlideBoard(board) {
    board = transpose(board);
    board = rightSlideBoard(board);
    board = transpose(board);
    // board.forEach((row) => console.log(row));
    return board;
}

// console.log(upSlideBoard(board));
// console.log(downSlideBoard(board));

function getRandomTwo(board) {
    let potentialPlaces = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                potentialPlaces.push([i, j])
            }
        }
    }
    if (potentialPlaces.length === 0) {
        return;
    }
    let randomIndex = Math.floor(Math.random() * potentialPlaces.length);
    board[potentialPlaces[randomIndex][0]][potentialPlaces[randomIndex][1]] = 2;
    // return board;
}

function isGameOver(matrix) {
    let result = true
    matrix.forEach((row) => {
        row.forEach((ele) => {
            if (ele === 0) {
                result = false;
            }
        })
    })
    return result;
}

function isGameWon(matrix) {
    let result = false

    matrix.forEach((row) => {
        row.forEach((ele) => {
            if (ele === 2048) {
                result = true;
            }
        })
    })
    return result
}

function gamePlay(board) {
    getRandomTwo(board)
    while (!isGameOver(board)) {
        if (isGameWon(board)) {
            console.log("You Won!")
            return;
        }
        let move = prompt("Enter your move!")
        if (move === 'l') {
            board = leftSlideBoard(board)
        } else if (move === 'r') {
            board = rightSlideBoard(board)
        } else if (move === 'u') {
            board = upSlideBoard(board)
        } else {
            board = downSlideBoard(board)
        }
        board.forEach((row) => console.log(row));
        getRandomTwo(board)
    }
    console.log("Game Over")
}

// console.log(getRandomTwo(board));
// gamePlay([[0,0],[0,0]])