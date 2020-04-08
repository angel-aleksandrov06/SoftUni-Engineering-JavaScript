let { Repository } = require("./solution.js");
const assert = require('chai').assert;

describe("Repository", function () {

    let actual;
    let expected;
    let myClass;

    beforeEach(() => {
        actual = '';
        expected = '';
        myClass = new Repository({
            name: "string",
            age: "number",
            birthday: "object"
        });
    })

    describe("Constructor Check", function () {
        it("props", function () {
            actual = myClass.props;
            expected = 'object';
            assert.typeOf(actual,expected)
        });

        it("props", function () {
            actual = myClass.nextId;
            expected = 'function';
            assert.typeOf(actual,expected)
        });

        // it("props", function () {
        //     actual = myClass.nextId;
        //     expected = 1;
        //     assert.deepEqual(actual,expected)
        // });
        
    });

    describe("add Check", function () {
        it("", function () {
            assert.throw(() => myClass.add({
                nme: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), `Property name is missing from the entity!`)
        });
        it("", function () {
            assert.throw(() => myClass.add({
                name: true,
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), `Property name is not of correct type!`)
        });

        it("", function () {
            actual = myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            expected = 0;
            assert.equal(actual,expected)
        });

        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actual = myClass.data.get(0)
            expected = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.deepEqual(actual,expected)
        });
    });

    describe("getId Check", function () {
        it("throw", function () {
            assert.throw(() => myClass.getId(3), `Entity with id: 3 does not exist!`)
        });
        it("throw", function () {
            assert.throw(() => myClass.getId(-1), `Entity with id: -1 does not exist!`)
        });
        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actual = myClass.getId(0);
            expected = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.deepEqual(actual,expected);
        });
    });

    describe("count Check", function () {
        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actual = myClass.count;
            expected = 1;
            assert.deepEqual(actual,expected);
        });
    });

    describe("update Check", function () {
        
        it("throw", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            assert.throw(() => myClass.update(1, {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), `Entity with id: 1 does not exist!`)
        });
        it("throw", function () {
            assert.throw(() => myClass.update(3, {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), `Entity with id: 3 does not exist!`)
        });
        it("throw", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            assert.throw(() => myClass.update(0, {
                nme: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), `Property name is missing from the entity!`)
        });
        it("throw", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            assert.throw(() => myClass.update(0, {
                name: true,
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), `Property name is not of correct type!`)
        });
        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.update(0, {
                name: "Pesho1",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actual = myClass.data.get(0);
            expected = {
                name: "Pesho1",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.deepEqual(actual,expected);
        });
        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.update(0, {
                name: "Pesho1",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actual = myClass.data.get(0);
            expected = {
                name: "Pesho1",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.deepEqual(actual,expected);
        });
    });

    describe("del Check", function () {
        it("throw", function () {
            assert.throw(() => myClass.del(3), `Entity with id: 3 does not exist!`)
        });
        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.add({
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.del(0);
            actual = myClass.count;
            expected = 1;
            assert.deepEqual(actual,expected);
        });
        it("throw", function () {
            assert.throw(() => myClass.del(-1), `Entity with id: -1 does not exist!`)
        });

        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.add({
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.add({
                name: "sho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.del(0);
            actual = myClass.data.get(0);
            expected = undefined;
            assert.deepEqual(actual,expected);
        });
        it("", function () {
            myClass.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.add({
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.add({
                name: "sho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            myClass.del(1);
            actual = myClass.data.get(1);
            expected = undefined;
            assert.deepEqual(actual,expected);
        });
    });
});
