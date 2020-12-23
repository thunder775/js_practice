// function splitAndDelimit(string = '', interval = 1, delimiter = '') {
//     let iterator = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (iterator === interval) {
//             string = string.substring(0, i) + delimiter + string.substring(i, string.length)
//             iterator = 0;
//         }else{
//         iterator++;}
//     }
//     console.log(string)
//     return string
// }
// splitAndDelimit("bellow", 2, "&") //➞ "be&ll&ow"
//
// splitAndDelimit("magnify", 3, ":")// ➞ "mag:nif:y"
//
// splitAndDelimit("poisonous", 2, "~")// ➞ "po~is~on~ou~s"


// You are given with 0s, 1s and 2s in an array. Sort it one pass and constant space


function sortColors(nums) {
    let map = new Map();
    map.set(0, 0);
    map.set(1, 0);
    map.set(2, 0);

    nums.forEach((num) => {
        let val = map.get(num);
        map.set(num, ++val);
    });
    return Array(map.get(0)).fill(0).concat(Array(map.get(1)).fill(1)).concat(Array(map.get(2)).fill(2));
}
console.log(sortColors([2, 0, 2, 1, 1, 0]));