function solve(arg) {
    if(typeof(arg) === 'number'){
        return (Math.PI * (arg**2)).toFixed(2);
    }
    else {
        return `We can not calculate the circle area, because we receive a ${typeof arg}.`;
    }
}

console.log(solve("name"));