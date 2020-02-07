class Stringer {
    
    constructor(inputStrnig, length) {
        this.innerString = inputStrnig;
        this.innerLength = Number(length);
    }

    increase(length) {
        if (length > 0) {
            this.innerLength += Number(length);
        }
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - Number(length));
    }

    toString() {
        if (this.innerString.length > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + "...";
        }
        else if( this.innerString.length <= this.innerLength){
            return this.innerString;
        }
        else {
            return "...";
        }
    }
}