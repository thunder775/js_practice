function pushDominoes(initialState = 'hey') {
    let initialList = initialState.split('');
    let moveQueue = [];
    let temp = '';
    let output = '';
    for (let i = 0; i < initialState.length; i++) {
        if (initialList[i] === '.') {
            temp += '.';
        } else {
            output += modifyDots(temp, moveQueue.pop(), initialList[i])+initialList[i];
            temp = '';
            moveQueue.push(initialList[i]);
        }
    }
    // console.log((output+modifyDots(temp,moveQueue.pop(),undefined)).trim());
    return (output+modifyDots(temp,moveQueue.pop(),undefined)).trim()
}

function modifyDots(stringToModify = '...', start , end ) {
    let list = stringToModify.split('');
    let stepsToDo = Math.floor(list.length / 2);
    if (start === "R" && end === "L") {
        list.splice(0, stepsToDo);
        list.splice(0, 0, ...new Array(stepsToDo).fill("R"));
        list.splice((list.length - 1) - stepsToDo + 1, stepsToDo);
        list.splice(list.length, 0, ...new Array(stepsToDo).fill("L"));
    } else if (start === undefined && end === "L") {
        return new Array(stringToModify.length).fill("L").join('');
    } else if (start === "L" && end === undefined) {
        return stringToModify
    } else if (start === "R" && end === undefined) {
        return new Array(stringToModify.length).fill("R").join('');
    } else if (start === undefined && end === "R") {
        return stringToModify
    } else if (start === "R" && end === "R") {
        return new Array(stringToModify.length).fill("R").join('');
    } else if (start === "L" && end === "L") {
        return new Array(stringToModify.length).fill("L").join('');
    }
    return list.join('');
}

// console.log(modifyDots('.....', "R", undefined));
// console.log(modifyDots('....', "R", undefined));
// pushDominoes(".L.R...LR..L..");
// pushDominoes("RR.L");
// pushDominoes("L.LL......");
console.log(pushDominoes(".......LLL"));

