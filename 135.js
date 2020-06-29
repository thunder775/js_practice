function sameVowelGroup(list) {
    let result = [list[0]];
    let requiredVowels = getVowels(list[0]);
    for (let i = 1; i < list.length; i++) {
        let currentVowels = getVowels(list[i]);
        if (compareList(requiredVowels, currentVowels)) {
            result.push(list[i])
        }
    }
    console.log(result);
    return result;
}

function compareList(l1, l2) {
    for (let i = 0; i < l1.length; i++) {
        for (let j = 0; j < l2.length; j++) {
            if (l1[i] === l2[j]) {
                l2.splice(j, 1);
                j = 0;
            }
        }
    }
    return l2.length === 0;
}

function getVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word.charAt(i)) !== -1) {
            result.push(vowels[vowels.indexOf(word.charAt(i))])
        }
    }
    return Array.from(new Set(result));
}


sameVowelGroup(["toe", "ecolot", "oemaniac"]) // ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) // ["many"]

sameVowelGroup(["hoops", "hoooops", "bot", "bottom",'o']) // ["hoops", "bot", "bottom"]