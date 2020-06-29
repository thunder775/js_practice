function rotatorial(number = 1) {
    let map = new Map();
    map.set(0, ' * ');
    map.set(1, ' / ');
    map.set(2, ' + ');
    map.set(3, ' - ');
    let string = ''
    let iterator = 0;
    for (let i = number; i > 0; i--) {
        string += `${i}`;
        string += map.get(iterator);
        iterator++;
        if (iterator === 4) iterator = 0;
    }/**/
    string = string.substring(0, string.length - 3);
    // console.log(string);
    string = string.replace(/(\d+ \* \d+)/gm, (m, g) => {
        let [num1, num2] = [Number(m.split('*')[0]), Number(m.split('*')[1])]
        return `${num1 * num2}`
    })
    // console.log(string);
    string = string.replace(/(\d+ \/ \d+)/gm, (m, g) => {
        let [num1, num2] = [Number(m.split('/')[0]), Number(m.split('/')[1])]
        return `${Math.floor(num1 / num2)}`
    })
    // console.log(string);
    // string = string.replace(/(\d+ \- \d+)/gm, (m, g) => {
    //     let [num1, num2] = [Number(m.split('-')[0]), Number(m.split('-')[1])]
    //     return `${num1 - num2}`
    // })

    // // console.log(string);
    // string = string.replace(/(\d+ \+ \d+)/gm, (m, g) => {
    //     let [num1, num2] = [Number(m.split('+')[0]), Number(m.split('+')[1])]
    //     return `${num1 + num2}`
    // })
    // string = string.replace(/(\d+ \+ \d+)/gm, (m, g) => {
    //     let [num1, num2] = [Number(m.split('+')[0]), Number(m.split('+')[1])]
    //     return `${num1 + num2}`
    // })

    let numStack = string.replace(/(\+\-)/gm, (m, g) => {
        return ''
    }).split(' ').map((val) => Number(val.trim())).filter((val) => !isNaN(val));
    let operationStack = string.replace(/(\d+)/gm, (m, g) => {
        return ''
    }).split('').map((val) => val.trim()).filter((val) => val !== '');
    while (operationStack.length !== 0) {
        let [last, secondLast] = [numStack.pop(), numStack.pop()]
        let operation = operationStack.pop();
        if (operation === '+') {
            numStack.push(last + secondLast)
        } else {
            numStack.push(secondLast-last)
        }
    }
    console.log(numStack);
    console.log(operationStack);
    console.log(string);
}


// rotatorial(4); // should return 7 because  4 * 3 / 2 + 1 = 7
rotatorial(10); // should return 12 because 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1 = 12
