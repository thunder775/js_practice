// nth Most Expensive Book
// Find the nth most expensive book in an unsorted array of books. Note that it is the nth most expensive book in the sorted order, not the nth book with distinct price. If two books have same price return either of those books.
//
//     Note: Do not use sort method.
//
//     Input: [
//     {title: 'Thinking Fast and Slow', price: 24.99},
//     {title: 'Harry Potter', price: 24.99},
//     {title: 'Let us C', price: 11.99},
//     {title: 'Exposition of Seven Church Ages', price: 10.99},
//     {title: 'Half Girlfriend', price: 18.99}
// ] and n = 3
// Output: {title: 'Half Girlfriend', price: 18.99}
function expensive(objectList = [{}], n = 1) {
    let rankMap = new Map();
    let indicesTracked = [];
    for (let i = 0; i < n; i++) {
        let currentMax = -Infinity;
        let currentMaxIndex = -Infinity;
        for (let j = 0; j < objectList.length; j++) {
            if (indicesTracked.indexOf(j) !== -1) {
            } else {
                let price = objectList[j].price;
                if (price > currentMax) {

                    currentMax = price;
                    currentMaxIndex = j;
                }
            }
        }
        indicesTracked.push(currentMaxIndex)
        rankMap.set(i, currentMaxIndex);
    }
    return objectList[rankMap.get(n - 1)];
}

console.log(expensive(
    [
        {title: 'Thinking Fast and Slow', price: 24.99},
        {title: 'Harry Potter', price: 24.99},
        {title: 'Let us C', price: 11.99},
        {title: 'Exposition of Seven Church Ages', price: 10.99},
        {title: 'Half Girlfriend', price: 18.99}
    ], 3
))
