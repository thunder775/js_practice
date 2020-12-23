class BookingCalendar {
    constructor(rate = 1) {
        this.workingMins = 0;
        this.minRate = (rate / 60);
        this.booking = [];
    }

    book(time1 = '10:10', time2 = '11:20') {
        let mins1 = this.getMins(time1)
        let mins2 = this.getMins(time2)
        for (let [start, end] of this.booking) {
            if ((mins1 < end && mins1 > start) || (mins2 > start && mins2 < end)) {
                return false;
            }
        }
        this.booking.push([mins1, mins2])
        this.workingMins += (mins2 - mins1);
        return true;
    }

    getMins(time) {
        return time.split(':').map((val, index) => index === 0 ? (Number(val) * 60) : Number(val)).reduce((a, b) => a + b);
    }

    earnings() {
        return (this.workingMins * this.minRate);
    }
}

let bookings = new BookingCalendar(600);
console.log(bookings.book('10:10', '11:20')); // returns true
console.log(bookings.book('11:15', '12:25')); // returns false
console.log(bookings.book('11:20', '12:30')); // returns true
console.log(bookings.earnings()) // should return 1300 because total hours worked is 2hr 10 mins.
