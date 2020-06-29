function rotateImage(imageMatrix = [[]]) {
    //transpose the matrix
    for (let row = 0; row < imageMatrix.length; row++) {
        for (let col = row + 1; col < imageMatrix[0].length; col++) {
            let temp = imageMatrix[row][col];
            imageMatrix[row][col] = imageMatrix[col][row];
            imageMatrix[col][row] = temp;
        }
    }
    // return each row reversed
    return imageMatrix.map((row) => row.reverse());
}

rotateImage([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]);
