import { monkeys } from './monkeys.js';

(async () => {

    Handlebars.registerPartial('monkey', await fetch('./monkeyTemplate.hbs').then(r => r.text()));

    const templateSrc = await fetch('./monkeysTemplate.hbs').then(r => r.text());
    const template = Handlebars.compile(templateSrc);

    const resultHTML = template({ monkeys });

    document.querySelector('section').innerHTML = resultHTML;

    document.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const pInfo = btn.parentNode.querySelector('p');
            const { display } = pInfo.style;

            if(display === "none") {
                pInfo.style.display = "block";
            }
            else {
                pInfo.style.display = "none";
            }
        })
    })
})();