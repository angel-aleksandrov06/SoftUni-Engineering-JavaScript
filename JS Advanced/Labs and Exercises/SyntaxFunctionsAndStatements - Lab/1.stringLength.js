function solve(...params) {
    let sum = params.reduce((a, b) => a + b.length, 0);
    let avrg = Math.floor(sum / params.length);

    console.log(sum);
    console.log(avrg);
}

solve('chocolate', 'ice cream', 'cake');