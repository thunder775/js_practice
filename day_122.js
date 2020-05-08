function kaprekar(number) {
    let iteration = 0;
    if (checkInvalidInput(number)) {
        return null;
    }
    if (doKaprekarSteps(number) === 6174) {
        return 1
    } else {
        iteration++;
        iteration += kaprekar(doKaprekarSteps(number))
    }
    return iteration;
}

function makeLengthFour(number) {
    let result = number.toString().split('');
    for (let i = 0; i < 4 - number.toString().length; i++) {
        result.unshift('0')
    }
    return result;
}
function checkInvalidInput(number){
    let list = number.toString().split('');
    for(let i=0;i<list.length-1;i++){
        if(list[i]!==list[i+1]){
            return false;
        }
    }
    return true;
}



function doKaprekarSteps(number) {
    let ascending = makeLengthFour(number).sort((a, b) => (a - b));
    let descending = makeLengthFour(number).sort((a, b) => (b - a));
    let difference = parseInt(descending.join('')) - parseInt(ascending.join(''));
    return parseInt(makeLengthFour(difference).join(''));
}

console.log(kaprekar(495));
console.log(kaprekar(1111));
console.log(kaprekar(6621));
console.log(kaprekar(6554));
console.log(kaprekar(6174));
