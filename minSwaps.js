function minimumSwaps(status) {
    // Write your code here
    let count = 0;
    status = status.split('');
    for (let i = 1; i < status.length; i++) {
        let prev = status.charAt(i - 1);
        let curr = status.charAt(i);
        if (prev === curr) {
            if (curr === "R") status[i] = "S";
            else status[i] = "R";
            count++;
        }
    }
    return count;
}