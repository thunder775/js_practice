function rotatorial2(a = 9) {
    let currentOperationIndex = 0;
    let result = 0;
    for (let i = a; i > 0; i--) {
        result += performOperation(currentOperationIndex, i);
    }
}

function performOperation(operationIndex, value) {
    let toReturn = 0;
    if (operationIndex === 0) {
        if (value - 1 > 0) {
            if (value - 2 > 0) {
                toReturn = (value * (value - 1)) / (value - 2);
                value -= 2;
            } else {
                toReturn = (value * (value - 1));
                value -= 1
            }
        } else {
            return value;
        }
    }
    return toReturn;
}


// rotatorial(4); // should return 7 because  4 * 3 / 2 + 1 = 7
// rotatorial(10); // should return 12 because 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1 = 12
console.log(rotatorial2(3));
