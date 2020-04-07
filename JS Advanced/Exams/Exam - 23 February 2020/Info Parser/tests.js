let Parser = require("./solution.js");
let assert = require("chai").assert;

describe("Parser CHECK", () => {

    let actual;
    let expected;
    let myClass;

    beforeEach(() => {
        actual = '';
        expected = '';
        myClass = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
    })

    describe("Constructor CHECK", () =>{
        it("_data parser values", () => {
            actual = myClass._data;
            expected = JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            assert.deepEqual(actual, expected)
        })
        it("_log parser values", () => {
            actual = myClass._log;
            expected = [];
            assert.deepEqual(actual, expected)
        })
        it("_addToLog parser", () => {
            actual = myClass._addToLog;
            expected = 'function'
            assert.typeOf(actual, expected)
        })
        // it("_addToLog parser values", () => {
        //     actual = myClass._addToLog('command')
        //     expected = 'Added to log';
        //     assert.equal(actual, expected)
        // })
        // it("_log length", () => {
        //     myClass._addToLog('command')
        //     actual = myClass._log.length
        //     expected = 1;
        //     assert.equal(actual, expected)
        // })
        // it("_log first element", () => {
        //     myClass._addToLog('command')
        //     actual = myClass._log[0]
        //     expected = `0: command`;
        //     assert.equal(actual, expected)
        // })
    })

    describe("addEntries CHECK", () =>{
        it("check by _data", () => {
            myClass.addEntries("Steven:tech-support Edd:administrator")
            actual = myClass._data;
            expected = JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"},{"Steven":"tech-support"},{"Edd":"administrator"} ]');
            assert.deepEqual(actual, expected)
        })
        it("return check", () => {
            actual = myClass.addEntries("Steven:tech-support Edd:administrator");
            expected = "Entries added!";
            assert.deepEqual(actual, expected)
        })
        it("check by _log", () => {
            myClass.addEntries("Steven:tech-support Edd:administrator");
            actual = myClass._log;
            expected = ["0: addEntries"];
            assert.deepEqual(actual, expected)
        })
        // it("data return check", () => {
        //     actual = myClass.addEntries("");
        //     expected = "Entries added!";
        //     assert.deepEqual(actual, expected)
        //     assert.deepEqual(myClass._log[0], `0: addEntries`)
        // })
    })

    describe("removeEntry CHECK", () =>{
        it("removeEntry check by _data", () => {
            myClass.removeEntry('Kate');
            actual = myClass._data;
            expected = JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR", "deleted": true} ]');
            assert.deepEqual(actual, expected)
        })
        it("removeEntry should thrown an Error", () => {
            assert.throw(() => myClass.removeEntry('Katen'),"There is no such entry!")
        })
        it("removeEntry check by _log", () => {
            myClass.removeEntry('Kate');
            actual = myClass._log;
            expected = ["0: removeEntry"];
            assert.deepEqual(actual, expected)
        })
        it("removeEntry return", () => {
            
            actual = myClass.removeEntry('Kate');
            expected = "Removed correctly!";
            assert.deepEqual(actual, expected)
        })
        // it("removeEntry check property 'deleted'", () => {
        //     myClass.removeEntry('Kate');
        //     actual = myClass._data.find((x)=> x.hasOwnProperty("Kate"))["deleted"];
        //     expected = true;
        //     assert.equal(actual, expected)
        // })
        // it("removeEntry check _log.length", () => {
        //     myClass.removeEntry('Kate');
        //     actual = myClass._log.length;
        //     expected = 1;
        //     assert.equal(actual, expected)
        // })
    })

    describe("print CHECK", () =>{
        it("check by _log", () => {
            myClass.print();
            actual = myClass._log;
            expected = ["0: print"]
            assert.deepEqual(actual, expected)
        })
        it("check return", () => {
            ;
            actual = myClass.print();
            expected = `id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR`;
            assert.deepEqual(actual, expected)
        })
    })

    describe("data CHECK", () =>{
        it("check by _log", () => {
            myClass.data
            actual = myClass._log;
            expected = ["0: getData"]
            assert.deepEqual(actual, expected)
        })
        it("check return", () => {
            actual = myClass.data
            expected = [ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ];
            assert.deepEqual(actual, expected)
        })
        it("check remove and return", () => {
            myClass.removeEntry("Nancy")
            actual = myClass.data
            expected = [ {"John":"developer"},{"Kate": "HR"} ];
            assert.deepEqual(actual, expected)
        })
    })
});