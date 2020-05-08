let gather = (letter1) => {
    gather.value = letter1;
    let callGather = (letter2) => {
        gather.value += letter2;
        callGather.get = () => {
            return gather.value;
        };
        return callGather
    };
    let order = (index1) => {
        order.value = gather.value.charAt(index1);
        let callOrder = (index2) => {
            order.value += gather.value.charAt(index2);
            return callOrder;
        };
        callOrder.get = () => {
            return order.value;
        };
        return callOrder
    };
    callGather.order = order;
    return callGather;
};
console.log(gather("a").order(0).get()); // prints 'ab' to console

console.log(gather("hello")("arnav")('puri').get()); // prints 'helloarnav' to console
console.log(gather("a")("b")("c").order(0)(1)(2).get());// "abc"

console.log(gather("a")("b")("c").order(2)(1)(0).get()); // "cba"

console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()); // "hello!"