const elements = {
    loadBtn: document.querySelector('#btnLoadTowns'),
    countriesWrapper: document.querySelector('#root')
};

elements.loadBtn.addEventListener('click', (e) => {

    Promise.all([
        fetch("https://restcountries.eu/rest/v2/all").then(r => r.json()),
        fetch("./template.hbs").then(r => r.text())
    ])
    .then(([countries, templateHBS]) => {
        const template = Handlebars.compile(templateHBS);
        const resultHTML = template({countries});

        elements.countriesWrapper.innerHTML = resultHTML;
    })

})