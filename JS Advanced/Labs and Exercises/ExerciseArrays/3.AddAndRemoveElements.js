function solution(input = []) {

    const arr = [];

    for (let index = 0; index < input.length; index++) {

        if (input[index] === 'add') {
            arr.push(index + 1);
        }
        else {
            arr.pop();
        }
    }

    if (arr.length === 0) {
        console.log("Empty");
    }
    else {
        console.log(arr.join("\n"));
    }
}

solution(['remove',
    'remove',
    'remove',
    'remove']
);