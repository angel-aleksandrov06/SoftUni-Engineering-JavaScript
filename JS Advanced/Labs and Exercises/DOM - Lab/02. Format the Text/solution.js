function solve() {
    let inputText = document.getElementById("input").textContent;
    let output = document.getElementById("output");

    let resultArgs = inputText.split(".");
    // let paragraphsCount = Math.ceil(resultArgs.length/3);
    let count = 0;
    let p;

    for (let i = 0; i < resultArgs.length; i++) {
        if (resultArgs[i].length > 1) {
            if (count % 3 === 0) {
                p = document.createElement("p");
                output.appendChild(p);
            }

            p.textContent += resultArgs[i] + ".";
            count++;
        }
    }
}