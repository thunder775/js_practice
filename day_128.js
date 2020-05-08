function areCousins(list, num1, num2) {
    let result = [];
    for (let i = 0; ; i++) {
        if (list.length === 0) {
            break;
        }
        result.push(list.splice(0, Math.pow(2, i)))
    }
    console.log(result);
    let depth1;
    let depth2;
    let pos1;
    let pos2;
    [depth1, pos1] = getDepthAndPosition(result, num1);
    [depth2, pos2] = getDepthAndPosition(result, num2);
    let lesserPosition = Math.min(pos1, pos2);
    if ((Math.abs(pos2 - pos1) === 1) && (lesserPosition % 2 === 0) && (depth1 === depth2)) {
        return false;
    }
    return depth1 === depth2;
}

function getDepthAndPosition(list, num) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (list[i][j] === num) {
                return [i, j]
            }
        }
    }
}


console.log(areCousins([1, 2, 3, null, 4, 7, 5], 7, 5));
console.log(areCousins([1,2,3,4],  4,  3 ));
console.log(areCousins([1,2,3,4],  2,  3 ));
