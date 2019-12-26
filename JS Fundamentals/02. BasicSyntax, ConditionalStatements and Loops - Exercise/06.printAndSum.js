function printAndSum(startNumber, endNumber) {

    let sum = 0;
    let sequence = '';

    for (let index = startNumber; index <= endNumber; index++) {
        
        sum += index;
        sequence += index + ' ';
    }

    console.log(sequence.trim());
    console.log(`Sum: ${sum}`);
}