function fillShelf(books = [[1]], width = 1) {
    let toReturnHeight = 0;
    let currentMaxHeight = 0;
    let currentWidth = 0;
    for (let i = 0; i < books.length; i++) {
        let [width1, height] = books[i];
        if (currentWidth + width1 > width) {
            toReturnHeight += currentMaxHeight;
            currentMaxHeight = 0;
            currentMaxHeight = height;
            currentWidth = 0;
            currentWidth += width1;
        } else if (currentWidth + width1 === width) {
            if (height > currentMaxHeight) currentMaxHeight = height;
            toReturnHeight += currentMaxHeight;
            currentMaxHeight = 0;
            currentWidth = 0;
        } else {
            if (height > currentMaxHeight) currentMaxHeight = height;
            currentWidth += width1;
        }
    }
    toReturnHeight += currentMaxHeight;
    console.log(toReturnHeight);
    return toReturnHeight;
}

fillShelf([[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]], 2);