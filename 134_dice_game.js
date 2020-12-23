function diceGame(moves) {
    let players = ['p1', 'p2', 'p3', 'p4'];
    let numberOfPlayers = 4;
    while (numberOfPlayers > 1) {
        let currentMoves = moves.splice(0, numberOfPlayers);
        if (removePlayer(currentMoves) !== null) {
            players.splice(removePlayer(currentMoves), 1);
            numberOfPlayers--;
        }
    }
    return players[0];
}

function removePlayer(moves) {
    let scores = [];
    let index = 0;
    moves.forEach((move) => {
        scores.push([index, move[0], move[0] + move[1]]);
        index++
    });

    let minScore = Math.min(...scores.map((score) => score[2]));
    scores = scores.filter((score) => score[2] === minScore);
    if (scores.length !== 1) {l
        scores.sort((a, b) => a[1] - b[1]);
        if (scores[0][1] === scores[1][1]) {
            return null;
        } else {
            return scores[0][0];
        }
    } else {
        return scores[0][0];
    }

}

// console.log(removePlayer([[4, 3], [3, 10], [3, 4], [1, 6]]));
console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [5, 6], [2, 2]]));
// console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [1, 5], [1, 5], [4, 3], [3, 6], [1, 2], [3, 6], [1, 5], [1, 5], [1, 6], [1, 6], [1, 6], [1, 6], [1, 6], [1, 6], [1, 6], [3, 6]]));

// console.log(diceGame([[5, 5], [4, 4], [3, 3], [2, 3], [1, 1], [1, 1], [1, 1], [5, 5], [4, 4], [3, 3]]));

