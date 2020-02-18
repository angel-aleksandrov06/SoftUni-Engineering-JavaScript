let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort() behavior', function () {
    
    let actualResult;
    let expectedResult;
    let sr;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        sr = new SkiResort("Gosho");
    });

    describe('Constructor() behavior', () => {
        it('test constructor', () => {
            actualResult = sr.name;
            expectedResult = "Gosho";
            assert.equal(actualResult, expectedResult);
        });
        it('test constructor', () => {
            actualResult = sr.voters;
            expectedResult = 0;
            assert.equal(actualResult, expectedResult);
        });
        it('test constructor with watched', () => {
            actualResult = sr.hotels;
            expectedResult = [];
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('getter bestHotel() behavior', () => {
        it('test bestHotel with noVoters', () => {
            actualResult = sr.bestHotel;
            expectedResult = "No votes yet";
            assert.equal(actualResult, expectedResult);
        });
        it('test bestHotel', () => {
            sr.voters = 1;
            sr.build("Gosho", 2);
            actualResult = sr.bestHotel;
            expectedResult = "Best hotel is Gosho with grade 0. Available beds: 2";
            assert.equal(actualResult, expectedResult);
        });
    });

    describe('build() behavior', () => {
        it('test build with string ("",5)', () => {
            assert.throw(() => sr.build("", 5),"Invalid input");
            assert.throw(() => sr.build("", 5),"Invalid input");
        });
        it('test build with string ("Gosho", 0)', () => {
            assert.throw(() => sr.build("Gosho", 0),"Invalid input");
            assert.throw(() => sr.build("Gosho", -1),"Invalid input");
        });
        it('test bestHotel', () => {
            actualResult = sr.build("gosho", 2);
            expectedResult = "Successfully built new hotel - gosho";
            assert.equal(actualResult, expectedResult);
        });
        it('test bestHotel', () => {
            sr.build("gosho", 2);
            actualResult = sr.hotels[0];
            expectedResult = { name: 'gosho', beds: 2, points: 0 };
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('book()  behavior', () => {
        it('test book invalid input ("",5) ("gosho,0")', () => {
            assert.throw(() => sr.book("", 5),"Invalid input");
            assert.throw(() => sr.book("gosho", 0),"Invalid input");
        });
        it('test book valid input no such hotel and should throw error', () => {
            assert.throw(() => sr.book("gosho", 5),"There is no such hotel");
        });
        it('test book valid input no beds and should throw error', () => {
            sr.build("Gosho", 2);
            assert.throw(() => sr.book("Gosho", 5),"There is no free space");
        });
        it('test book', () => {
            sr.build("gosho", 2);
            actualResult = sr.book("gosho", 1);
            expectedResult = "Successfully booked";
            assert.equal(actualResult, expectedResult);
        });
        // it('test book', () => {
        //     sr.build("gosho", 2);
        //     sr.book("gosho", 1);
        //     actualResult = sr.hotels.
        //     expectedResult = "Successfully booked";
        //     assert.equal(actualResult, expectedResult);
        // });
    });
    describe('leave()  behavior', () => {
        it('test leave invalid input ("",5,2) ("gosho,0")', () => {
            assert.throw(() => sr.leave("", 5, 2),"Invalid input");
            assert.throw(() => sr.leave("gosho", 0, 2),"Invalid input");
        });
        it('test leave valid input no such hotel and should throw error', () => {
            assert.throw(() => sr.leave("gosho", 5, 2),"There is no such hotel");
        });
        it('test leave valid input ', () => {
            sr.build("gosho", 2);
            actualResult = sr.leave("gosho", 1, 2);
            expectedResult = "1 people left gosho hotel";
            assert.equal(actualResult, expectedResult);
        });
        it('test leave valid input ', () => {
            sr.build("gosho", 2);
            sr.leave("gosho", 1, 2);
            actualResult = sr.voters;
            expectedResult = 1;
            assert.equal(actualResult, expectedResult);
        });
        it('test leave valid input ', () => {
            sr.build("gosho", 2);
            sr.leave("gosho", 1, 2);
            actualResult = sr.hotels[0].points;
            expectedResult = 2;
            assert.equal(actualResult, expectedResult);
        });
        it('test leave valid input ', () => {
            sr.build("gosho", 2);
            sr.book("gosho", 1);
            sr.leave("gosho", 1, 2);
            actualResult = sr.hotels[0].beds;
            expectedResult = 2;
            assert.equal(actualResult, expectedResult);
        });
    });
    describe('averageGrade()  behavior', () => {
        it('test averageGrade invalid input ("",5,2) ("gosho,0")', () => {
            
            actualResult = sr.averageGrade();
            expectedResult = "No votes yet";
            assert.equal(actualResult, expectedResult);
        });
        it('test averageGrade invalid input ("",5,2) ("gosho,0")', () => {
            sr.build("gosho", 2);
            sr.book("gosho", 1);
            sr.leave("gosho", 1, 2);
            actualResult = sr.averageGrade();
            expectedResult = "Average grade: 2.00";
            assert.equal(actualResult, expectedResult);
        });
    });
});