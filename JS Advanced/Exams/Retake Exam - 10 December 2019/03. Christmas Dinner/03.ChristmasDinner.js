class ChristmasDinner {
    _budget;

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (typeof value === "number") {
            if (value < 0) {
                throw new Error("The budget cannot be a negative number");
            }
            this._budget = value;
        }
    }

    shopping(value){
        let productName = value[0];
        let productPrice = value[1];

        if(productPrice > this.budget){
            throw new Error("Not enough money to buy this product");
        }
        this.budget-=productPrice;
        this.products.push(productName);
        return `You have successfully bought ${productName}!`;
    }

    recipes(value){
        let isOK = false;
        for (let i = 0; i < value.productsList.length; i++) {
            if(this.products.includes(value.productsList[i])){
                isOK = true;
            }
            else{
                isOK = false;
                break;
            }
        }
        if(isOK){
            let recipeName = value.recipeName;
            let productList = value.productsList;
            this.dishes.push(value);
            return `${recipeName} has been successfully cooked!`
        }
        else{
            throw new Error("We do not have this product");
        }
    }
    inviteGuests(name, dish){
        let arrayOfOurDishesName = [];
        for (const obj of this.dishes) {
            arrayOfOurDishesName.push(obj.recipeName);
        }

        if(!arrayOfOurDishesName.includes(dish)){
            throw new Error("We do not have this dish");
        }
        let keys = Object.keys(this.guests);
        if(keys.includes(name)){
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }
    showAttendance() {
        let sb = "";
        let te = Object.keys(this.guests);
        for (const name of te) {
            sb += `${name} will eat ${this.guests[name]}, which consists of ${this.dishes.find(x=>x.recipeName === this.guests[name]).productsList.join(", ")}`;
        }
        return sb;
    }
}