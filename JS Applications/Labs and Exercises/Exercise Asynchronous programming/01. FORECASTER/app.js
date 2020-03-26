(() => {

    const BASE_URL = "https://judgetests.firebaseio.com/locations.json";
    const WEATHER_URL = "https://judgetests.firebaseio.com/forecast/";

    const elements = {
        locationInput: document.querySelector("#location"),
        button: document.querySelector("#submit"),
        currentWrapper: document.querySelector("#current"),
        divForeCast: document.querySelector("#forecast"),
        upcomingWrapper: document.querySelector("#upcoming")
    };

    const symbols = {
        's': '☀',
        'p': '⛅',
        'o': '☁',
        'r': '☂',
        'd': '°'
    };

    elements.button.addEventListener("click", getLocationValue);

    const errorHandler = (e) => console.log(e.message);

    const jsonMiddleware = (r) => r.json();


    function getLocationValue() {

        const location = elements.locationInput.value;

        fetch(BASE_URL)
            .then(jsonMiddleware)
            .then((d) => {
                const { name, code } = d.find(x => x.name === location);

                const TODAY_URL = WEATHER_URL + `today/${code}.json`;
                const UPCOMING_URL = WEATHER_URL + `upcoming/${code}.json`;

                Promise.all([
                    fetch(TODAY_URL).then(jsonMiddleware),
                    fetch(UPCOMING_URL).then(jsonMiddleware)
                ])
                    .then(showWeatherLocation)
                    .catch(errorHandler);

            })
            .catch(errorHandler);

    }

    function showWeatherLocation([todayData, upcomingData]) {

        const { condition, high, low } = todayData.forecast;
        elements.currentWrapper.innerHTML = "";

        let foreCastsDiv = createHTMLElement('div', ['forecasts']);
        let symbolSpan = createHTMLElement('span', ['condition', 'symbol'], symbols[condition[0].toLowerCase()]);
        let conditionSpan = createHTMLElement('span', ['condition']);

        let forecastFirstDataSpan = createHTMLElement('span', ['forecast-data'], todayData.name);
        let degressInfo = `${low}${symbols.d}/${high}${symbols.d}`;
        let forecastSecondDataSpan = createHTMLElement('span', ['forecast-data'], degressInfo);
        let forecastThirdDataSpan = createHTMLElement('span', ['forecast-data'], condition);

        conditionSpan.appendChild(forecastFirstDataSpan);
        conditionSpan.appendChild(forecastSecondDataSpan);
        conditionSpan.appendChild(forecastThirdDataSpan);

        foreCastsDiv.appendChild(symbolSpan);
        foreCastsDiv.appendChild(conditionSpan);

        elements.currentWrapper.appendChild(foreCastsDiv);
        elements.divForeCast.style.display = "block";

        showUpcomingWeatherLocation(upcomingData);
    }

    function showUpcomingWeatherLocation({forecast, name}) {
        elements.upcomingWrapper.innerHTML = '<div class="label">Three-day forecast</div>';
        elements.upcomingWrapper.innerHTML += `
        <div class="forecast-info">
            <span class="upcoming">
                <span class="symbol">${symbols[forecast[0].condition[0].toLowerCase()]}</span>
                <span class="forecast-data">${forecast[0].low}${symbols.d}/${forecast[0].high}${symbols.d}</span>
                <span class="forecast-data">${forecast[0].condition}</span>
            </span>
            <span class="upcoming">
                <span class="symbol">${symbols[forecast[1].condition[0].toLowerCase()]}</span>
                <span class="forecast-data">${forecast[1].low}${symbols.d}/${forecast[1].high}${symbols.d}</span>
                <span class="forecast-data">${forecast[1].condition}</span>
            </span>
            <span class="upcoming">
                <span class="symbol">${symbols[forecast[2].condition[0].toLowerCase()]}</span>
                <span class="forecast-data">${forecast[2].low}${symbols.d}/${forecast[2].high}${symbols.d}</span>
                <span class="forecast-data">${forecast[2].condition}</span>
            </span>
        </div>
        `;
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