function nearestElement(target, numbers) {
    if(numbers.length===0){
        return null
    }
    let distances = [];
    for (let i = 0; i < numbers.length; i++) {
        distances.push([Math.abs(numbers[i] - target), i,numbers[i]])
    }
    distances.sort((a,b)=>(a[0]-b[0]));
    distances  = distances.filter((a)=>a[0]===distances[0][0]);
    distances.sort((a,b)=>(b[2]-a[2]));

    console.log(distances[0][1]);
    return  distances[0][1];

}
nearestElement(10, [1, 100, 1000]);
nearestElement(50, [100, 49, 51]);
nearestElement(-20, [-50, -10, -30]);
nearestElement(-20, []);
nearestElement(-20, [10,10,10,10]);