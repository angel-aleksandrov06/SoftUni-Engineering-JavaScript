function solve() {
    let createButton = document.getElementsByTagName("button")[0];
    let author = document.getElementById("creator");
    let title = document.getElementById("title");
    let category = document.getElementById("category");
    let content = document.getElementById("content");
    let section = document.getElementsByTagName("section")[1];

    createButton.addEventListener("click", createButtonHanler);

    function createButtonHanler(e) {

        e.preventDefault();

        let newArticle = document.createElement("article");
        let titleNewH1 = document.createElement("h1");
        titleNewH1.textContent = title.value;
        newArticle.appendChild(titleNewH1);

        let categoryP = document.createElement("p");
        categoryP.textContent = "Category:";

        let newCategoryStrong = document.createElement("strong");
        newCategoryStrong.textContent = category.value;
        categoryP.appendChild(newCategoryStrong);
        newArticle.appendChild(categoryP);

        let authorP = document.createElement("p");
        authorP.textContent = "Creator:";

        let newAuthorStrong = document.createElement("strong");
        newAuthorStrong.textContent = author.value;
        authorP.appendChild(newAuthorStrong);
        newArticle.appendChild(authorP);

        let contentP = document.createElement("p");
        contentP.textContent = content.value;
        newArticle.appendChild(contentP);

        let newDivButton = document.createElement("div");
        newDivButton.classList.add("buttons");

        let buttonDelete = document.createElement("button");
        buttonDelete.classList.add("btn");
        buttonDelete.classList.add("delete");
        buttonDelete.textContent = "Delete";
        buttonDelete.addEventListener("click", deleteButtonHanlder);
        let buttonArchive = document.createElement("button");
        buttonArchive.classList.add("btn");
        buttonArchive.classList.add("archive");
        buttonArchive.textContent = "Archive";
        buttonArchive.addEventListener("click", archiveButtonHanlder);

        newDivButton.appendChild(buttonDelete);
        newDivButton.appendChild(buttonArchive);
        newArticle.appendChild(newDivButton);

        section.appendChild(newArticle);

        author.value = "";
        title.value = "";
        content.value = "";
        category.value = "";
    }

    function archiveButtonHanlder(e) {
        let archiveSection = document.querySelector(".archive-section ul");
        let curArticle = e.target.parentNode.parentNode;
        let curArticleH1 = e.target.parentNode.parentNode.children[0].textContent;
        let newLi = document.createElement("li");
        newLi.innerText = curArticleH1;
        archiveSection.appendChild(newLi);
        sort(archiveSection);
        curArticle.remove();
    }

    function deleteButtonHanlder(e) {
        let curArticle = e.target.parentElement.parentElement;
        curArticle.remove();
    }

    function sort(list) {
        let listItems = Array.from(list.children);
        list.innerHTML = '';

        listItems
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => list.appendChild(li));
    }
} 
