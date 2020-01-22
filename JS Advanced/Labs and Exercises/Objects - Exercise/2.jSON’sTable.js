function solve(data) {
    let parsedData = data.map(x => JSON.parse(x));

    let createTable = content => `<table>\n${content}</table>`;
    let createRow = content => `       <tr>\n${content}       </tr>\n`;
    let createData = content => `              <td>${content}</td>\n`;

    let result = parsedData.reduce((accRows, row) => {

        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + createData(td)
        }, "");

        return accRows + createRow(tdForPerson);
    }, "");

    return createTable(result);
}

console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
));