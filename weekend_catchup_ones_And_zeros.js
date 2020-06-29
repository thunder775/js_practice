function sameLength(inputString = "") {
    let lastElement = inputString.charAt(0);
    let lastCountStack = [];
    let lastCount = 0;
    for (let i = 0; i < inputString.length; i++) {
        let currentValue = inputString.charAt(i);
        if (currentValue === lastElement) {
            lastCount++
        } else {
            lastElement = currentValue;
            let temp = lastCountStack.pop();
            if (temp === undefined) {
                lastCountStack.push(lastCount);
            } else  if (lastCount !== temp){
                return false;
            }
            lastCount = 1;
        }
    }
    return lastCount === lastCountStack.pop();
}

console.log(sameLength("110011100010")); //➞ true

console.log(sameLength("101010110"));// ➞ false

console.log(sameLength("111100001100"));// ➞ true

console.log(sameLength("111"));// ➞ false
