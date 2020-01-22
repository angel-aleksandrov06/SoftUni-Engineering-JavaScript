function solve(input = []) {
    let result = {};
    let juice = {};

    for (let i = 0; i < input.length; i++) {
        let currentString = input[i].split(" => ");

        if (result[currentString[0]]) {
            result[currentString[0]] = result[currentString[0]] + Number(currentString[1]);
        }
        else {
            result[currentString[0]] = Number(currentString[1]);
        }

        let bottleQ = Math.floor(result[currentString[0]] / 1000);

        if (bottleQ > 0) {
            juice[currentString[0]] = bottleQ;
        }
    }
     let finalResult = Object.entries(juice);

     for (let i = 0; i < finalResult.length; i++) {
         console.log(finalResult[i].join('=>'));
     }
}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));