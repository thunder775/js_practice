function isbn13(input) {
    let isbn = Array.from(input);
    // console.log(isbn)
    isbn[9] = isNaN(isbn[9]) ? 10 : isbn[9];
    isbn = convertForChecking(isbn);
    if (isbn.reduce((a, b) => Number(a) + Number(b), 0) % (isbn.length === 10 ? 11 : 10) === 0) {
        return isbn.length === 13
            ? 'Valid'
            : convertToIsbn13(input)
    }
    return 'Invalid';
}

function convertToIsbn13(input) {
    input = '978' + input.substring(0, input.length - 1);
    let check = input.split('');
    check = convertForChecking(check);
    check = check.reduce((a, b) => Number(a) + Number(b), 0);
    input += 10 - (check % 10);
    return input;
}

function convertForChecking(isbn) {
    let length = isbn.length;
    // console.log(isbn, length);
    return length === 10
        ? isbn.map((digit, index) => digit * (length - index))
        : isbn.map((digit, index) => digit * (index % 2 !== 0 ? 3 : 1));
}

console.log(isbn13("999"));
// / isbn13("0316066524") // "9780316066525"
// // // isbn13("817450494X")