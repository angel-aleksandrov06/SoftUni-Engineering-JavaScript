class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        let curCustomer = this.allCustomers.find((c) => c.personalId === customer.personalId)

        if (curCustomer !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        else {
            this.allCustomers.push(customer);
        }

        return customer;
    }

    depositMoney(personalId, amount) {

        let curCustomer = this.allCustomers.find((c) => c.personalId === personalId)

        if (curCustomer === undefined) {
            throw new Error('We have no customer with this ID!')
        }
        else {
            if (curCustomer.hasOwnProperty('totalMoney')) {
                curCustomer.totalMoney += amount;
                let index = curCustomer.transactions.length - 1;
                let transaction = {
                    number: curCustomer.transactions[index].number + 1,
                    names: [curCustomer.firstName, curCustomer.lastName],
                    amount: amount,
                    typeOfTransaction: 'made deposit of'
                }
                curCustomer.transactions.push(transaction)
            }
            else {
                curCustomer.totalMoney = amount;
                curCustomer.transactions = [];

                let transaction = {
                    number: 1,
                    names: [curCustomer.firstName, curCustomer.lastName],
                    amount: amount,
                    typeOfTransaction: 'made deposit of'
                }
                curCustomer.transactions.push(transaction);
            }
        }

        return `${curCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let curCustomer = this.allCustomers.find((c) => c.personalId === personalId)

        if (curCustomer === undefined) {
            throw new Error('We have no customer with this ID!')
        }
        else {
            
                if (curCustomer.totalMoney <= 0) {
                    throw new Error(`${curCustomer.firstName} ${curCustomer.lastName} does not have enough money to withdraw that amount!`);
                }
                else {
                    curCustomer.totalMoney -= amount;

                    let index = curCustomer.transactions.length - 1;
                    let transaction = {
                        number: curCustomer.transactions[index].number + 1,
                        names: [curCustomer.firstName, curCustomer.lastName],
                        amount: amount,
                        typeOfTransaction: 'withdrew'
                    }
                    curCustomer.transactions.push(transaction)
                }
        }

        return `${curCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let curCustomer = this.allCustomers.find((c) => c.personalId === personalId)

        if (curCustomer === undefined) {
            throw new Error('We have no customer with this ID!')
        }
        let sb ='';

        sb += `Bank name: ${this._bankName}\n`;
        sb += `Customer name: ${curCustomer.firstName} ${curCustomer.lastName}\n`;
        sb += `Customer ID: ${personalId}\n`;
        sb += `Total Money: ${curCustomer.totalMoney}$\n`;
        sb += `Transactions:\n`;
        let curTransactions = curCustomer.transactions.sort(function(a,b) {
            return b.number - a.number;
        })

        for (const tr of curTransactions) {
            sb+= `${tr.number}. ${tr.names[0]} ${tr.names[1]} ${tr.typeOfTransaction} ${tr.amount}$!\n`
        }

        return sb.trim();
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));


bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);


console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

