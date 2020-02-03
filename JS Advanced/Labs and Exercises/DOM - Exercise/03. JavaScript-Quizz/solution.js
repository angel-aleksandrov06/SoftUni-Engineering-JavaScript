function solve() {
    let quizzie = document.getElementById("quizzie");
    let sections = document.getElementsByTagName("section");
    let result = document.querySelector(".results-inner h1");

    let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let usserAnswers = 0;
    let currentStep = 0;

    quizzie.addEventListener("click",(e) => {

        if(e.target.className == "answer-text"){

            sections[currentStep].style.display = "none";
            let isAnswerCorrect = correctAnswers.some(answer => answer === e.target.innerHTML);

            if(isAnswerCorrect){
                usserAnswers++;
            }
            currentStep++;
            if(currentStep < sections.length){
                sections[currentStep].style.display = "block";
            }

            if(currentStep === 3){
                document.querySelector("#results").style.display = "block";
                result.innerHTML = 
                correctAnswers.length === usserAnswers 
                ? "You are recognized as top JavaScript fan!" :  `You have ${usserAnswers} right answers`
            }
        }
    })
}