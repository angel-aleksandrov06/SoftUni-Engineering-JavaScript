function notify(message) {
    let currentDiv = document.getElementById("notification");

    currentDiv.textContent = message;
    currentDiv.style.display = "block";

    setTimeout(() => {
        currentDiv.style.display = "none";
    }, 2000);
}