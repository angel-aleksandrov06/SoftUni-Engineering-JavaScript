function autoEngineeringCompany(input) {
    let cars = new Map();

    for (const line of input) {
        let lineArgs = line.split(" | ");
        let brand = lineArgs[0];
        let model = lineArgs[1];
        let count = Number(lineArgs[2]);

        if (!cars.get(brand)) {
            cars.set(brand, new Map());
        }

        if (!cars.get(brand).get(model)) {
            cars.get(brand).set(model, 0);
        }
        cars.get(brand).set(model, cars.get(brand).get(model) + count);
    }

    for (const [brand, modelsCount] of cars) {
        console.log(brand);

        for (const [model, count] of modelsCount) {
            console.log(`###${model} -> ${count}`)
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);