function calorieObject (elements){
    let result = {};

    for (let i = 0; i < elements.length; i+=2) {
        result[elements[i]] = parseInt(elements[i+1])
    }

    console.log(result);
}