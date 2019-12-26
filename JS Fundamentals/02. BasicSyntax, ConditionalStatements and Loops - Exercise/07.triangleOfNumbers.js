function solve(number) {
    let sequence = '';

    for (let index = 1; index <= number; index++) {
        for (let j = 1; j <= index; j++) {
            sequence += index+' ';
        }
        console.log(sequence.trim());
        sequence = '';
    }
}