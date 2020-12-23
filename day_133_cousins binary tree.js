function areCousins(list, num1, num2) {
    let i = 1;
    let cousinsNonNull =  list.splice(0,1);
    let cousinsWithNull = [];
    let properList = [cousinsNonNull];
    while (list.length !== 0) {
        for (let j = 0; j < cousinsNonNull.length; j++) {
            if (cousinsNonNull[j] === null) {
                cousinsWithNull.push(...[null,null]);
            } else {
                cousinsWithNull.push(...[list.splice(0, 1)[0],list.splice(0, 1)[0]]);
            }
        }
        properList.push(cousinsWithNull);
        cousinsNonNull = cousinsWithNull;
        cousinsWithNull = [];
    }
    let [depth1, pos1] = getDepthAndPosition(properList, num1);
    let [depth2, pos2] = getDepthAndPosition(properList, num2);
    let lesserPosition = Math.min(pos1, pos2);
    if ((Math.abs(pos2 - pos1) === 1) && (lesserPosition % 2 === 0) && (depth1 === depth2)) {
        return false;
    }
    return depth1 === depth2;


}

function getDepthAndPosition(list, num) {
    for (let depth = 0; depth < list.length; depth++) {
        for (let pos = 0; pos < list[depth].length; pos++) {
            if (list[depth][pos] === num) {
                return [depth, pos]
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

console.log(module)