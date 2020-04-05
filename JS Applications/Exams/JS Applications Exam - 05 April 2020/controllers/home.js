import extend from "../utils/context.js"
import models from "../models/index.js"
import modifier from "../utils/modifier.js"

export default {
    get: {
        home(context) {
            models.article.getAll().then((resp) => {

                const articles = resp.docs.map(modifier);
                function currSort (a, b) {
                    var titleA = a.title.toUpperCase();
                    var titleB = b.title.toUpperCase();
                    if (titleA < titleB) {
                      return -1;
                    }
                    if (titleA > titleB) {
                      return 1;
                    }
                  
                    return 0;
                  };
                context.articles = articles;

                context.javascript = articles.filter(x=> x.category.toLowerCase() === "javascript").sort(currSort);
                context.cSharp = articles.filter(x=> x.category.toLowerCase() === "c#").sort(currSort);
                context.java = articles.filter(x=> x.category.toLowerCase() === "java").sort(currSort);
                context.pyton = articles.filter(x=> x.category.toLowerCase() === "pyton").sort(currSort);

                extend(context).then(function () {
                    this.partial('../views/home/home.hbs');
                });
            })
        },
    }
}