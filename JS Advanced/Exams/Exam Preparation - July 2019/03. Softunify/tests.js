let assert = require('chai').assert;
let SoftUniFy = require('./03. Softunify_Ресурси');


describe("SoftUniFy() behavior", () => {

    let actualResult;
    let expectedResult;
    let sUF;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        sUF = new SoftUniFy();
    });

    describe('Constructor() behavior', () => {
        it('test constructor', () => {
            actualResult = sUF.allSongs;
            expectedResult = {};
            assert.deepEqual(actualResult, expectedResult);
        });
    });
    describe('downloadSong() behavior', () => {
        it('test downloadSong() with one artist and one song', () => {
            actualResult = sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            expectedResult = {
                  "allSongs": {
                    "Eminem": {
                      "rate": 0,
                      "songs": [
                        "Venom - Knock, Knock let the devil in..."
                      ],
                      "votes": 0
                    }
                  }
                };
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test downloadSong() with one artist and two songs', () => {
            sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            actualResult = sUF.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            expectedResult = {
                  "allSongs": {
                    "Eminem": {
                      "rate": 0,
                      "songs": [
                        "Venom - Knock, Knock let the devil in...",
                        "Phenomenal - IM PHENOMENAL..."
                      ],
                      "votes": 0
                    }
                  }
                };
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test downloadSong() same artist other songs', () => {
            sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sUF.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            actualResult = sUF.allSongs;
            expectedResult = {
                    "Eminem": {
                      "rate": 0,
                      "songs": [
                        "Venom - Knock, Knock let the devil in...",
                        "Phenomenal - IM PHENOMENAL..."
                      ],
                      "votes": 0
                    }
                  };
            assert.deepEqual(actualResult, expectedResult);
        });
    });
    describe('playSong() behavior', () => {
        it('test playSong() with same name', () => {
            sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sUF.downloadSong('Eminem', 'Venom', 'IM PHENOMENAL...');
            actualResult = sUF.playSong("Venom");
            expectedResult = "Eminem:\nVenom - Knock, Knock let the devil in...\nVenom - IM PHENOMENAL...\n";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test playSong() with wrong song name', () => {
            sUF.downloadSong('Eminem', 'Phenomenal', 'Knock, Knock let the devil in...');
            sUF.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            actualResult = sUF.playSong("Venom");
            expectedResult = `You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!`;
            assert.deepEqual(actualResult, expectedResult);
        });
    });
    describe('songsList() behavior', () => {
        it('test songsList() with songs', () => {
            sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sUF.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            actualResult = sUF.songsList;
            expectedResult = "Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test songsList() without songs', () => {
            actualResult = sUF.songsList;
            expectedResult = "Your song list is empty";
            assert.deepEqual(actualResult, expectedResult);
        });
    });
    describe('rateArtist() behavior', () => {
        it('test rateArtist() with undefined', () => {
            sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sUF.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            actualResult = sUF.rateArtist();
            expectedResult = "The undefined is not on your artist list.";
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test rateArtist() with name', () => {
            sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sUF.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            actualResult = sUF.rateArtist("Eminem");
            expectedResult = 0;
            assert.deepEqual(actualResult, expectedResult);
        });
        it('test rateArtist() with name and rate', () => {
            sUF.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sUF.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            actualResult = sUF.rateArtist("Eminem", 50);
            expectedResult = 50;
            assert.deepEqual(actualResult, expectedResult);
        });
    });
});