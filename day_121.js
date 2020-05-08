function makePlusFunction(number1) {
    return (number2) => {
        return number1 + number2
    };
}
const plusFive = makePlusFunction(5);

console.log(plusFive(2));
console.log(plusFive(-8));
