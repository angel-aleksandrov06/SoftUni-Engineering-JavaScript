function sort(inputArr, argument) {
    inputArr.sort((a, b) => {
        return argument === "asc" ? (Number(a) - b) : (Number(b) - a);
    })

    return inputArr;
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));