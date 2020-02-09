function stopwatch() {
    let startButton = document.getElementById("startBtn");
    let stopButton = document.getElementById("stopBtn");
    let time, intervalID;

    startButton.addEventListener("click", (e) => {
        time = -1;
        incrementTime();
        intervalID = setInterval(incrementTime, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    });

    stopButton.addEventListener("click", (e) => {
        clearInterval(intervalID);
        startButton.disabled = false;
        stopButton.disabled = true;
    });

    function incrementTime() {
        time++;
        document.getElementById("time").textContent = ("0" + Math.trunc(time/60)).slice(-2) + ":" + ("0" + Math.trunc(time%60)).slice(-2);
    }
}