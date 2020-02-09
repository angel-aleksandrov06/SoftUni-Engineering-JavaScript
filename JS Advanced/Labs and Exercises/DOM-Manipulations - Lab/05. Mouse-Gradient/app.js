function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let result = document.getElementById("result");
    gradient.addEventListener("mousemove", gradientMove);
    gradient.addEventListener("mouseut", gradientOut);

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = power + "%";
    }

    function gradientOut(event) {
        result.textContent = "";
    }

}