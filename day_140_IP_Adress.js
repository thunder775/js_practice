function getValidIp(ipString, currentList) {

    if (currentList.length === 3) {
        if (Number(ipString) > 255) {
            return undefined;
        } else {
            if (ipString.length > 1 && ipString.charAt(0) === '0') {
                return undefined
            }
            if(ipString===''){
               return undefined
            }
            currentList.push(Number(ipString));
            return currentList;
        }
    }
    let result = [];

    for (let i = 1; i < 4; i++) {
        let currentSublist = currentList.slice();
        let currentNumber = Number(ipString.substring(0, i));
        if (ipString.substring(0, i).length > 1 && ipString.charAt(0) === '0') {
            continue
        }
        if (currentNumber <= 255) {
            currentSublist.push(currentNumber);
        } else {
            continue;
        }
        let toAddList = getValidIp(ipString.substring(i), currentSublist);
        if (toAddList !== undefined) {
            result.push(...toAddList);
        }
    }
    return result.length === 0 ? undefined : result;
}

function restoreIpAddresses(ip) {
    let result = getValidIp(ip, []);
    let toReturn = [];
    let temp = [];
    for (let i = 0; i < result.length; i++) {
        temp.push(result[i]);
        if (temp.length === 4) {
            let tempString = '';
            for (let j = 0; j < temp.length; j++) {
                tempString += temp[j].toString();
                if (j !== 3) {
                    tempString += '.'
                }

            }
            toReturn.push(tempString);
            temp = [];
        }

    }
    console.log(result.length);
    return toReturn
}


console.log(restoreIpAddresses("010010"));
console.log(restoreIpAddresses("25525511135"));



