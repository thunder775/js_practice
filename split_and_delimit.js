function splitAndDelimit(string = '', interval = 1, delimiter = '') {
    let iterator = 0;
    for (let i = 0; i < string.length; i++) {
        if (iterator === interval) {
            string = string.substring(0, i) + delimiter + string.substring(i, string.length)
            iterator = 0;
        }else{
        iterator++;}
    }
    console.log(string)
    return string
}
splitAndDelimit("bellow", 2, "&") //➞ "be&ll&ow"

splitAndDelimit("magnify", 3, ":")// ➞ "mag:nif:y"

splitAndDelimit("poisonous", 2, "~")// ➞ "po~is~on~ou~s"