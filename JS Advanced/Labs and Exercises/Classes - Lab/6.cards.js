let result = (function() {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES:"♠",
        HEARTS:'♥',
        DIAMONDS:"♦",
        CLUBS:"♣"
    };

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (faces.includes(value.toString())){
                this._face = value;
            }
            else{
                throw new Error;
            }
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (Object.values(Suits).includes(value)) {
                this._suit = value;
            }
            else{
                throw new Error;
            }
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
})();