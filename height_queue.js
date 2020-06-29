function sortHeightQueue(queue = [[]]) {
    let result = [];
    queue.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        } else {
            return b[0] - a[0]
        }
    });
    result = queue.filter((person) => person[0] === queue[0][0]);
    for (let i = result.length ; i < queue.length;i++){
        result.splice(queue[i][1],0,queue[i])
    }
        console.log(result);
    return result
}

sortHeightQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]);
sortHeightQueue([[9, 0], [7, 0], [1, 9], [3, 0], [2, 7], [5, 3], [6, 0], [3, 4], [6, 2], [5, 2]]);
sortHeightQueue([[1, 0]]);
sortHeightQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]);