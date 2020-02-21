function solve() {
    let profit = 0;
    let addButton = document.querySelector("form button");
    let titleInput = document.getElementsByTagName("input")[0];
    let yearInput = document.getElementsByTagName("input")[1];
    let priceInput = document.getElementsByTagName("input")[2];
    let newBookShelf = document.getElementsByClassName("bookShelf")[1];
    let oldBookShelf = document.getElementsByClassName("bookShelf")[0];
    let totalStoreProfit = document.getElementsByTagName("h1")[1];

    addButton.addEventListener("click", addButtonHandler);


    function addButtonHandler(e) {
        e.preventDefault();
        if (titleInput.value !== "" && Number(yearInput.value) >= 0 && Number(priceInput.value) >= 0) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("book");
            let newP = document.createElement("p");
            newP.textContent = `${titleInput.value} [${yearInput.value}]`;
            newDiv.appendChild(newP);
            let newButtonBuy = document.createElement("button");
            newButtonBuy.addEventListener("click", clickBuyHandler);

            if (Number(yearInput.value) >= 2000) {
                newButtonBuy.textContent = `Buy it only for ${Number(priceInput.value).toFixed(2)} BGN`;
                newDiv.appendChild(newButtonBuy);
                let newButtonMove = document.createElement("button");
                newButtonMove.textContent = `Move to old section`;
                newDiv.appendChild(newButtonMove);
                newBookShelf.appendChild(newDiv);
                newButtonMove.addEventListener("click", clickMoveHandler)
            }
            else {
                let priceWithDiscount = Number(priceInput.value) * 0.85;
                newButtonBuy.textContent = `Buy it only for ${(priceWithDiscount).toFixed(2)} BGN`;
                newDiv.appendChild(newButtonBuy);
                oldBookShelf.appendChild(newDiv);
            }

        }
    }

    function clickMoveHandler(e) {
        let curDivToMove = e.target.parentNode;
        curDivToMove.lastChild.remove();
        let curPrice = Number(curDivToMove.lastChild.textContent.split(" ")[4]) * 0.85;
        curDivToMove.lastChild.textContent = `Buy it only for ${(curPrice).toFixed(2)} BGN`;
        oldBookShelf.appendChild(curDivToMove);
    }

    function clickBuyHandler(e) {
        let curDivToMove = e.target.parentNode;
        let curPrice = Number(curDivToMove.children[1].textContent.split(" ")[4]);
        profit+= curPrice;
        totalStoreProfit.textContent = `Total Store Profit: ${profit.toFixed(2)} BGN`;
        curDivToMove.remove();
    }
}