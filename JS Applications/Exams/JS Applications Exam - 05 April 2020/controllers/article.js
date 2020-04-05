import extend from "../utils/context.js";
import models from "../models/index.js";
import modifier from "../utils/modifier.js";

export default {
    get: {
        create(context) {
            extend(context).then(function () {
                this.partial('../views/article/create.hbs');
            });
        },
        details(context) {
            const { articleId } = context.params;

            models.article.get(articleId).then((resp) => {

                const article = modifier(resp);

                Object.keys(article).forEach((key) => {
                    context[key] = article[key];
                });
                context.isOwnArticle = article.uId === localStorage.getItem("userId");
                extend(context).then(function () {
                    this.partial('../views/article/details.hbs')
                })

            }).catch((e) => console.error(e));
        },
        edit(context) {
            const { articleId } = context.params;

            models.article.get(articleId).then((resp) => {

                const article = modifier(resp);

                Object.keys(article).forEach((key) => {
                    context[key] = article[key];
                });

                extend(context).then(function () {
                    this.partial('../views/article/edit.hbs')
                })

            }).catch((e) => console.error(e));
        }
    },
    post: {
        create(context) {
            const data = {
                ...context.params,
                uId: localStorage.getItem("userId"),
                // creator: localStorage.getItem("userEmail"),
            };

            const staticCategories = ["javascript", "c#", "java", "pyton"];

            if (staticCategories.includes(data.category.toLowerCase())) {
                models.article.create(data).then((resp) => {
                    context.redirect('#/home');
                })
                .catch((e) => console.error(e));
            }
            else {
                console.error("Тhere is no such category!");
            }

        }
    },
    del: {
        close(context) {
            const { articleId } = context.params;

            models.article.close(articleId).then((resp) => {
                context.redirect('#/home');
            })
        }
    },
    put: {
        edit(context) {
            const { articleId } = context.params;

            models.article.get(articleId).then((resp) => {
                const article = modifier(resp);
                const staticCategories = ["javascript", "c#", "java", "pyton"];

                article.title = context.params.title;
                article.content = context.params.content;
                if (!staticCategories.includes(context.params.category.toLowerCase())) {
                    throw "Cant use this category!";
                }

                return models.article.update(articleId, article)
            })
                .then((resp) => {
                    context.redirect(`#/home`);
                })
                .catch((e) => console.error(e))
        }
    }
};