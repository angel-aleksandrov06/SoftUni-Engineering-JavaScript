function solve(inputArr, inputString) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return inputArr.reduce((acc, line) => {
        let [destionation, price, status] = line.split("|");

        let ticket = new Ticket(destionation, price, status);

        acc.push(ticket);

        return acc;
    }, []).sort((a,b) => {
        if(typeof a[inputString] === 'string'){
            return a[inputString].localeCompare(b[inputString]);
        }
        else {
            return a[inputString] - b[inputString];
        }
    })
}