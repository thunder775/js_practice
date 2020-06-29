function discount(amount, discount) {
    let percentages = [];
    let amounts = [];
    discount = discount.replace(/([\d.]+)\%/gm, (m, g) => {
        percentages.push(parseFloat(g));
        return ''
    }).replace(/([\d.]+)/gm, (m, g) => {
        amounts.push(parseFloat(g));
        return '';
    });
    percentages.forEach((percent) => {
        amount -= (amount * (percent / 100))
    });
    amounts.forEach((cut) => {
        amount -= cut;
    });
    console.log(Number(amount.toFixed(2)))
    return Number(amount.toFixed(2))
}

// discount(64, "50%, 50%") // 16
// // // You have to reduce with 50% twice.
// //
// // discount(24, "20, 2") // 2
// // // You have to subtract 20 and 2.
// //
// // discount(1000, '2%, 100, 50%, 16') // 374
// // // You have to figure out the order in which discounts are applied.
// // discount(12345, '4%, 21, 33.6%, 87, 3%, 80.62');

