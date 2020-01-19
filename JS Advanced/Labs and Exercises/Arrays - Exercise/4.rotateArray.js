function rotateArray(arr = []) {
    let rotations = +arr.pop()%arr.length;
    let result = arr.splice(arr.length-rotations, rotations);
    result = result.concat(arr);
    console.log(result.join(" "));
}