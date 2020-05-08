function areCousins(list, num1, num2) {
    let properList = [];
    let i = 0;
    let temp1 = list.splice(0, Math.pow(2, 0));
    let temp2 = [];
    while (list.length !== 0) {
        if (i === 0) {
            properList.push(temp1);
            i++;
        }
        for (let j = 0; j < temp1.length; j++) {
            if (temp1[j] === null) {
                temp2.push(null);
                temp2.push(null)
            } else {
                temp2.push(list.splice(0, 1)[0]);
                temp2.push(list.splice(0, 1)[0])
            }
        }
        properList.push(temp2);
        temp1 = temp2;
        temp2 = [];
    }
    // console.log(properList);
    let [depth1, pos1] = getDepthAndPosition(properList, num1);
    let [depth2, pos2] = getDepthAndPosition(properList, num2);
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


console.log(areCousins([1, null, 2, 3, 4, null, 5], 3, 4));
console.log(areCousins([1, 2, null, 3, 4, 5, null, 6], 5, 6) === true);
console.log(areCousins([1, 2, 3, 4], 4, 3) === false);
console.log(areCousins([1, 2, 3, null, 4, null, 5], 5, 4) === true);
console.log(areCousins([1, 2, 3, null, 4], 2, 3) === false);
console.log(areCousins([1,20, 2,null,21, 4, 5,null,null, null, 6, null, 7, null, 11, null, 12], 11, 12) === true);
console.log(areCousins([1, 6, 10, null, 2, 3, 7, 12, 4, null, 9], 3, 7) === false);

