function productExceptSelf(inputArray = []) {
    let resultArray = Array(inputArray.length);
    let currentRightProduct = 1;
    let currentLeftProduct = 1;
    for (let i = 0; i < inputArray.length; i++) {
        resultArray[i] = currentRightProduct;
        currentRightProduct *= inputArray[i];
    }
    for (let i = inputArray.length-1; i >=0; i--) {
        resultArray[i] *= currentLeftProduct;
        currentLeftProduct *= inputArray[i];
    }
    return resultArray
}

console.log(productExceptSelf([1, 2, 3, 4]));