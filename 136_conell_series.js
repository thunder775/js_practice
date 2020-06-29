function connellSequence(start, end, target) {
    let currentlength = 0;
    for (let i = start; i <= end; i++) {
        let square = i * i;
        for (let j = 0; j < i; j++) {
            if (square === target) {
                return currentlength +(i - j-1);
            }
            square -= 2;
        }
        currentlength+=i;
    }
    return "Not Found";
}

console.log(connellSequence(1, 3, 4));
console.log(connellSequence(10000, 11000, 120999810));
console.log(connellSequence(2, 3, 7));
// // console.log(connellSequence(4, 5, 22));
// getConellSeries(1);
// getConellSeries(2);
// getConellSeries(3);

