function createArticle() {
    let title = document.getElementById("createTitle");
    let content = document.getElementById("createContent");
    let currentSection = document.getElementById("articles");

    if (title.value !== "" && content.value !== "") {
        
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        p.textContent = content.value;
        h3.textContent = title.value;

        article.appendChild(h3);
        article.appendChild(p);
        currentSection.appendChild(article);

        title.value = "";
        content.value = "";
    }
}