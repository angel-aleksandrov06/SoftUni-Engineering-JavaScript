function solve() {
    let opitionList = document.querySelectorAll("#selectMenuTo")[0];
    let button = document.getElementsByTagName("button")[0];
    let input = document.querySelector("#input");

    let mathObj ={
        "": "",
        binary: (number) => number.toString(2),
        hexadecimal: (number) => number.toString(16).toUpperCase()
    }

    opitionList.innerHTML = 
    `
    <option value=""></option>
    <option value="hexadecimal">Hexadecimal</option>
    <option value="binary">Binary</option>
    `

    button.addEventListener("click", () =>{
        document.getElementById("result").value = mathObj[opitionList.value](Number(input.value));
    })
}