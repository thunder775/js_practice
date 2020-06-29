function rleIterator(inputArray = []) {
    let currentPtr = 0;
    let next = function () {
        if (inputArray[currentPtr] !== undefined) {
            if (inputArray[currentPtr] < 0) {
                let toReturn = inputArray[currentPtr];
                currentPtr++;
                return Math.abs(toReturn);
            } else {
                if (inputArray[currentPtr + 1] === 0) {
                    currentPtr += 2;
                    return next();
                } else {
                    inputArray[currentPtr + 1]--;
                    return inputArray[currentPtr];
                }
            }
        }
    };
    return next;
}


let next = rleIterator([4, 2, 5, 3, -3, 2, 1]);
// let next = rleIterator([0, 2, 2, 0, -1, 2, 1]);
// let next = rleIterator([0, 2]);
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());





