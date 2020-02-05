function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let currentDiv = document.getElementById("extra");

    if(button.textContent === "More"){
        currentDiv.style.display = "block";
        button.textContent = "Less";
    }
    else {
        currentDiv.style.display = "none";
        button.textContent = "More";
    }
}