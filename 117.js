function canPut(word, billboard) {
    let wordsList = word.split(' ');
    let wordsLength = [];
    wordsList.forEach((word) => {
        wordsLength.push(word.length);
    });
    let currentIndex = 0;
    for (let i = 0; i < billboard[0]; i++) {
        let rowLength = billboard[1];
        while (rowLength > 0 && currentIndex !== wordsLength.length) {
            if (rowLength < wordsLength[currentIndex]) {
                rowLength = 0;
            } else if (rowLength === wordsLength[currentIndex]) {
                rowLength = 0;
                currentIndex++;
            } else {
                rowLength -= wordsLength[currentIndex] + 1;
                currentIndex++;
            }
        }
    }
    return currentIndex === wordsLength.length;
}

// console.log(canPut("GOOD", [1, 4]));
console.log(canPut("GOOD MORN GOOD MORN", [3, 4]));
// console.log(canPut("GOOD MORN", [3,3]));