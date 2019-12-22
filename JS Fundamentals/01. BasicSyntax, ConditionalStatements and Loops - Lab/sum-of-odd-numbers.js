function solve(n) {
    let number = 0;
    let counter = 0;
    let sum = 0;
    while (true) {
        number++;
        if (number % 2 == 1){
            console.log(number);
            counter++;
            sum+=number;
        }
        if (counter == n){
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}