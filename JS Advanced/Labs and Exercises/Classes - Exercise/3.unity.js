class Rat {
    rats = [];
    constructor(name){
        this.name = name;
    }

    getRats() {
        return this.rats;
    }

    unite(otherRat) {
        if(otherRat instanceof Rat){
            this.rats.push(otherRat);
        }
    }

    toString() {
        return this.name + this.rats.map(x => `\n##${x.name}`).join("");
    }
}