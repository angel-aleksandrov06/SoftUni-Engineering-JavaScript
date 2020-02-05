function create(words) {

    let divContent = document.getElementById("content");

    for (const word of words) {
        let NewDiv = document.createElement("div");
        let newPar = document.createElement("p");
        newPar.style.display = "none";
        newPar.innerHTML = word;

        NewDiv.appendChild(newPar);
        NewDiv.addEventListener("click", (e) => {
            e.target.children[0].style.display = "block";
        })
        divContent.appendChild(NewDiv);
    }
}