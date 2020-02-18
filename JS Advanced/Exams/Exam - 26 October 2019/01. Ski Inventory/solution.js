function solve() {

    let conuterPrice = 0;
    let itemInputs = document.querySelectorAll("#add-new input");
    let addButton = document.querySelector("#add-new button");
    let products = document.querySelector("#products ul");
    let myProductList = document.querySelector("#myProducts ul");
    let filterInput = document.getElementById("filter");
    let filterbutton = document.querySelector(".filter button");
    let totalPrice = document.getElementsByTagName("h1")[1];
    let buyButton = document.querySelector("#myProducts button");
    

    addButton.addEventListener("click", addItemHandler);
    filterbutton.addEventListener("click", filterItems);
    products.addEventListener("click", addProductToBasketHandler)
    buyButton.addEventListener("click", buyProductsHandler)

    function addProductToBasketHandler(e){
        if(e.target.tagName === "BUTTON"){

            let productPrice = e.target.parentNode.querySelector("strong").textContent;
            let productName = e.target.parentNode.parentNode.querySelector("span").textContent;
            let basketLi = document.createElement("li");
            basketLi.innerText = productName;

            let productQuantityCount = e.target.parentNode.parentNode.querySelector("strong");
            let parsedQuantity = Number(productQuantityCount.innerHTML.split(":")[1].trim());
            productQuantityCount.innerHTML = `Available: ${parsedQuantity - 1}`;
            if(parsedQuantity -1 === 0){
                e.target.parentNode.parentNode.remove();
            }

            let basketElProductPrice = document.createElement("strong");
            basketElProductPrice.innerText = productPrice;

            basketLi.appendChild(basketElProductPrice);
            myProductList.appendChild(basketLi);

            conuterPrice += Number(productPrice);
            totalPrice.innerHTML = `Total Price: ${(conuterPrice).toFixed(2)}`;
        }
    }

    function filterItems(e) {
        let filterValue = filterInput.value;

        Array.from(products.children).forEach(element => {
            let currentProductName = element.querySelector("span");
            if(currentProductName.innerText.toLowerCase().includes(filterValue.toLowerCase())){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
        });
    }

    function addItemHandler(e){

        e.preventDefault();

        let newLi = document.createElement("li");

        let itemName = document.createElement("span");
        itemName.innerText = itemInputs[0].value;
        let itemQuantity = document.createElement("strong");
        itemQuantity.innerText = `Available: ${itemInputs[1].value}`;
        newLi.appendChild(itemName);
        newLi.appendChild(itemQuantity);

        let priceDiv = document.createElement("div");
        let priceElement = document.createElement("strong");
        priceElement.innerText = Number(itemInputs[2].value).toFixed(2);
        let newButton = document.createElement("button");
        newButton.innerText = `Add to Client's List`;
        priceDiv.appendChild(priceElement);
        priceDiv.appendChild(newButton);
        newLi.appendChild(priceDiv);
        products.appendChild(newLi);

        itemInputs[0].value = "";
        itemInputs[1].value = "";
        itemInputs[2].value = "";
    }

    function buyProductsHandler() {
        myProductList.innerHTML ="";
        totalPrice.innerHTML = "Total Price: 0.00";
        conuterPrice = 0;
    }
}