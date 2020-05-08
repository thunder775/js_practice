function joinOverlapping(words) {
    while (words.length !== 1) {
        for(let i = 0 ;i<words.length-1;i++){
            words[i] = concatOverlappingWords(words[i],words[i+1])
        }
        words.splice(words.length-1, 1);
    }
    console.log(words[0]);
    return words[0];




}

function concatOverlappingWords(word1, word2) {
    let pointer1 = word1.length - 1;
    let pointer2 = 0;
    let result = '';
    while (!(pointer1 < 0) || (pointer1 < word2.length)) {
        if(pointer1<0){
            break;
        }
        if (word1.substring(pointer1, word1.length) === word2.substring(0, pointer2 + 1)) {
            result += word1 + word2.substring(pointer2 + 1, word2.length);
            break;
        }
        pointer1--;
        pointer2++;
    }
    if (result === '') {
        result += word1 + word2;
    }
    // console.log([result]);
    return result;
}

// joinOverlapping(["oven", "envier", "erase", "serious"]);// "ovenvieraserious"

// joinOverlapping(["move", "over", "very"]);// "movery"
//
// joinOverlapping(["to", "ops", "psy", "syllable"]); // "topsyllable"
// //
// joinOverlapping(["move", "over", "movery"]); // movermovery

