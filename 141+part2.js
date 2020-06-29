function shouldBeRewarded(string) {
    let a = 0;
    let l = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === 'A') {
            a++
        } else if (i < string.length - 1) {
            if (string.charAt(i) === 'L' && string.charAt(i + 1) === 'L') {
                l++;
            }
        }
    }
    return a <= 1 && l <= 1;
}

console.log(shouldBeRewarded("PPALP"));
console.log(shouldBeRewarded("PPLLAL"));