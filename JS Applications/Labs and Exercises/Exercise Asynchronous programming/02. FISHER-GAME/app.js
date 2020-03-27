(() => {

    const elements = {
        anglerInput: document.querySelector("#addForm input.angler"),
        weightInput: document.querySelector("#addForm input.weight"),
        speciesInput: document.querySelector("#addForm input.species"),
        locationInput: document.querySelector("#addForm input.location"),
        baitInput: document.querySelector("#addForm input.bait"),
        captureTimeInput: document.querySelector("#addForm input.captureTime"),
        addBtn: document.querySelector("#addForm button.add"),
        loadBtn: document.querySelector(".load"),
        divCatches: document.querySelector("#catches"),
    }

    const URL = "https://fisher-game.firebaseio.com/catches";

    elements.addBtn.addEventListener("click", addCatch);

    elements.loadBtn.addEventListener("click", loadCatches);

    let currentID = '';

    async function loadCatches() {
        try {
            const response = await fetch(URL + '.json');
            const data = await response.json();

            elements.divCatches.innerHTML = '';

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];

                    let divParent = createHTMLElement("div", ['catch']);
                    divParent.setAttribute('data-id', `${key}`);
                    divParent.innerHTML = `
                    <label>Angler</label>
                    <input type="text" class="angler" value="${element.angler}" />
                    <hr>
                    <label>Weight</label>      
                    <input type="number" class="weight" value="${element.weight}" />
                    <hr>
                    <label>Species</label>
                    <input type="text" class="species" value="${element.species}" />
                    <hr>
                    <label>Location</label>
                    <input type="text" class="location" value="${element.location}" />
                    <hr>
                    <label>Bait</label>
                    <input type="text" class="bait" value="${element.bait}" />
                    <hr>
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${element.captureTime}" />
                    <hr>
                    `;
                    let buttonUpdate = createHTMLElement("button", ['update'], 'Update');
                    let buttonDelete = createHTMLElement("button", ['delete'], 'Delete');

                    buttonUpdate.addEventListener("click", updateCatch);
                    buttonDelete.addEventListener("click", deleteCatch);
                    divParent.appendChild(buttonUpdate);
                    divParent.appendChild(buttonDelete);

                    elements.divCatches.appendChild(divParent);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    async function addCatch() {

        let myCatch = {
            angler: elements.anglerInput.value,
            weight: elements.weightInput.value,
            species: elements.speciesInput.value,
            location: elements.locationInput.value,
            bait: elements.baitInput.value,
            captureTime: elements.captureTimeInput.value
        };

        const options = {
            method: "POST",
            body: JSON.stringify(myCatch),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(URL + '.json', options);
            const data = await response.json();
            await loadCatches();

            elements.anglerInput.value ='';
            elements.weightInput.value ='';
            elements.speciesInput.value ='';
            elements.locationInput.value ='';
            elements.baitInput.value ='';
            elements.captureTimeInput.value ='';
        }
        catch (e) {
            console.log(e);
        }
    }

    async function deleteCatch() {

        currentID = `${this.parentNode.dataset.id}`;

        try {
            const options = {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const response = await fetch(URL + `/${currentID}.json`, options);
            const data = await response.json();

            let currentCatch = this.parentNode;
            currentCatch.remove();

        } catch (error) {
            console.log(e);
        }
    }

    async function updateCatch() {

        currentID = `${this.parentNode.dataset.id}`;

        console.log(currentID)

        let myCatch = {
            angler: this.parentNode.children[1].value,
            weight: this.parentNode.children[4].value,
            species: this.parentNode.children[7].value,
            location: this.parentNode.children[10].value,
            bait: this.parentNode.children[13].value,
            captureTime: this.parentNode.children[16].value
        };

        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myCatch)
        };

        try {

            const response = await fetch(URL + `/${currentID}.json`, options);

        } catch (error) {
            console.log(error);
        }
    }

    function createHTMLElement(tagName, classNames, textContent) {
        let element = document.createElement(tagName);

        if (classNames) {
            element.classList.add(...classNames);
        }
        if (textContent) {
            element.textContent = textContent;
        }
        return element;
    }
})();