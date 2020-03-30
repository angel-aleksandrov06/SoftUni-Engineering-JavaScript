import extend from "../utils/context.js";
import models from "../models/index.js";
import modifier from "../utils/modifier.js";

export default {
    get: {
        dashboard(context) {

            models.cause.getAll().then((resp) => {

                const causes = resp.docs.map(modifier);
                context.causes = causes;

                extend(context).then(function () {
                    this.partial('../views/cause/dashboard.hbs');
                });

            })
        },
        create(context) {
            extend(context).then(function () {
                this.partial('../views/cause/create.hbs');
            });
        },
        details(context) {
            const { causeId } = context.params;

            models.cause.get(causeId).then((resp) => {

                const cause = modifier(resp);

                Object.keys(cause).forEach((key) => {
                    context[key] = cause[key];
                });

                context.canDonate = cause.uId !== localStorage.getItem("uId");

                extend(context).then(function () {
                    this.partial('../views/cause/details.hbs')
                })

            }).catch((e) => console.error(e));
        }
    },

    post: {
        create(context) {

            const data = { ...context.params,
                uid: localStorage.getItem("userId"),
                collectedFunds: 0,
                donors: []  
            };

            models.cause.create(data).then((resp) => {
                context.redirect('#/cause/dashboard');
            }).catch((e) => console.error(e));
        }
    }
};