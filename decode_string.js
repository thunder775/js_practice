function decodeString(word) {
    let numStack = [];
    let strStack = [];
    let res = '';
    let num = 0;
    for (let i = 0; i < word.length; i++) {
        if (!isNaN(word.charAt(i))) {
            let j = i;
            while (word.charAt(j + 1) !== '[') {
                j++;
            }
            num = parseInt(word.substring(i, j + 1));
            i = j;
        } else if (word.charAt(i) === '[') {
            numStack.push(num);
            num = 0;
            strStack.push(res);
            res = '';
        } else if (word.charAt(i) === ']') {
            let iteration = numStack.pop();
            let addon = '';
            for (let j = 0; j < iteration; j++) {
                addon += res;
            }
            res = strStack.pop() + addon;
        } else {
            res += word.charAt(i);
        }
    }
    return res;
}

decodeString('3[a2[b]3[c]]');