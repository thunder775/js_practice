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
    let firstMoves = [];
    moves.forEach((move) => {
        scores.push((move[0] + move[1]));
        firstMoves.push(move[0]);
    });
    let [minScoreIndex1, minScoreIndex2] = [scores.indexOf(Math.min(...scores)), scores.lastIndexOf(Math.min(...scores))];
    if (minScoreIndex1 === minScoreIndex2) {
        return minScoreIndex1;
    } else {
        let [firstMove1, firstMove2] = [firstMoves[minScoreIndex1], firstMoves[minScoreIndex2]];
        if (firstMove1 === firstMove2) {
            return null
        } else {
            return firstMove2 > firstMove1 ? minScoreIndex1 : minScoreIndex2;
        }
    }
}

console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [1, 5], [5, 6], [2, 2]]));
console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [1, 5], [1, 5], [4, 3], [3, 6], [1, 2], [3, 6], [1, 5], [1, 5], [1, 6], [1, 6],[1, 6], [1, 6],[1, 6], [1, 6],[1, 6], [3, 6]]));
console.log(diceGame([]));
console.log(diceGame([[5,5],[4,4],[3,3],[2,3],[1,1],[1,1],[1,1],[5,5],[4,4],[3,3]]));

