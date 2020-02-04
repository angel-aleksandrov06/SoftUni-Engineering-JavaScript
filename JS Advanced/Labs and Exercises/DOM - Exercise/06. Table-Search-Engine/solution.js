function solve() {
    let input = document.getElementById("searchField");
    let button = document.getElementById("searchBtn");
    let table = document.getElementsByTagName("tbody")[0];

    button.addEventListener("click", (e) => {
        let inputString = input.value;
        let children = table.children;

        if(inputString) {

            Array.from(children).forEach(tr => tr.classList.remove("select"));
            Array.from(children).forEach(tr => {
                if (tr.textContent.includes(inputString)){
                    tr.classList.add("select");
                }
            })
        }
        
        input.value = "";
    })
}