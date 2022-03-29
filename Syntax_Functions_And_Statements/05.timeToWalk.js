function timeToWalk(steps, stepLength, speed) {

    let distanceInMeters = steps * stepLength;
    let breaks = Math.floor(distanceInMeters / 500);
    let speedPerMeters = speed * 1000
    let metersPerSecond = speedPerMeters / 60 / 60
    let secondsNeeded = distanceInMeters / metersPerSecond
    let totalseconds = Math.ceil(secondsNeeded + (breaks * 60))

    let result = new Date(totalseconds * 1000).toISOString().substr(11, 8);
    return result
}


console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));