function solve() {
    let input = document.getElementById("input");
    let result = document.getElementById("resultOutput");
    let textFromInput = input.value;

    let num = weigth(textFromInput);
    while (num > 9) {
        num = weigth(num.toString());
    }

    let reducedText = textFromInput.slice(num, textFromInput.length - num);
    let groups = [];

    for (let i = 0; i < Math.ceil(reducedText.length / 8); i++) {
        groups.push(String.fromCharCode(parseInt(reducedText.slice(i * 8, (i + 1) * 8), 2)))
    }

    groups = groups.filter(x => x.match(/[A-Za-z ]/));

    result.textContent = groups.join("");
    input.value = "";


    function weigth(stringInput) {
        let output = stringInput.split("").map(Number).reduce((acc, cur) => {
            return acc + cur;
        }, 0);

        return output;
    }
}