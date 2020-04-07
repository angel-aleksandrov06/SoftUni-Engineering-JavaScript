const PizzUni = require('./pizzUni.js');
const assert = require('chai').assert;

describe('Describe wrapper', () => {

    let actual;
    let expected;
    let myClass;

    beforeEach(() => {
        actual = '';
        expected = '';
        myClass = new PizzUni();
    })
    
    describe('constructor CHECK', () => {
        it('registeredUsers property', () => {
            actual = myClass.registeredUsers;
            expected = [];
            assert.deepEqual(actual, expected, 'registeredUser property  !==');
        })
        it('availableProducts property', () => {
            actual = myClass.availableProducts;
            expected = {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            };
            assert.deepEqual(actual, expected, 'availableProducts property  !==');
        })
        it('orders property', () => {
            actual = myClass.orders;
            expected = [];
            assert.deepEqual(actual, expected, 'orders property  !==');
        })
    })

    describe('RegisterUser CHECK', () => {
        it('register user with already registered email', () => {
            myClass.registerUser('someEmail');
            assert.throw(() => myClass.registerUser('someEmail'), `This email addres (someEmail) is already being used!`)
        })
        it('register user length check', () => {
            myClass.registerUser('myEmail')
            actual = myClass.registeredUsers.length;
            expected = 1;
            assert.deepEqual(actual, expected, 'registeredUsers length is !==');
        })
        it('register user first element check', () => {
            myClass.registerUser('myEmail')
            actual = myClass.registeredUsers[0];
            expected = {
                email: 'myEmail',
                orderHistory: []
            };
            assert.deepEqual(actual, expected, 'registeredUsers first element is !==');
        })
        it('register user return check', () => {
            
            actual = myClass.registerUser('myEmail')
            expected = {
                email: 'myEmail',
                orderHistory: []
            };
            assert.deepEqual(actual, expected, 'registeredUsers return is !==');
        })
    })

    describe('makeAnOrder CHECK', () => {
        it('makeAnOrder with invalid email', () => {
            assert.throw(() => myClass.makeAnOrder('007', '123', '123'), `You must be registrered to make orders!`)
        })
        it('makeAnOrder with invalid pizza', () => {
            myClass.registerUser('007')
            assert.throw(() => myClass.makeAnOrder('007', '123', '123'), `You must order at least 1 pizza to finish the order.`)
        })
        it('makeAnOrder without drink', () => {
            myClass.registerUser('007')
            myClass.makeAnOrder('007', 'Barbeque Classic', '')
            actual = myClass.registeredUsers[0].orderHistory[0]
            expected = {
                orderedPizza: 'Barbeque Classic'
            }
            assert.deepEqual(actual, expected, 'makeAnOrdered currentUser.orderHistori !==')
        })
        it('makeAnOrder without drink', () => {
            myClass.registerUser('007')
            myClass.makeAnOrder('007', 'Barbeque Classic', '')
            actual = myClass.orders[0]
            expected = {
                orderedPizza: 'Barbeque Classic',
                email: '007',
                status: 'pending'
            }
            assert.deepEqual(actual, expected, 'makeAnOrdered not pushing currentOrder.')
        })
        it('makeAnOrder with drink', () => {
            myClass.registerUser('007')
            myClass.makeAnOrder('007', 'Barbeque Classic', 'Fanta')
            actual = myClass.orders[0]
            expected = {
                orderedPizza: 'Barbeque Classic',
                orderedDrink: 'Fanta',
                email: '007',
                status: 'pending'
            }
            assert.deepEqual(actual, expected, 'makeAnOrdered not pushing currentOrder.')
        })
        it('makeAnOrder returns', () => {
            myClass.registerUser('007')
            actual = myClass.makeAnOrder('007', 'Barbeque Classic', 'Fanta')
            expected = 0
            assert.equal(actual, expected, 'makeAnOrdered order index is !==')
        })
    })

    describe('detailsAboutMyOrder CHECK', () => {
        it('detailsAboutMyOrder with curect ID', () => {
            myClass.registerUser('007')
            myClass.makeAnOrder('007', 'Barbeque Classic', 'Fanta')
            actual = myClass.detailsAboutMyOrder(0)
            expected = `Status of your order: pending`
            assert.deepEqual(actual, expected, 'detailsAboutMyOrder currentId !==')
        })
    })

    describe('doesTheUserExist CHECK', () => {
        it('doesTheUserExist with curect email', () => {
            myClass.registerUser('007')
            actual = myClass.doesTheUserExist('007')
            expected = {
                email: '007',
                orderHistory: []
            };
            assert.deepEqual(actual, expected, 'doesTheUserExist email !==')
        })
        it('doesTheUserExist with curect email', () => {
            myClass.registerUser('007')
            actual = myClass.doesTheUserExist('005')
            expected = undefined
            assert.deepEqual(actual, expected, 'doesTheUserExist email !==')
        })
    })

    describe('completeOrder CHECK', () => {
        it('doesTheUserExist with curect email', () => {
            myClass.registerUser('007')
            myClass.makeAnOrder('007', 'Barbeque Classic', 'Fanta')
            actual = myClass.completeOrder();
            expected = {
                email: "007",
                orderedDrink: "Fanta",
                orderedPizza: "Barbeque Classic",
                status: "completed"
                }
            assert.deepEqual(actual, expected, 'doesTheUserExist email !==')
        })
    })
})