let assert = require('chai').assert;
let ChristmasMovies = require('./02. Christmas Movies_Resources');


describe("PaymentPackage() behavior", () => {

    let actualResult;
    let expectedResult;
    let cm;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        cm = new ChristmasMovies();
    });

    describe('Constructor() behavior', () => {
        it('test constructor with actors', () => {
            actualResult = cm.actors;
            expectedResult = [];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test constructor with movieCollection', () => {
            actualResult = cm.movieCollection;
            expectedResult = [];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test constructor with watched', () => {
            actualResult = cm.watched;
            expectedResult = {};
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('buyMovie() behavior', () => {
        it('test new movieName', () => {
            actualResult = cm.buyMovie("XXX",["me","you", "he"]);
            expectedResult = "You just got XXX to your collection in which me, you, he are taking part!";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test duplicate movieName', () => {
            actualResult = cm.buyMovie("XXX",["me","you", "he"]);
            assert.throw(() => cm.buyMovie("XXX",[]));
        });
        it('test new movieName', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            actualResult = cm.movieCollection;
            expectedResult = [
                  {
                    "actors": [
                      "me",
                      "you",
                      "he"
                    ],
                    "name": "XXX"
                  }
                ];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test type number movieName ', () => {
            actualResult = cm.buyMovie(5,["me","you", "he"]);
            expectedResult = "You just got 5 to your collection in which me, you, he are taking part!";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test correct movieName, but dublicate actors ', () => {
            actualResult = cm.buyMovie(5,["me","me", "he"]);
            expectedResult = "You just got 5 to your collection in which me, he are taking part!";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test type bool movieName ', () => {
            actualResult = cm.buyMovie(false,["me","you", "he"]);
            expectedResult = "You just got false to your collection in which me, you, he are taking part!";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test type bool movieName and empty array', () => {
            actualResult = cm.buyMovie(false,[]);
            expectedResult = "You just got false to your collection in which  are taking part!";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test type bool movieName and type string', () => {
            actualResult = cm.buyMovie(false,"ivan");
            expectedResult = "You just got false to your collection in which i, v, a, n are taking part!";
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('discardMovie() behavior', () => {
        it('test string "D2"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            assert.throw(() => cm.discardMovie("D2"), "D2 is not at your collection!");
        });
        it('test string "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.watchMovie("XXX");
            actualResult = cm.discardMovie("XXX");
            expectedResult = "You just threw away XXX!";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test string "XXX" not watched' , () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            assert.throw(() => cm.discardMovie("XXX"),"XXX is not watched!");
        });

        it('test string "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.watchMovie("XXX");
            cm.discardMovie("XXX");
            actualResult = cm.movieCollection.length;
            expectedResult = 0;
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test string "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.watchMovie("XXX");
            cm.discardMovie("XXX");
            actualResult = cm.watched;
            expectedResult = {};
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('watchMovie() behavior', () => {
        it('test string "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.watchMovie("XXX");
            actualResult = cm.watched;
            expectedResult = {
                  "XXX": 1
                };
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test string "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.watchMovie("XXX");
            cm.watchMovie("XXX");
            actualResult = cm.watched;
            expectedResult = {
                  "XXX": 2
                };
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test string "XXX"', () => {
            assert.throw(() => cm.watchMovie("XXX"),"No such movie in your collection!");
        });
    });

    describe('favouriteMovie()  behavior', () => {
        it('test no movie in collection"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            assert.throw(() => cm.favouriteMovie(),'You have not watched a movie yet this year!');
        });
        it('test "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.watchMovie("XXX");
            cm.watchMovie("XXX");
            actualResult = cm.favouriteMovie();
            expectedResult = 'Your favourite movie is XXX and you have watched it 2 times!';
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.buyMovie("AAA",["me","you", "he"]);
            cm.watchMovie("XXX");
            cm.watchMovie("XXX");
            cm.watchMovie("AAA");
            cm.watchMovie("AAA");
            cm.watchMovie("AAA");
            actualResult = cm.favouriteMovie();
            expectedResult = 'Your favourite movie is AAA and you have watched it 3 times!';
            assert.deepEqual(actualResult, expectedResult);
        });
    });
    describe('mostStarredActors()  behavior', () => {
        it('"', () => {
            assert.throw(() => cm.mostStarredActor(),'You have not watched a movie yet this year!');
        });
        it('test "XXX"', () => {
            cm.buyMovie("XXX",["me","you", "he"]);
            cm.buyMovie("AAA",["me","on", "she"]);
            cm.watchMovie("XXX");
            actualResult = cm.mostStarredActor();
            expectedResult = 'The most starred actor is me and starred in 2 movies!';
            assert.deepEqual(actualResult, expectedResult);
        });
    });
});