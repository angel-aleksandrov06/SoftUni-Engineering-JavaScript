(async () => {

    Handlebars.registerPartial('cat', await fetch('./singleCatTemplate.hbs').then((x) => x.text()));

    const template = Handlebars.compile(await fetch('./allCatsTemplate.hbs').then((x) => x.text()));
    
    const resultHTML = template({ cats });

    document.querySelector("#allCats").innerHTML = resultHTML;

    document.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const parent = btn.parentNode;
            const statusDiv = parent.querySelector('div.status');
            const { display } = statusDiv.style;

            if(display === "none") {
                btn.textContent = "Hide status code";
                statusDiv.style.display = "block";
            }
            else {
                btn.textContent = "Show status code";
                statusDiv.style.display = "none";
            }
        });
    });

})();