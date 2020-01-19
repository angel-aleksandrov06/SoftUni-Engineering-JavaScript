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

    return arr.length === 0 ? "Empty" : arr.join("\n");
}