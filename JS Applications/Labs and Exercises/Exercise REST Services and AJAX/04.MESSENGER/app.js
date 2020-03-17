function attachEvents() {

    let author = document.getElementById("author");
    let content = document.getElementById("content");

    let submitButton = document.getElementById("submit");
    let refreshButton = document.getElementById("refresh");
    let textArea = document.getElementById("messages");

    submitButton.addEventListener("click", () => {
        newobj = {
            author: author.value,
            content: content.value,
        }
        fetch("https://rest-messanger.firebaseio.com/messanger.json", {
            method: 'POST',
            body: JSON.stringify(newobj)
        })

        author.value = '';
        content.value = '';
    })

    refreshButton.addEventListener("click", () => {
        fetch("https://rest-messanger.firebaseio.com/messanger.json")
        .then(x => x.json())
        .then( x => {
            textArea.textContent = '';
            for (const key in x) {
                if (x.hasOwnProperty(key)) {
                    const element = x[key];
                    textArea.textContent += `${element.author}: ${element.content}\n`
                }
            }
        })
    })
}

attachEvents();