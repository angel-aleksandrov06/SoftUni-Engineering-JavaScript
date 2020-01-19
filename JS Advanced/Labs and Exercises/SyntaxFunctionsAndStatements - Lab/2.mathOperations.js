function solve (...params) {
    return params.reduce(
        (a, b) => eval(`${a}${params.pop()}${b}`),
        params.shift()
        );
}

console.log(
    solve("-", 10, 2, 3, 4)
)