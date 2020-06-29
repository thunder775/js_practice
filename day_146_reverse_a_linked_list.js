let input = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
};


function reverse(input) {
    let prev = undefined;
    let current = input;
    let next = current.next;
    while (current.next !== undefined) {
        current.next = prev;
        prev = current;
        current = next;
        next = current.next;
    }
    current.next = prev;
    console.log(current);
    return current;
}

let input2 = {
    value: 5,
    next: {
        value: 9,
        next: undefined
    }
};

function reverse2(input) {
    let prev = {value: input.value};
    let current = input;
    while (current.next !== undefined) {
        let newNode = {value: current.next.value};
        newNode.next = prev;
        prev = newNode;
        current = current.next;
    }
    return prev;
}


// reverse(input);
// reverse(input2);
reverse2(input2);
reverse2(input);