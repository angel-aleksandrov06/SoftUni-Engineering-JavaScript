export default {
    displayError(message) {
        const errorBox = document.getElementById("errorBox");
        errorBox.style.display = 'block';
        errorBox.textContent = message;
        setTimeout(() => {
            errorBox.style.display = 'none';
        }, 2000);
    },
    displaySuccess(message) {
        const succesBox = document.getElementById("successBox");
        succesBox.style.display = 'block';
        succesBox.textContent = message;
        setTimeout(() => {
            succesBox.style.display = 'none';
        }, 4000);
    }
}