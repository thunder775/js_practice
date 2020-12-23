function isTrick(cards = [{}]) {
    const colors = [cards[0].color, cards[1].color, cards[2].color,];
    const numbers = [cards[0].number, cards[1].number, cards[2].number,];
    const shade = [cards[0].shade, cards[1].shade, cards[2].shade,];
    const shape = [cards[0].shape, cards[1].shape, cards[2].shape,];
    let validPropsCount = 0;
    validPropsCount += isAValidProperty(colors);
    validPropsCount += isAValidProperty(numbers);
    validPropsCount += isAValidProperty(shade);
    validPropsCount += isAValidProperty(shape);
    console.log(validPropsCount === 4)
    return validPropsCount === 4

}

function isAValidProperty(propArray = []) {
    const propSet = new Set(propArray)
    return propSet.size === 1 || propSet.size === 3
}


isTrick([
    {color: "green", number: 1, shade: "empty", shape: "squiggle"},
    {color: "green", number: 2, shade: "empty", shape: "diamond"},
    {color: "green", number: 3, shade: "empty", shape: "oval"}
])
// ➞ true

isTrick([
    {color: "purple", number: 1, shade: "full", shape: "oval"},
    {color: "green", number: 1, shade: "full", shape: "oval"},
    {color: "red", number: 1, shade: "full", shape: "oval"}
])
// ➞ true

isTrick([
    {color: "purple", number: 3, shade: "full", shape: "oval"},
    {color: "green", number: 1, shade: "full", shape: "oval"},
    {color: "red", number: 3, shade: "full", shape: "oval"}
])
// ➞ false
isTrick([
    {color: "red", number: 1, shade: "empty", shape: "squiggle"},
    {color: "red", number: 2, shade: "lined", shape: "diamond"},
    {color: "red", number: 3, shade: "full", shape: "oval"}
])
// ➞ true
isTrick([
    {color: "red", number: 1, shade: "empty", shape: "squiggle"},
    {color: "red", number: 2, shade: "lined", shape: "diamond"},
    {color: "purple", number: 3, shade: "full", shape: "oval"}
])
// ➞ false
console.log(new Set(["green", "green", "green"]).size)
console.log(new Set().add(1))