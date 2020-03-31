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
                console.log(cause);

                Object.keys(cause).forEach((key) => {
                    context[key] = cause[key];
                });
                context.canDonate = cause.uId !== localStorage.getItem("userId");

                extend(context).then(function () {
                    this.partial('../views/cause/details.hbs')
                })

            }).catch((e) => console.error(e));
        }
    },
    post: {
        create(context) {
            const data = { ...context.params,
                uId: localStorage.getItem("userId"),
                collectedFunds: 0,
                donors: []  
            };

            models.cause.create(data).then((resp) => {
                context.redirect('#/cause/dashboard');
            }).catch((e) => console.error(e));
        }
    },
    del: {
        close(context) {
            const { causeId } = context.params;

            models.cause.close(causeId).then((resp) => {
                context.redirect('#/cause/dashboard');
            })
        }
    },
    put: {
        donate(context) {
            const { causeId, donatedAmount } = context.params;

            models.cause.get(causeId).then((resp) => {
                const cause = modifier(resp);
                
                cause.collectedFunds += Number(donatedAmount);
                cause.donors.push(localStorage.getItem("userEmail"));
                
                return models.cause.donate(causeId, cause)
            })
            .then((resp) => {
                context.redirect("#/cause/dashboard");
            })
        }
    }
};