function solution() {
    let button = document.getElementsByTagName("button")[0];
    let input = document.getElementsByTagName("input")[0];
    let listOfGifts = document.getElementsByTagName("ul")[0];

    button.addEventListener("click", (e) => {
        let newLi = document.createElement("li");
        let sendButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        sendButton.textContent = "Send";
        sendButton.id = "sendButton";
        sendButton.addEventListener("click", sendItem)
        newLi.textContent = input.value;
        newLi.appendChild(sendButton);

        deleteButton.textContent = "Discard";
        deleteButton.id = "discardButton";
        deleteButton.addEventListener("click", discardItem);
        newLi.appendChild(deleteButton);
        newLi.classList.add("gift");
        listOfGifts.appendChild(newLi);

        sort(listOfGifts);
        input.value = "";

        function sendItem() {
            let sentGiftsUl = document.getElementsByTagName("ul")[1];
            let li = this.parentNode;
            let movingLi = document.createElement("li");
            movingLi.textContent = li.textContent.replace("SendDiscard","");
            movingLi.classList.add("gift");
            let ul = this.parentNode.parentNode;
            ul.removeChild(li);
            sentGiftsUl.appendChild(movingLi);
        }

        function discardItem() {
            let discardedGiftsUl = document.getElementsByTagName("ul")[2];
            let li = this.parentNode;
            let movingLi = document.createElement("li");
            movingLi.textContent = li.textContent.replace("SendDiscard","");
            movingLi.classList.add("gift");
            let ul = this.parentNode.parentNode;
            ul.removeChild(li);
            discardedGiftsUl.appendChild(movingLi);
        }
    })

    function sort(list) {
        var items = list.childNodes;
        var itemsArr = [];
        for (var i in items) {
            if (items[i].nodeType == 1) { 
                itemsArr.push(items[i]);
            }
        }
        itemsArr.sort(function (a, b) {
            return a.innerHTML == b.innerHTML
                ? 0
                : (a.innerHTML > b.innerHTML ? 1 : -1);
        });
        for (i = 0; i < itemsArr.length; ++i) {
            list.appendChild(itemsArr[i]);
        }
    }
}