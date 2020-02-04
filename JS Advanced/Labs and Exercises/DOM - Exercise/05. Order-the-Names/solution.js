function solve() {
    let registerButton = document.getElementsByTagName("button")[0];
    let input = document.getElementsByTagName("input")[0];
    let orderedList = document.getElementsByTagName("ol")[0];
    
    registerButton.addEventListener("click", (e) => {
        let currentInput = input.value.toUpperCase();
        let refactoredInput = currentInput[0];

        for (let i = 1; i < currentInput.length; i++) {
            refactoredInput+=currentInput[i].toLowerCase();
        }

        let asciiCodeOfFirstcharInCurrentInput = currentInput.charCodeAt(0);
        let child = orderedList.getElementsByTagName("li")[asciiCodeOfFirstcharInCurrentInput-65];

        if(child.innerHTML.length > 0) {
            let currentChildText = child.innerHTML;
            refactoredInput = currentChildText + ", " + refactoredInput;
        }
        child.innerHTML = refactoredInput;
        input.value = "";
    })
}