function unshift(linkedList, studentName) {
    return {
        value: studentName,
        next: linkedList
    };
}

class LinkedList {
    head;
    tail = this.head;
    length = 0;

    unshift(studentName) {
        this.length++;
        this.head = {value: studentName, next: this.head};
        if (this.head.next !== undefined) {
            this.tail = this.head.next;
        } else {
            this.tail = this.head
        }
    }

    push(studentName) {
        this.length++;
        if (this.tail === undefined) {
            this.tail = {value: studentName}
        } else {
            this.tail.next = {
                value: studentName,
            };
            this.tail = this.tail.next;
        }
    }

    remove(studentName = '') {
        if (this.length === 0) {
            return undefined;
        }
        if (studentName === this.head.value) {
            return this.shift();
        }
        if (studentName === this.tail.value) {
            return this.pop();
        }
        let ptr = this.head;
        while (ptr.next.value !== studentName) {
            ptr = ptr.next;
        }
        ptr.next = ptr.next.next;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let toReturn = this.head.value;
        if (this.length === 1) {
            this.head = undefined;
            this.tail = undefined;
            this.length = 0;
        } else {
            this.head = this.head.next;
            this.length--;
        }
        return toReturn
    }

    pop() {
        if (this.length === 0) {
            return undefined
        } else if (this.length === 1) {
            let toReturn = this.head.value;
            this.head = undefined;
            this.tail = undefined;
            this.length = 0;
            return toReturn

        } else {
            this.length--;
            let ptr = this.head;
            while (ptr.next.next !== undefined) {
                ptr = ptr.next;
            }
            let toReturn = ptr.next.value;
            ptr.next = undefined;
            this.tail = ptr;
            return toReturn;
        }
    }

    [Symbol.iterator]() {
        let ptr = this.head;
        return {
            next: () => {
                if (ptr !== undefined) {
                    let temp = ptr.value;
                    ptr = ptr.next;
                    return {
                        done: false,
                        value: temp
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }

    toString() {
        let iterator = this.head;
        let resultString = '[ ';
        while (iterator !== undefined) {
            resultString += iterator.value + ', ';
            iterator = iterator.next
        }
        resultString += ']';
        return resultString;
    }
}

function

push(linkedList, studentName) {
    if (linkedList === undefined) {
        return {
            value: studentName
        }
    }
    let ptr = linkedList;
    while (ptr.next !== undefined) {
        ptr = ptr.next;
    }
    ptr.next = {value: studentName};
    return linkedList;
}


// function createListOfStudents() {
// let students = ['Kimiko', 'Raj', 'Anil'];
// let students = {
//     value: 'Kimiko',
//     next: {
//         value: 'Raj',
//         next: {
//             value: 'Anil',
//         }
//     },
// };
//
// let students = undefined;
//
// students = unshift(students, 'Anil');
// students = unshift(students, 'Raj');
// students = unshift(students, 'Kimiko');
//
// students = undefined;
// students = push(students, 'Kimiko');
// students = push(students, 'Raj');
// students = push(students, 'Anil');
// return students;
// }

// console.log(createListOfStudents());
let list = new LinkedList();
list.unshift("masih");
list.unshift("rahul");
list.push("rrrr");
console.log(`${list}`);
// console.log(list.pop());
// console.log(list.shift());
list.remove('masih')
for (let name of list) {
    console.log("---" + name)
}
