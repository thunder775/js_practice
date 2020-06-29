function numToGoogle(inputArray = ['']) {
    let formattedArray = inputArray.map((string) => string.split('').map((value) => Number(value)));
    let resultString = '';
    for (let array of formattedArray) {
        let toAddString = '';
        let index = [1, 2, 3, 4];
        let vals = ['g', 'o', 'l', 'e'];
        for (let i = 0; i < array.length; i++) {
            if (index.includes(array[i])) {
                toAddString += vals[array[i] - 1];
            } else if (array[i] === 6) {
                toAddString += '.'
            } else if (array[i] === 7) {
                if (toAddString.length !== 0) toAddString = toAddString.charAt(0).toUpperCase() + toAddString.substring(1);
            } else if (array[i] === 5) {
                if (toAddString.length !== 0) {
                    let toAdd = toAddString.charAt(toAddString.length - 1).toUpperCase();
                    toAddString = toAddString.substring(0, toAddString.length - 1) + toAdd;
                }
            } else if (array[i] === 0) {
                let iteration = 0;
                if (i + 1 < array.length) {
                    i++;
                    iteration = array[i];
                }
                if (toAddString.length !== 0) {
                    let toAdd = toAddString.charAt(toAddString.length - 1);
                    toAdd += Array(iteration - 1).fill(toAdd).join('');

                    toAddString = toAddString.substring(0, toAddString.length - 1) + toAdd;
                }
            } else if (array[i] === 9) {
                toAddString = '';
            }

        }
        resultString += toAddString;
    }
    console.log(resultString)
    return resultString;
}


numToGoogle(["12213467"]) //➞ "Google."

numToGoogle(["12213467", "321"])// ➞ "Google.log"

numToGoogle(["12213467", "321", "122906"]) //➞ "Google.log"

numToGoogle(["15", "2502", "15", "345"]) //➞ "GOOGlE"

numToGoogle(["15", "2502", "15", "35", "45"])// ➞ "GOOGLE"

numToGoogle(["15", "202", "1", "3", "4"])// ➞ "Google"
// console.log(Array(7).fill(0))
numToGoogle(['15202', '3545']);// -> GooLE

numToGoogle(["12102346"])// ->goggle.
numToGoogle(["12109"])// ->goggle.