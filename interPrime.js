function interprime(num = 0) {
    if (num === 0 || isPrime(num)) return [];
    let prevPrime = num - 1;
    while (!isPrime(prevPrime) && prevPrime > 0) {
        prevPrime--;
    }
    let nextPrime = num + 1;
    while (!isPrime(nextPrime)) {
        nextPrime++;
    }
    return num - prevPrime === nextPrime - num ? [prevPrime, nextPrime] : [];
}

function isPrime(num = 1) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i < Math.ceil(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(interprime(6));
// console.log(interprime(9));
// console.log(interprime(8));
console.log(interprime(373));