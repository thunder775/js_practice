// Challenge 1
// 100 doors
// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through,
// visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it).
// The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time,
// visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number
// included in the array if it is open.
function processDoors(list) {
    let output = [];
    let incrementer = 1;
    while (incrementer !== list.length + 1) {
        for (let i = incrementer - 1; i < list.length; i += incrementer) {
            toggleDoor(list, i);
        }
        incrementer++;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 1) {
            output.push(i + 1);
        }
    }
    console.log(output);
}

function toggleDoor(list, index) {
    list[index] = list[index] === 0 ? 1 : 0;
}

// processDoors(Array(20).fill(0))
// Challenge 2
// Write a function that removes the last vowel in each word in a sentence.
// removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."

// removeLastVowel("Love is a serious mental disease.")
// ➞ "Lov s  serios mentl diseas"

// removeLastVowel("Get busy living or get busy dying.")
// ➞ "Gt bsy livng r gt bsy dyng"
function removeLastVowel(string) {
    // let words = string.split(' ')
    let result = string;
    for (let i = string.length - 1; i >= 0; i--) {
        if (isVowel(string.charAt(i))) {
            result = result.slice(0, i) + result.slice(i + 1, string.length);
            i = string.lastIndexOf(' ', i)
        }
    }
    console.log(result);
}

function isVowel(char) {
    let vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    return vowel.indexOf(char) !== -1;
}

removeLastVowel("Love is a serious mental disease.")
removeLastVowel("Get busy living or get busy dying.")