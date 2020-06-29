function reverse(string) {
    let foundMatch = true;
    while (foundMatch) {
        foundMatch = false;
        string = string.replace(/\([a-z]*\)/gm, (m, g) => {
            foundMatch = true;
            return reverseString(m);
        })
    }
    console.log(string);
    return string;
}

function reverseString(string = '') {
    let stringChars = string.substring(1, string.length - 1).split('');
    return stringChars.reverse().join('');
}

// reverse('(ed(et(oc))el)');
// reverse("a(bcdefghijkl(mno)p)q");

function withoutRegExp(string = '') {
    let queue = [];
    let currentString = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === '(') {
            queue.push(currentString);
            currentString = '';
        } else if (string.charAt(i) === ')') {
            currentString = queue.pop() + currentString.split('').reverse().join('');
        } else {
            currentString += string.charAt(i);
        }
    }
    console.log(currentString);
    return currentString;
}

withoutRegExp('(ed(et(oc))el)');
withoutRegExp("a(bcdefghijkl(mno)p)q");