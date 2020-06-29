function timeToEat(time = '') {
    let hours = Number(time.split(':')[0]);
    let mins = Number(time.split(':')[1].split(' ')[0]);
    let isAm = time.split(':')[1].split(' ')[1].charAt(0) === 'a';
    let totalMins = 0;
    if (!isAm) {
        hours += 12;
    }
    totalMins += hours * 60 + mins;
    if (totalMins < 420) {
        totalMins = 420 - totalMins
    } else if (totalMins <= 720) {
        totalMins = 720 - totalMins
    } else if (totalMins < 1140) {
        totalMins = 1140 - totalMins
    } else {
        totalMins = 1440 - totalMins;
        totalMins += 420
    }
    console.log([Math.floor(totalMins / 60), totalMins % 60]);
    return [Math.floor(totalMins / 60), totalMins % 60];
}

// timeToEat("2:00 p.m.");
// timeToEat("7:50 a.m.");
// timeToEat("1:50 a.m.");
timeToEat("12:00 p.m.");
// console.log(7 * 60)
// console.log(12 * 60)
// console.log(19 * 60)
// console.log(24 * 60)
