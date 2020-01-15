function greatestCommonDivisor(number1, number2) {

    let copyA = number1;
    let copyB = number2;

    while (copyB !== 0) {
        [copyA, copyB] = [copyB, copyA % copyB]
    }

    console.log(copyA);
}