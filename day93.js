// Height of the Tallest Building
// Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.

console.log(tallestBuildingHeight([
    "            ##",
    "            ##",
    "            ##",
    "###   ###   ##",
    "###   ###   ###",
    "###   ###   ###",
    "###   ###   ###"
]));
// ➞ "140m"

// // Tallest building is 7 rows
// // 7 x 20m = 140m

console.log(tallestBuildingHeight([
    "               ",
    "               ",
    "               ",
    "       #    ###",
    "      # #   ###",
    "###   ###   ###",
    "###   ###   ###"
]));

// ➞ "80m"

function tallestBuildingHeight(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes('#')) {
            return (list.length - i) * 20;
        }
    }
    return 0;
}

// Challenge 2
// Something in the Box?
// Create a function that returns true if an asterisk * is inside a box.
console.log(inBox([
    "###",
    "#*#",
    "###"
]));
// ➞ true

console.log(inBox([
    "####",
    "# *#",
    "#  #",
    "####"
]));
// ➞ true

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]));

// ➞ false
function inBox(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].indexOf('#') < list[i].indexOf('*') && list[i].lastIndexOf('#') > list[i].indexOf('*')) {
            return true;
        }
    }
    return false;
}