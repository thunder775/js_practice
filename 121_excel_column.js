function excelColumnNumber(columnName) {
    let columnCharIndices = [];
    columnName.split('').forEach((char) => {
        columnCharIndices = [...columnCharIndices, char.toLowerCase().charCodeAt(0) - 96];
    });
    let result = 0;
    for (let i = columnCharIndices.length - 1; i >= 0; i--) {
        result += Math.pow(26,columnCharIndices.length-i-1)*(columnCharIndices[i]);
    }
    return result;
}

console.log(excelColumnNumber("zy"));