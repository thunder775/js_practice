function getProductArray(inputArray = []) {
    let leftProducts = [1];
    let product = 1;
    inputArray.forEach((value, index) => {
        product *= value;
        if (index !== inputArray.length - 1)
            leftProducts.push(product)

    });
    let rightProducts = [1];
    product = 1;
    for (let i = inputArray.length - 1; i >= 0; i--) {
        product *= inputArray[i];
        if (i !== 0)
            rightProducts.unshift(product)
    }
    return leftProducts.map((value, index) => value * rightProducts[index]);
}

getProductArray([1, 2, 3, 4]);