function focus() {
    let inputs = document.querySelectorAll("body div div input");

    for (const input of inputs) {
        input.addEventListener("focus", (e) => {

            for (const inputt of inputs) {
                if(e.target !== inputt){
                    inputt.parentElement.classList.remove("focused");
                }
            }

            e.target.parentNode.classList.add("focused");
        })
        
    }
}