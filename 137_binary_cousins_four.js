function areCousins(list, num1, num2) {
    console.log('=============='+ list.length)
    let listPointer = 0;
    let nullCounter = 0;
    let index1;
    let index2;
    let level = 0;
    while (listPointer < list.length) {
        for (let i = 0; i < Math.pow(2, level) - nullCounter; i++) {
            if (list[listPointer] === num1) {
                index1 = [listPointer, level];
            } else if (list[listPointer] === num2) {
                index2 = [listPointer, level];

            } else if (list[listPointer] === null) {
                nullCounter++;
            }
            listPointer++;
        }
        nullCounter = nullCounter * 2;
        level++;
        if (index1 !== undefined && index2 !== undefined) {
            break;
        }
    }
    if ((Math.abs(index1[0] - index2[0]) === 1) && (Math.min(index2[0],index1[0]) % 2 === 0) && (index2[1] === index1[1])) {
        return false;
    }
    return index2[1] === index1[1];
}

function testCousinsInBinaryTree() {
    let testArray = [];
    for (let i = 1; i < 100; i++) {
        testArray.push(i, null)
    }
    return testArray;
}
//
let testArray = testCousinsInBinaryTree();
// console.log(areCousins([1, null, 2, null, 3, null, 4, null, 5], 4, 5) === false);
console.log(areCousins(testArray, 30, 95) === false);