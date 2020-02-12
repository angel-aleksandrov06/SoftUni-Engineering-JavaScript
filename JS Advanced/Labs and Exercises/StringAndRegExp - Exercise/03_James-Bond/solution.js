function solve() {
    let [key, ...line] = JSON.parse(document.getElementById("array").value);
    let result = document.getElementById("result");

    let ourRegex = new RegExp(`${key}[ ]+([A-Z!%#\$]{8,})([\., ]|$)`, 'gmi');
    line.forEach(dataline => {
        let replacedLine = dataline;
        if(dataline.match(ourRegex)) {
            let matches = dataline.match(ourRegex)
            .map(x => x.split(" ")[1])
            .filter(str => str === str.toUpperCase())
            .map(x => {
                let parsedWord = x
                .replace(/!/g, 1)
                .replace(/%/g, 2)
                .replace(/#/g, 3)
                .replace(/\$/g, 4)
                .toLowerCase();

                let targetWord = x;
                replacedLine = replacedLine.replace(targetWord, parsedWord)
            })
        }

        let temP = document.createElement('p');
        temP.innerText = replacedLine;
        result.appendChild(temP);
    })
}
