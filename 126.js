function pilishString(input) {
    let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9];
    let result = '';
    for (let i = 0; i < piArray.length; i++) {
        if (input.length === 0) {
            break;
        }
        let temp = input.substring(0, piArray[i]);
        if (temp.length !== piArray[i]) {
            temp = temp.padEnd(piArray[i], temp.charAt(temp.length - 1));
        }
        input = input.substring(piArray[i]);
        result += temp + ' ';
    }
    console.log(result);
    return result;
}

pilishString('HOWINEEDADRINKALCOHOLICINNATUREAFTERTHEHEAVYLECTURESINVOLVINGQUANTUMMECHANICSANDALLTHESECRETSOFTHEUNIVERSE');
pilishString('HOWINEEDADRINKALCOHOLICINNATUREAFTERTHEHEAVYLECTURESINVOLVINGQUAN');
pilishString("33314444");
pilishString("CANIMAKEAGUESSNOW");
pilishString("FORALOOP");
pilishString("TOP");
pilishString("A");
pilishString("");