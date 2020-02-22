function acceptance() {
    let company = document.getElementsByTagName("input")[0];
    let product = document.getElementsByTagName("input")[1];
    let quantity = document.getElementsByTagName("input")[2];
    let scrape = document.getElementsByTagName("input")[3];
    let addButton = document.getElementById("acceptance");

    addButton.addEventListener("click", addInfoHandler);

    function addInfoHandler() {
        if(company.value !== "" && product.value !== "" && !isNaN(Number(quantity.value)) 
        && !isNaN(Number(scrape.value)) && quantity.value !== "" && scrape.value !==""){
            let parsedQuantity = Number(quantity.value);
            let parsedScrape = Number(scrape.value);
            if(parsedQuantity-parsedScrape > 0){
                let warehouseDiv = document.getElementById("warehouse");
                let newDiv = document.createElement("div");
                let newP = document.createElement("p");
                let newButton = document.createElement("button");
                newButton.type = "button";
                newButton.textContent = `Out of stock`;
                newButton.addEventListener("click", outOfStockHandler);
                newP.textContent = `[${company.value}] ${product.value} - ${parsedQuantity-parsedScrape} pieces`;
                newDiv.appendChild(newP);
                newDiv.appendChild(newButton);
                warehouseDiv.appendChild(newDiv);

                company.value = "";
                product.value = "";
                quantity.value = "";
                scrape.value = "";
            }
        }
    }

    function outOfStockHandler(e) {
        let warehouse = e.target.parentNode;
        warehouse.remove()
    }
}