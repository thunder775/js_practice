function totalPoints(list, word) {
    let points = 0;
    for (let i = 0; i < list.length; i++) {
        if (checkValidWord(list[i], word)) {
            if (list[i].length === 6) {
                points += 54;
            } else {
                if(list[i].length>2){points += list[i].length - 2;}
            }
        }
    }
    return points;
}

function checkValidWord(wordToCheck, word) {
    let tempWord = word.substring(0);
    let tempWordRoCheck = wordToCheck.substring(0);
    let parentList = tempWord.split('');
    let childList = tempWordRoCheck.split('');
    for (let i = 0; i < childList.length; i++) {
        let index = parentList.indexOf(childList[i]);
        if (index === -1) {
            return false
        } else {
            parentList.splice(index, 1);
        }
    }
    return true;
}
console.log(totalPoints(["cat", "create", "sat"], "caster"))
console.log(totalPoints(["trance", "recant"], "recant"))
console.log(totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed"))