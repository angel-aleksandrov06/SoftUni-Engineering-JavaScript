function cookingByNumbers(input = []) {

    var number = Number(input.shift());

    for(let i=0; i<input.length; i++) {
        switch (input[i]) {
            case "chop":
                number = number/2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number++;
                console.log(number);
                break;
            case "bake":
                number = number*3;
                console.log(number);
                break;
            case "fillet":
                number = number - (number * 0.2);
                console.log(number);
                break;
        }
    }
}