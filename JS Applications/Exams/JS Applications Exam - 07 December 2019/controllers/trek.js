import extend from "../utils/context.js";
import models from "../models/index.js";
import modifier from "../utils/modifier.js";

export default {
    get: {
        dashboard(context) {

            models.trek.getAll().then((resp) => {

                const treks = resp.docs.map(modifier);

                treks.sort((a,b) =>{
                    return b.likes - a.likes;
                })
                context.treks = treks;

                extend(context).then(function () {
                    this.partial('../views/trek/dashboard.hbs');
                });
            })
        },
        create(context) {
            extend(context).then(function () {
                this.partial('../views/trek/create.hbs');
            });
        },
        details(context) {
            const { trekId } = context.params;

            models.trek.get(trekId).then((resp) => {

                const trek = modifier(resp);

                Object.keys(trek).forEach((key) => {
                    context[key] = trek[key];
                });
                context.isOwnTrek = trek.uId === localStorage.getItem("userId");
                context.organizer = trek.username;

                extend(context).then(function () {
                    this.partial('../views/trek/details.hbs')
                })

            }).catch((e) => console.error(e));
        },
        edit(context){
            const { trekId } = context.params;

            models.trek.get(trekId).then((resp) => {

                const trek = modifier(resp);
                // console.log(trek);

                Object.keys(trek).forEach((key) => {
                    context[key] = trek[key];
                });
                context.isOwnTrek = trek.uId === localStorage.getItem("userId");
                context.username = localStorage.getItem("userEmail");

                extend(context).then(function () {
                    this.partial('../views/trek/edit.hbs')
                })

            }).catch((e) => console.error(e));
        }
    },
    post: {
        create(context) {
            const data = { ...context.params,
                uId: localStorage.getItem("userId"),
                username: localStorage.getItem("userEmail"),
                likes: 0,
            };
            // console.log(data);

            models.trek.create(data).then((resp) => {
                context.redirect('#/trek/dashboard');
            }).catch((e) => console.error(e));
        }
    },
    del: {
        close(context) {
            const { trekId } = context.params;

            models.trek.close(trekId).then((resp) => {
                context.redirect('#/trek/dashboard');
            })
        }
    },
    put: {
        like(context) {
            const { trekId } = context.params;

            models.trek.get(trekId).then((resp) => {
                const trek = modifier(resp);
                // console.log(trek);
                
                trek.likes += 1;
                
                return models.trek.update(trekId, trek)
            })
            .then((resp) => {
                context.redirect(`#/trek/dashboard`);
            })
        },
        edit(context) {
            const { trekId } = context.params;
            // console.log(context.params)

            models.trek.get(trekId).then((resp) => {
                const trek = modifier(resp);
                trek.location = context.params.location;
                trek.dateTime = context.params.dateTime;
                trek.description = context.params.description;
                trek.imageURL = context.params.imageURL;
                // console.log(trek);

                return models.trek.update(trekId, trek)
            })
            .then((resp) => {
                context.redirect(`#/trek/details/${trekId}`);
            })
        }
    }
};