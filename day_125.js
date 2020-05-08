function diceRange(str) {
    let [numberOfDice, remainder] = str.split('d');
    if (numberOfDice === '') {
        numberOfDice = 1;
    }
    let operation = findOperation(str);
    let numberOfSides = 0;
    let modifier = 0;
    if (operation !== '') {
        [numberOfSides, modifier] = remainder.split(operation)
    } else {
        numberOfSides = remainder;
    }
    let min = 0;
    let max = 0;
    if (operation === '+') {
        min = parseInt(numberOfDice) + parseInt(modifier);
        max = (parseInt(numberOfDice) * parseInt(numberOfSides)) + parseInt(modifier)
    } else {
        min = parseInt(numberOfDice) - parseInt(modifier);
        max = (parseInt(numberOfDice) * parseInt(numberOfSides)) - parseInt(modifier)
    }
    return [min, max];
}

function findOperation(word) {
    let temp = word.split('');
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '+') {
            return '+'
        }
        if (temp[i] === '-') {
            return '-'
        }
    }
    return '';
}

console.log(diceRange('3d2+32'));
console.log(diceRange("1d6+2"));
console.log(diceRange("d6-2"));
console.log(diceRange("2d6"));
console.log(diceRange("2d6-1"));
console.log(diceRange("0d6+1"));