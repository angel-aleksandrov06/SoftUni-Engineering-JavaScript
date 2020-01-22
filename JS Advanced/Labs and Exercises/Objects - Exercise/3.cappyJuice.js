function solve(input = []) {

    let parsedInput = input
    .reduce((juiceAcc, juiceKVP) => {
        let [juiceName, quantity] = juiceKVP.split(" => ");

        if(juiceAcc.currentJuiceQuantity[juiceName]){
            juiceAcc.currentJuiceQuantity[juiceName] += +quantity;
        }
        else{
            juiceAcc.currentJuiceQuantity[juiceName] = +quantity;
        }

        let bottleQ = Math.floor(juiceAcc.currentJuiceQuantity[juiceName] / 1000);

        if(bottleQ >0 && !juiceAcc.completedJuices.includes(juiceName)){
            juiceAcc.completedJuices.push(juiceName );
        }

        return juiceAcc;

    }, {completedJuices:[], currentJuiceQuantity: {} })

    parsedInput.completedJuices.map(juice => {
        console.log(`${juice} => ${Math.floor(parsedInput.currentJuiceQuantity[juice] / 1000)}`)
    });
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);