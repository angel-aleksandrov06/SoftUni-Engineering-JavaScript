class List {
    _arr = [];
    constructor(){
        this.size = 0;
    };   

    add(element) {
        this._arr.push(element);
        this.size++;
        this.sort();
    }

    remove(index) {
        if(typeof index === "number"){
            if(index >= 0 && index < this._arr.length){
                this._arr.splice(index, 1);
                this.size--;
                this.sort();
            }
        }
    }

    get(index) {
        if(typeof index === "number"){
            if(index >= 0 && index < this._arr.length){
                return this._arr[index];
            }
        }
    }

    sort(){
        this._arr.sort((a,b)=> {
            return Number(a) - b;
        })
    }
}