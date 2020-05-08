function strongPassword(word) {
    let sc = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+',];
    let qualifiers = ['lc', 'uc', 'dig', 'sc',];
    let charsList = word.split('');
    for (let i = 0; i < charsList.length; i++) {
        if (qualifiers.indexOf('sc') !== -1 && sc.indexOf(charsList[i]) !== -1) {
            let temp = qualifiers.indexOf('sc');
            qualifiers.splice(temp, 1);
        }else if (qualifiers.indexOf('dig') !== -1 && !isNaN(charsList[i])) {
            let temp = qualifiers.indexOf('dig');
            qualifiers.splice(temp, 1);
        } else if (qualifiers.indexOf('lc') !== -1 && charsList[i] === charsList[i].toLowerCase()) {
            let temp = qualifiers.indexOf('lc');
            qualifiers.splice(temp, 1);
        } else if (qualifiers.indexOf('uc') !== -1 && charsList[i] === charsList[i].toUpperCase()) {
            let temp = qualifiers.indexOf('uc');
            qualifiers.splice(temp, 1);
        }
    }

    if (qualifiers.length < 6 - charsList.length) {
        return 6 - charsList.length
    } else {
        return qualifiers.length;
    }
}

console.log(strongPassword('Ed1'));
console.log(strongPassword('#Edabit'));
console.log(strongPassword("W1llth!spass?"));