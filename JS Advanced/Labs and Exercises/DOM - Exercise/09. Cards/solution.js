function solve() {
    Array.from(document.getElementsByTagName("img")).forEach(img => {
        img.addEventListener("click", clickEvent);
    })

    function clickEvent(e) {
        let card = e.target;
        card.src = "./images/whiteCard.jpg";
        card.removeEventListener("click", clickEvent);

        let parent = card.parentNode;
        let spans = document.getElementById("result").children;

        let leftSpan = spans[0];
        let rigthSpan = spans[2];

        if (parent.id === "player1Div") {
            leftSpan.textContent = card.name;
        }
        else if (parent.id === "player2Div") {

            rigthSpan.textContent = card.name;
        }

        if (leftSpan.textContent && rigthSpan.textContent) {
            let winner;
            let looser;

            if (+leftSpan.textContent > +rigthSpan.textContent) {
                winner = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`)
                looser = document.querySelector(`#player2Div img[name="${rigthSpan.textContent}"]`)
            }
            else {
                winner = document.querySelector(`#player2Div img[name="${rigthSpan.textContent}"]`)
                looser = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`)
            }

            winner.style.border = "2px solid green";
            looser.style.border = "2px solid red";

            document.getElementById("history").textContent += `[${leftSpan.textContent} vs ${rigthSpan.textContent}] `;

            leftSpan.textContent = "";
            rigthSpan.textContent = "";
        }
    }
}