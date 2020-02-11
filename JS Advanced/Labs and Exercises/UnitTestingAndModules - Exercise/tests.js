let isOddOrEven = require('./2.evenOrOdd');
let lookupChar = require('./3.charLookup');
let mathEnforcer = require('./4.mathEnforcer');
let StringBuilder = require('./5.stringBuilder');
let PaymentPackage = require('./6.paymentPackage');
let assert = require('chai').assert;


// 2.evenOrOdd

describe('isOddOrEven() behavior', () => {

    it('check the type of the input - boolean case', () => {
        let result = isOddOrEven(false);
        assert.equal(result, undefined, "the result is not undefined")

    });

    it('check the string - even case', () => {
        let result = isOddOrEven('testingg');
        assert.equal(result,'even', "the result is not even");
    });

    it('check the string - odd case', () => {
        let result = isOddOrEven('testing');
        assert.equal(result,'odd', "the result is not odd");
    });
});

// 3. charLookup

describe('charLookup() behavior ', () => {

    it('Testing first argument - Number type', () => {
        let result = lookupChar(5,5);
        assert.equal(result, undefined, "the result is not undefined")
    });

    it('Testing second argument - bool type', () => {
        let result = lookupChar("random",true);
        assert.equal(result, undefined, "the result is not undefined")
    });

    it('Testing second argument - double type', () => {
        let result = lookupChar("random", 2.5);
        assert.equal(result, undefined, "the result is not undefined")
    });

    it('Testing string.length - < index', () => {
        let result = lookupChar("random", 7);
        assert.equal(result, "Incorrect index", "the result is not \"Incorredct index\"")
    });
    it('Testing string.length - = index', () => {
        let result = lookupChar("random", 6);
        assert.equal(result, "Incorrect index", "the result is not \"Incorredct index\"")
    });

    it('Testing string.length - 0 > index', () => {
        let result = lookupChar("random", -1);
        assert.equal(result, "Incorrect index", "the result is not \"Incorredct index\"")
    });

    it('Function shoult Work correctly', () => {
        let result = lookupChar("random", 2);
        assert.equal(result, "n", "the result is not correct")
    });
});

// 4.mathEnforcer

describe('mathEnforcer. behavior ', () => {

    let actualResult;
    let expectedResult;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
    });

    describe("addFive", () => {
        it('check with invalid arg', () => {
            actualResult = mathEnforcer.addFive([1,2,3]);
            expectedResult = undefined;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with valid arg', () => {
            actualResult = mathEnforcer.addFive(3);
            expectedResult = 8;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with negative arg', () => {
            actualResult = mathEnforcer.addFive(-10);
            expectedResult = -5;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with floating arg', () => {
            actualResult = mathEnforcer.addFive(5.5);
            expectedResult = 10.5;
    
            assert.equal(actualResult,expectedResult, "");
        });
    })

    describe("subtractTen", () => {
        it('check with invalid arg', () => {
            actualResult = mathEnforcer.subtractTen({key: "value"});
            expectedResult = undefined;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with valid arg', () => {
            actualResult = mathEnforcer.subtractTen(20);
            expectedResult = 10;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with floating arg', () => {
            actualResult = mathEnforcer.subtractTen(20.5);
            expectedResult = 10.5;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with negative floating arg', () => {
            actualResult = mathEnforcer.subtractTen(-20.5);
            expectedResult = -30.5;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with negative arg', () => {
            actualResult = mathEnforcer.subtractTen(-5);
            expectedResult = -15;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with 0 arg', () => {
            actualResult = mathEnforcer.subtractTen(0);
            expectedResult = -10;
    
            assert.equal(actualResult,expectedResult, "");
        });
    })

    describe("sum", () => {
        it('check with invalid first arg', () => {
            actualResult = mathEnforcer.sum("vsfv",5);
            expectedResult = undefined;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with invalid second arg', () => {
            actualResult = mathEnforcer.sum(5, [1,5]);
            expectedResult = undefined;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with invalid both arg', () => {
            actualResult = mathEnforcer.sum(true, [1,5]);
            expectedResult = undefined;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with valid second arg is floating arg', () => {
            actualResult = mathEnforcer.sum(20,10.5);
            expectedResult = 30.5;
    
            assert.equal(actualResult,expectedResult, "");
        });
        
        it('check with first arg -5', () => {
            actualResult = mathEnforcer.sum(-5,10);
            expectedResult = 5;
    
            assert.equal(actualResult,expectedResult, "");
        });

        it('check with both arg floating', () => {
            actualResult = mathEnforcer.sum(5.5,10.2);
            expectedResult = 15.7;
    
            assert.equal(actualResult,expectedResult, "");
        });
    })

    describe("object type check", () => {
        it('', () => {
            assert.isObject(mathEnforcer);
        });
    })
});

// 5.stringBuilder

describe("StringBuilder() behavior", () => {

    let actualResult;
    let expectedResult;
    let sb;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        sb = new StringBuilder();
    });

    describe("constructor() Check", () => {

        it("without param", () => {
            actualResult = new StringBuilder();
            expectedResult = [];

            assert.deepEqual(expectedResult, actualResult._stringArray);
        });

        it("with param", () => {
            actualResult = new StringBuilder('some');
            expectedResult = ["s", "o", "m", "e"];

            assert.deepEqual(expectedResult, actualResult._stringArray);
        });

        it("with param number", () => {
            assert.throw(() => new StringBuilder(5), 'Argument must be string');
        });
    });

    describe("append() Check", () => {

        it("with valid string and empty constructor", () => {
            sb.append("123");
            actualResult = sb._stringArray;
            expectedResult = ["1", "2", "3"];

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with valid string", () => {
            sb = new StringBuilder("123")
            sb.append("890");
            actualResult = sb._stringArray;
            expectedResult = ["1", "2", "3", "8", "9", "0"];

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with empty string", () => {
            sb = new StringBuilder("123")
            sb.append("");
            actualResult = sb._stringArray;
            expectedResult = ["1", "2", "3"];

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with invalid arg", () => {
            sb = new StringBuilder("123");

            assert.throw(() => sb.append(5), 'Argument must be string');
        });
    });

    describe("remove() Check", () => {

        it("splice with 0 and 3", () => {
            sb = new StringBuilder("12345");
            sb.remove(0, 3)
            actualResult = sb._stringArray;
            expectedResult = ["4", "5"];

            assert.deepEqual(expectedResult, actualResult);
        });

        it("splice with 0 and 3", () => {
            sb = new StringBuilder("12345");
            sb.remove(-1, 3)
            actualResult = sb._stringArray;
            expectedResult = ["1", "2", "3", "4"];

            assert.deepEqual(expectedResult, actualResult);
        });
    });

    describe("prepend() Check", () => {

        it("with valid string and empty constructor", () => {
            sb.prepend("123");
            actualResult = sb._stringArray;
            expectedResult = ["1", "2", "3"];

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with valid string", () => {
            sb = new StringBuilder("asd");
            sb.prepend("123");
            actualResult = sb._stringArray;
            expectedResult = ["1", "2", "3", "a", "s", "d"];

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with valid string", () => {
            sb = new StringBuilder("asd");
            sb.prepend("0");
            actualResult = sb._stringArray;
            expectedResult = ["0", "a", "s", "d"];

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with invalid data", () => {
            sb = new StringBuilder("str");
            assert.throw(() => sb.prepend(5), 'Argument must be string')
        });
    });

    describe("insertAt() Check", () => {

        it("with valid single data", () => {
            sb = new StringBuilder("asd");
            sb.insertAt("9", 1);
            actualResult = sb._stringArray;
            expectedResult = ["a", "9", "s", "d"]

            assert.deepEqual(expectedResult, actualResult)
        });

        it("with valid multiply data", () => {
            sb = new StringBuilder("asd");
            sb.insertAt("92", 1);
            actualResult = sb._stringArray;
            expectedResult = ["a", "9", "2", "s", "d"]

            assert.deepEqual(expectedResult, actualResult)
        });

        it("with valid single data and empty constructor", () => {
            sb.insertAt("92", 1);
            actualResult = sb._stringArray;
            expectedResult = ["9", "2"];

            assert.deepEqual(expectedResult, actualResult)
        });

        it("with valid single data and empty constructor", () => {
            sb.insertAt("92", 100);
            actualResult = sb._stringArray;
            expectedResult = ["9", "2"];

            assert.deepEqual(expectedResult, actualResult)
        });

        it("with valid string and empty constructor", () => {
            assert.throw(() => sb.insertAt(false), 'Argument must be string');
        });

        it("invalid param, should Throw error", () => {
            sb = new StringBuilder("pompa")
            assert.throw(() => sb.insertAt(4, 4), 'Argument must be string');
        });
    });

    describe("toString() Check", () => {

        it("static method", () => {
            assert.throw(() => StringBuilder._vrfyParam(5));
        });
    });

    describe("toString() Check", () => {

        it("with empty array", () => {
            actualResult = sb.toString();
            expectedResult = "";

            assert.equal(expectedResult, actualResult)
        });

        it("with empty array", () => {
            sb = new StringBuilder("123");
            sb.append("4");
            actualResult = sb.toString();
            expectedResult = "1234";

            assert.deepEqual(expectedResult, actualResult)
        });

        it("is OK", () => {
            sb = new StringBuilder("123");
            sb.append("4");
            actualResult = sb.toString();
            expectedResult = "1234";

            assert.isOk(actualResult)
        });
    });

    describe("Type of StringBuilder Check", () => {

        it("StringBuilder exist", () => {
            assert.exists(StringBuilder)
        });

        it("StringBuilder type", () => {
            assert.equal(typeof StringBuilder, "function");
        });

        it("should have properties", () => {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        });

        it("full test", () => {
            sb = new StringBuilder("hello");
            sb.append(', there');
            sb.prepend('User, ');
            sb.insertAt('woop', 5);
            sb.remove(6, 3);

            assert.equal(sb.toString(), "User,w hello, there");
        })
    });
});

// 6.paymentPackage

describe("PaymentPackage() behavior", () => {

    let actualResult;
    let expectedResult;
    let pp;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        pp = new PaymentPackage("boss", 5);
    });

    describe("constructor() Check", () => {

        it("check prop name with valid param", () => {
            pp = new PaymentPackage("boss", 5);
            actualResult = pp.name;
            expectedResult = "boss";

            assert.deepEqual(expectedResult, actualResult);
        });

        it("check prop value with valid param", () => {
            pp = new PaymentPackage("boss", 5);
            actualResult = pp.value;
            expectedResult = 5;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("check prop value with valid param", () => {
            pp = new PaymentPackage("boss", 0);
            actualResult = pp.value;
            expectedResult = 0;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("check prop VAT with valid param", () => {
            pp = new PaymentPackage("boss", 0);
            actualResult = pp.VAT;
            expectedResult = 20;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("check prop active with valid param", () => {
            pp = new PaymentPackage("boss", 0);
            actualResult = pp.active;
            expectedResult = true;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("should Throw error ivalid type of input name", () => {
            assert.throw(() => new PaymentPackage(true, 5), "Name must be a non-empty string");
            assert.throw(() => new PaymentPackage("", 5), "Name must be a non-empty string");
            assert.throw(() => new PaymentPackage(5, 5), "Name must be a non-empty string");
        });

        it("should Throw error ivalid type of input value", () => {
            assert.throw(() => new PaymentPackage("true", "ivan"), "Value must be a non-negative number");
            assert.throw(() => new PaymentPackage("Ivan", -10), "Value must be a non-negative number");
        });
    });

    describe("prop name() Check", () => {

        it("with valid param", () => {
            pp.name = "ganio";
            actualResult = pp.name;
            expectedResult = "ganio";

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with invalid param (\"\")", () => {
            assert.throw(() => pp.name = "");
        });

        it("with invalid param (type array)", () => {
            assert.throw(() => pp.name = []);
        });
    });

    describe("prop value() Check", () => {

        it("with valid param (20)", () => {
            pp.value = 20;
            actualResult = pp.value;
            expectedResult = 20;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with valid param (0)", () => {
            pp.value = 0;
            actualResult = pp.value;
            expectedResult = 0;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with invalid param (type string)", () => {
            assert.throw(() => pp.value = "",'Value must be a non-negative number');
        });
        
        it("with invalid param ( -40 )", () => {
            assert.throw(() => pp.value = -40,'Value must be a non-negative number');
        });
    });

    describe("prop VAT() Check", () => {

        it("with valid param (20)", () => {
            pp.VAT = 20;
            actualResult = pp.VAT;
            expectedResult = 20;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with valid param (20.1)", () => {
            pp.VAT = 20.1;
            actualResult = pp.VAT;
            expectedResult = 20.1;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with valid param (0)", () => {
            pp.VAT = 0;
            actualResult = pp.VAT;
            expectedResult = 0;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with invalid param (string)", () => {
            assert.throw(() => pp.VAT = "",'VAT must be a non-negative number');
        });

        it("with invalid param (-3)", () => {
            assert.throw(() => pp.VAT = -3 ,'VAT must be a non-negative number');
        });

        it("with invalid param (undefined)", () => {
            assert.throw(() => pp.VAT = undefined ,'VAT must be a non-negative number');
        });
    });

    describe("prop active() Check", () => {

        it("with valid param (fasle)", () => {
            pp.active = false;
            actualResult = pp.active;
            expectedResult = false;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("with invalid param (number)", () => {
            assert.throw(() => pp.active = 5.5, "Active status must be a boolean");
        });

        it("with invalid param (string)", () => {
            assert.throw(() => pp.active = "true", "Active status must be a boolean");
        });
    });

    describe("method toString() Check", () => {

        it("", () => {
            actualResult = pp.toString()
            expectedResult = 'Package: boss\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6';

            assert.deepEqual(expectedResult, actualResult);
        });

        it("", () => {
            pp.active = false;
            pp.VAT = 10;
            actualResult = pp.toString()
            expectedResult = 'Package: boss (inactive)\n- Value (excl. VAT): 5\n- Value (VAT 10%): 5.5';

            assert.deepEqual(expectedResult, actualResult);
        });
    });

    describe("Type of PaymentPackage Check", () => {

        it("PaymentPackage exist", () => {
            assert.exists(PaymentPackage)
        });

        it("StringBuilder type", () => {
            assert.equal(typeof PaymentPackage, "function");
        });

        it("should have properties", () => {
            assert.isFunction(PaymentPackage.prototype.toString);
        });
    });
});