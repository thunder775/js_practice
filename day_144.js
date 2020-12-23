// function divide(list = [], n = 1) {
//     if (list.length === 0) {
//         return [[]]
//     }
//     let sum = list[0];
//     let result = [];
//     let currentSubArray = [list[0]];
//     for (let i = 1; i < list.length; i++) {
//         sum += list[i];
//         if (sum > n) {
//             result.push(currentSubArray);
//             currentSubArray = [];
//             sum = 0;
//             i--;
//         } else {
//             currentSubArray.push(list[i])
//         }
//     }
//    result.push(currentSubArray);
//     return result;
// }
function divide(list = [], n = 1) {
    if (list.length === 0) {
        return [[]]
    }

    let result = []
    while(list.length>0){
        let sum = 0;
        let spliceIndex = 0;
        for(let i = 0;i<list.length;i++ ){
            sum+=list[i]
            if(sum>n){
                sum-=list[i]
                spliceIndex = i-1
                break;
            }
            if(i===list.length-1){
                spliceIndex=i;
            }
        }
        result.push([...list.splice(0,spliceIndex+1)])
    }
    return result
}



// console.log(divide([1, 2, 3, 4, 1, 0], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]

console.log(divide([1, 0, 1, 1, -1, 0, 0], 1)); //  [[1, 0], [1], [1, -1, 0, 0]]

// console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)); // [[2, 1, 0, -1, 0, 0], [2, 1], [3]]
// console.log(divide([], 3)); // [[2, 1, 0, -1, 0, 0], [2, 1], [3]]