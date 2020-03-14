function solve({ model, power, color, carriage, wheelsize }) {

    let posibilities = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    return fullfillOrder = {
        model,
        engine: posibilities.find((p) => power <= p.power),
        carriage: {type: carriage, color},
        wheels: Array(4).fill(wheelsize % 2 === 0 ? wheelsize-1 : wheelsize) 
    };
}

solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
)