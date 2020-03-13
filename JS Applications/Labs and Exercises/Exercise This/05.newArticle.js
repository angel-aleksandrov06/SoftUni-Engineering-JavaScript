function getArticleGenerator(articles) {
    let articlesCopy = [...articles];
    let contentRef = document.querySelector("#content");

    return function() {

        if(articlesCopy.length === 0) {
            return
        }
        let result = articlesCopy[0];

        articlesCopy = articlesCopy.slice(1);

        let resultEl = document.createElement('article');
        resultEl.innerHTML = result;

        contentRef.appendChild(resultEl);
    }
}
