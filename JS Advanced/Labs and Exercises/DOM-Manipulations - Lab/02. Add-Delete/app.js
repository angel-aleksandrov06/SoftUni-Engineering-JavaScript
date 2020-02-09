function addItem() {
    let input = document.getElementById("newText");
    let list = document.getElementById("items");

    let newLi = document.createElement("li");
    let href = document.createElement("a");
    
    href.textContent = "[Delete]";
    href.href = "#";
    href.addEventListener("click", deleteItem)
    newLi.textContent = input.value + " ";
    newLi.appendChild(href);

    list.appendChild(newLi);
    input.value = "";

    function deleteItem() {
        let li = this.parentNode;
        let ul = this.parentNode.parentNode;
        ul.removeChild(li);
    }
}