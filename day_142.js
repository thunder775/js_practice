function difCiph(input) {
    let result = [];
    if (input.constructor === Array) {
        let lastCharCode = 0;
        result = input.map((char,index)=>{
            let currentChar = index===0?String.fromCharCode(char):String.fromCharCode(char+lastCharCode);
            lastCharCode+=char;
            return currentChar;
        });
        result = result.join('')
    } else {
        let lastCharCode = 0;
        input.split('').forEach((char, index) => {
            lastCharCode = input.charCodeAt(index-1);
            if (result.length === 0) {
                result.push(input.charCodeAt(index))
            } else {
                result.push(( input.charCodeAt(index)-lastCharCode ))
            }
        })
    }
   return result
}
//
// console.log(difCiph("Hello"));
// console.log(difCiph("Sunshine"));
console.log(difCiph([ 72, 29, 7, 0, 3 ]))
// console.log(difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]))
// console.log(difCiph([]))
// console.log(difCiph(''))
