function sameNumbers(a) {
    let number = a.toString().split('');
    let firstNumber = Number(number[0]);
    let isTrue = true;
    let sum = firstNumber;
    for (let index = 1; index < number.length; index++) {
        if(firstNumber != number[index]){
            isTrue = false;
        }
        sum+= Number(number[index]);
    }
    console.log(isTrue);
    console.log(sum)
}

sameNumbers(2222222);