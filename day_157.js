function corporateFlights(flights = [], booking = [[]]) {
    let seatsArray = Array(flights.length).fill(0);
    booking.forEach(([i, j, k]) => {
        for (let x = i; x <= j; x++) {
            seatsArray[x] += k;
        }
    })
    return seatsArray.map((val, index) => [flights[index], val]);
}

console.log(corporateFlights(['A', 'B', 'C', 'D', 'E', 'F', 'G'], [[0, 1, 10], [1, 2, 20], [1, 4, 25], [5, 6, 25]]));