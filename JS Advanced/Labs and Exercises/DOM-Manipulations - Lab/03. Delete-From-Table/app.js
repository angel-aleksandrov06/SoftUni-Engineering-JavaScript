function deleteByEmail() {
    let input = document.getElementsByName("email")[0];
    let emailTds = document.querySelectorAll("tbody tr td:nth-child(2)");
    let deleted = false;

    for (const td of emailTds) {
        if(td.textContent == input.value){
            td.parentNode.parentNode.removeChild(td.parentNode);
            deleted = true;
        }
    }

    document.getElementById("result").textContent = deleted ? "Deleted." : "Not found.";
}