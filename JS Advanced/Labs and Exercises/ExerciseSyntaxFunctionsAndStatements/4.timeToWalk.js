function timeToWalk(steps, footprintInMeters, speedKmh) {

    let distance = steps * footprintInMeters;
    let restsInMinutes = Math.floor(distance / 500);
    let time = distance / speedKmh / 1000 * 60;
    let totalTimeinSeconds = Math.ceil((time + restsInMinutes) * 60);
    let resultInDateFormat = new Date(null, null, null, null, null, totalTimeinSeconds);
    let result = resultInDateFormat.toTimeString().split(" ")[0];

    console.log(result)
}

timeToWalk(4000, 0.60, 5)