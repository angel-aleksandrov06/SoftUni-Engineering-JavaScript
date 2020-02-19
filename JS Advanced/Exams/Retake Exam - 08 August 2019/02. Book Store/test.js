let assert = require('chai').assert;
let BookStore = require('./02. Book Store_Ресурси');


describe("BookStore() behavior", () => {

    let actualResult;
    let expectedResult;
    let bs;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        bs = new BookStore("Gosho");
    });

    describe('Constructor() behavior', () => {
        it('test constructor with books', () => {
            actualResult = bs.books;
            expectedResult = [];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test constructor with movieCollection', () => {
            actualResult = bs._workers;
            expectedResult = [];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test constructor with name', () => {
            actualResult = bs.name;
            expectedResult = "Gosho";
            assert.equal(actualResult, expectedResult);
        });
    });

    describe('get workers behavior', () => {
        it('test workers', () => {
            actualResult = bs.workers;
            expectedResult = [];
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('stockBooks() behavior', () => {
        it('test stockBooks with books', () => {
            bs.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            actualResult = bs.books;
            expectedResult = [
                  {
                    "author": "Dan Braun",
                    "title": "Inferno"
                  },
                  {
                    "author": "J.Rowling",
                    "title": "Harry Potter"
                  },
                  {
                    "author": "Hariet Stow",
                    "title": "Uncle Toms Cabin"
                  },
                  {
                    "author": "Upton Sinclear",
                    "title": "The Jungle"
                  }
                ];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test stockBooks with books', () => {
            actualResult = bs.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            expectedResult = [
                  {
                    "author": "Dan Braun",
                    "title": "Inferno"
                  },
                  {
                    "author": "J.Rowling",
                    "title": "Harry Potter"
                  },
                  {
                    "author": "Hariet Stow",
                    "title": "Uncle Toms Cabin"
                  },
                  {
                    "author": "Upton Sinclear",
                    "title": "The Jungle"
                  }
                ];
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('hire() behavior', () => {
        it('test hire with Ivan', () => {
            bs.hire("Ivan", "rob");
            actualResult = bs.workers;
            expectedResult = [
                {
                    name: "Ivan",
                position: "rob",
                booksSold: 0
                }
            ];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test hire with Ivan', () => {
            actualResult = bs.hire("Ivan", "rob");
            expectedResult = "Ivan started work at Gosho as rob";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test hire with Ivan', () => {
            bs.hire("Ivan", "rob");
            assert.throw(() => bs.hire("Ivan", "rob"), "This person is our employee");
        });
    });

    describe('fire() behavior', () => {
        it('test fire with Ivan', () => {
            bs.hire("Ivan", "rob");
            actualResult = bs.fire("Ivan");
            expectedResult = "Ivan is fired";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test fire with Pesho', () => {
            bs.hire("Ivan", "rob");
            assert.throw(() => bs.fire("Pesho", "rob"), "Pesho doesn't work here");
        });
        it('test fire with Ivan', () => {
            bs.hire("Ivan", "rob");
            bs.fire("Ivan");
            actualResult = bs.workers;
            expectedResult = [];
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('sellBook() behavior', () => {
        it('test sellBook with srala i zaspala', () => {
            bs.hire("Ivan", "rob");
            assert.throw(() => bs.sellBook("srala i zaspala", "Ivan"), "This book is out of stock");
        });
        it('test sellBook with Inferno', () => {
            bs.hire("Ivan", "rob");
            bs.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            assert.throw(() => bs.sellBook("Inferno", "Pesho"), "Pesho is not working here");
        });
        it('test sellBook with Inferno', () => {
            bs.hire("Ivan", "rob");
            bs.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            bs.sellBook("Inferno", "Ivan");
            actualResult = bs.workers[0].booksSold;
            expectedResult = 1;
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('printWorkers() behavior', () => {
        it('test printWorkers()', () => {
            bs.hire("Ivan", "rob");
            bs.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            bs.sellBook("Inferno", "Ivan");
            actualResult = bs.printWorkers();
            expectedResult = "Name:Ivan Position:rob BooksSold:1";
            assert.deepEqual(actualResult, expectedResult);
        });
    });
});