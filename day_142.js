function difCiph(input) {
    if (typeof input === "string") {
        let lastCharCode;
        return input.split('').map((char, index) => {
            if (index === 0) {
                lastCharCode = char.charCodeAt(0)
                return char.charCodeAt(0)
            } else {
                let diff = char.charCodeAt(0) - lastCharCode;
                lastCharCode = char.charCodeAt(0);
                return diff;
            }
        });
    } else {
        let lastCharCode = 0;
        return input.map((char, index) => {
            let currentChar = index === 0 ? String.fromCharCode(char) : String.fromCharCode(char + lastCharCode);
            lastCharCode += char;
            return currentChar;
        }).join('');
    }
}
//
console.log(difCiph("Hello"));
// console.log(difCiph("Sunshine"));
console.log(difCiph([ 72, 29, 7, 0, 3 ]))
// console.log(difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]))
// console.log(difCiph([]))
// console.log(difCiph(''))
