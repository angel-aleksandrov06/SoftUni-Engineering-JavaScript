const elements = {
    loadBtn: document.querySelector('#btnLoadTowns'),
    countriesWrapper: document.querySelector('#root'),
    input: document.querySelector("#towns")
};

elements.loadBtn.addEventListener('click', (e) => {

    const towns = elements.input.value.split(", ");

    fetch("./template.hbs").then(r => r.text())
        .then((templateHBS) => {
            const template = Handlebars.compile(templateHBS);
            const resultHTML = template({ towns });

            elements.countriesWrapper.innerHTML = resultHTML;
        })
})