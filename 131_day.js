let gather = (letter) => {
    gather.value += letter;
    return gather;
};
gather.value = '';
gather.get = () => {
    let temp = gather.value.slice();
    gather.value='';
    return temp
};
let order = (index) => {
    order.value += gather.value.charAt(index);
    return order;
};
order.value = '';
order.get = () => {
    let temp = order.value.slice();
    order.value='';
    gather.value='';
    return temp
};
gather.order = (index) => {
    order.value += gather.value.charAt(index);
    return order;
};
console.log(gather("e")("l")("o")("l")("!")("h").get());
console.log(gather('e')('l')('a').order(1)(0)(2).get());
