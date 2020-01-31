let manager = (function() {

    const ingredientObj = { 
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipesObj = {
        'apple': { carbohydrate: 1, flavour: 2 },
        'lemonade': { carbohydrate: 10, flavour: 20 },
        'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
        'eggs': { protein: 5, fat: 1, flavour: 1 },
        'turkey': { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    const prepareRecipe = (recipe, neededQuantity) => {
        const neededIngredients = Object.entries(recipesObj[recipe]);
        for (const [ing, qty] of neededIngredients) {
            const ingredientStored = ingredientObj[ing] * neededQuantity;
            if(qty > ingredientStored) {
                return `Error: not enough ${ing} in stock`;
            }
        }

        for (const [ing, qty] of neededIngredients) {
            ingredientObj[ing] -= qty * neededQuantity;
        }

        return "Success";
    }

    return function(input) {
        const inputArgs = input.split(" ");
        const command = inputArgs[0];

        switch (command) {
            case "restock":
                ingredientObj[inputArgs[1]] += Number(inputArgs[2])
                return "Success";
            case "prepare":
                return prepareRecipe(inputArgs[1], Number(inputArgs[2]));
            case "report":
            return Object.entries(ingredientObj).map((kvp) => `${kvp[0]}=${kvp[1]}`).join(" ");
            default:
                break;
        }
    }
})();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));