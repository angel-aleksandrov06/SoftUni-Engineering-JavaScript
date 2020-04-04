import extend from "../utils/context.js";
import models from "../models/index.js";
import modifier from "../utils/modifier.js";

export default {
    get: {
        dashboard(context) {

            models.idea.getAll().then((resp) => {
                // console.log(resp)
                const ideas = resp.docs.map(modifier);

                ideas.sort((a,b) =>{
                    return b.likes - a.likes;
                })

                context.ideas = ideas;
                extend(context).then(function () {
                    this.partial('../views/idea/dashboard.hbs');
                });

            })
        },
        create(context) {
            extend(context).then(function () {
                this.partial('../views/idea/create.hbs');
            });
        },
        details(context) {
            const { ideaId } = context.params;
            // console.log(context.params);
            models.idea.get(ideaId).then((resp) => {

                const idea = modifier(resp);
                // console.log(idea);

                Object.keys(idea).forEach((key) => {
                    context[key] = idea[key];
                });
                context.isOwnIdea = idea.uId === localStorage.getItem("userId");

                extend(context).then(function () {
                    this.partial('../views/idea/details.hbs')
                })

            }).catch((e) => console.error(e));
        }
    },
    post: {
        create(context) {
            const titleCheck = context.params.title.length >= 6;
            const descriptionCheck =context.params.description.length >= 10
            const imageCheck = context.params.imageURL.startsWith('http://') || context.params.imageURL.startsWith('https://');

            if(titleCheck && descriptionCheck && imageCheck ){
                const data = { ...context.params,
                    uId: localStorage.getItem("userId"),
                    creator: localStorage.getItem("userEmail"),
                    likes: 0,
                    comments: []
                };
                // console.log(data);
    
                models.idea.create(data).then((resp) => {
                    models.notification.displaySuccess("Idea created successfully!");
                    context.redirect('#/idea/dashboard');
                }).catch((e) => console.error(e));
            }
            else{
                models.notification.displayError(`Someting went wrong`);
            }
            
        }
    },
    del: {
        close(context) {
            const { ideaId } = context.params;

            models.idea.close(ideaId).then((resp) => {
                models.notification.displaySuccess("Idea deleted successfully!");
                context.redirect('#/idea/dashboard');
            })
        }
    },
    put: {
        comment(context) {
            const { ideaId, newComment } = context.params;
            models.idea.get(ideaId).then((resp) => {
                const idea = modifier(resp);
                const currentUserEmail = localStorage.getItem("userEmail");
                const currentComment = {
                    writer: currentUserEmail,
                    comment: newComment
                }
                
                idea.comments.push(currentComment);
                
                return models.idea.update(ideaId, idea)
            })
            .then((resp) => {
                context.redirect("#/idea/dashboard");
            })
        },
        like(context) {
            const { ideaId } = context.params;

            models.idea.get(ideaId).then((resp) => {
                const idea = modifier(resp);
                // console.log(trek);
                
                idea.likes += 1;
                
                return models.idea.update(ideaId, idea)
            })
            .then((resp) => {
                context.redirect(`#/idea/dashboard`);
                // models.notification.displaySuccess("You liked the idea successfully!");
            })
        }
    }
};