class Hex {
    constructor(value){
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x` + this.value.toString(16).toUpperCase();
    }

    plus(value) {
        if(value instanceof Hex){
            return new Hex(this.value + value.valueOf())
        }
        return new Hex(this.value + value.valueOf());
    }

    minus(value) {
        if(value instanceof Hex){
            return new Hex(this.value - value.valueOf())
        }
        return new Hex(this.value - value.valueOf());
    }

    parse(hexaNum) {
        return parseInt(hexaNum,10);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
