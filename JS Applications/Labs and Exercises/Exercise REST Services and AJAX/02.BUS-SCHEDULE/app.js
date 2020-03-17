function solve() {

    let connectionRef = document.querySelector(".info");
    let departActionRef = document.querySelector("#depart");
    let arriveActionRef = document.querySelector("#arrive");

    let currentStopID = 'depot';
    let currStopName = '';
    let nextStop = '';

    function getScheduleById(id) {
        let requestId = id;
        if(!id){
            requestId = "depot";
        }
        return fetch(`https://judgetests.firebaseio.com/schedule/${requestId}.json`);
    };

    function setNextStop(stopName) {
        connectionRef.innerHTML = `Next stop ${stopName}`;
    }

    function setArriving(stopName) {
        connectionRef.innerHTML = `Arriving at ${stopName}`;
    }

    function setStateToTravelling() {
        departActionRef.disabled = true;
        arriveActionRef.disabled = false;
    }

    function setStateToIdle() {
        departActionRef.disabled = false;
        arriveActionRef.disabled = true;
    }

    try {
        function depart() {
            getScheduleById(currentStopID)
            .then(x => x.json())
            .then(x => {
                nextStop = x.next;
                currStopName = x.name;
                setNextStop(currStopName);
            });
            setStateToTravelling();
        }
    
        function arrive() {
    
            setStateToIdle();
            setArriving(currStopName);
            currentStopID = nextStop;
        }
    } 
    catch (error) {
        departActionRef.disabled = true;
        arriveActionRef.disabled = true;
        connectionRef.innerHTML = `Error`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();