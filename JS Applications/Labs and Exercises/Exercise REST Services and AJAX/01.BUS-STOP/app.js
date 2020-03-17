function getInfo() {

    let stopId = document.getElementById("stopId").value;
    let stopName = document.getElementById("stopName");
    let buses = document.getElementById("buses");
    buses.textContent = '';

    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
    .then(x=> x.json())
    .then(x => {

        if(!Object.keys(x).includes("name")) {
            stopName.innerHTML = 'Error';
            return;
        }
        stopName.innerHTML = x.name;
        for (const key in x.buses) {
            if (x.buses.hasOwnProperty(key)) {
                const element = x.buses[key];
                let newLi = document.createElement("li");
                newLi.textContent = `Bus ${key} arrives in ${element} minutes`;
                buses.appendChild(newLi);
            }
        }
    })
}