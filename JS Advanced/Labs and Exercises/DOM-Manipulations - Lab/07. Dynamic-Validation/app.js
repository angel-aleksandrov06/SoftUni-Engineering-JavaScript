function validate() {
    let inputBox = document.getElementById("email");
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputBox.addEventListener("change", (e) =>{
        let email = e.target.value;
        if(pattern.test(email)) {
            e.target.classList.remove("error");
        }
        else {
            e.target.classList.add("error");
        }
    })
}