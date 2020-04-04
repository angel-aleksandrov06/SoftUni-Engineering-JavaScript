import models from '../models/index.js';
import extend from '../utils/context.js';
import modifier from '../utils/modifier.js';

export default {
    get: {
        login(context) {
            extend(context).then(function () {
                this.partial("../views/user/login.hbs");
            });
        },
        register(context) {
            extend(context).then(function () {
                this.partial("../views/user/register.hbs");
            });
        },
        logout(context) {
            models.user.logout().then((resp) => {
                models.notification.displaySuccess("Logout successful!");
                context.redirect('#/home');
            })
        },
        profile(context) {
            models.idea.getAll().then((resp) => {
                const ideas = [];
                const ideaObj = resp.docs.map(modifier);
                Object.keys(ideaObj).forEach((key) => {
                    // console.log(ideaObj[key])
                    if (localStorage.getItem("userId") === ideaObj[key].uId) {
                        ideas.push(ideaObj[key].title);
                    }
                });
                context.ideas = ideas;
                context.wishedIdeas = ideas.length;
                // console.log(ideas);

                extend(context).then(function () {
                    this.partial('../views/user/profile.hbs');
                });
            });

        }
    },
    post: {
        login(context) {
            const { username, password } = context.params;

            models.user.login(username, password)
                .then((resp) => {
                    context.user = resp;
                    context.username = resp.email;
                    context.isLoggedIn = true;
                    models.notification.displaySuccess("Login successful!");
                    context.redirect('#/idea/dashboard');
                })
                .catch(() => {
                    models.notification.displayError(`Invalid credentials!`);
                    document.getElementById("inputUsername").value = "";
                    document.getElementById("inputPassword").value = "";
                })
        },
        register(context) {
            const { username, password, repeatPassword } = context.params;

            if (password === repeatPassword && username.length >= 3 && password.length >= 3) {
                models.user.register(username, password)
                    .then((resp) => {
                        context.user = resp;
                        context.username = resp.email;
                        context.isLoggedIn = true;
                        context.redirect('#/idea/dashboard');
                        models.notification.displaySuccess("User registration successful!");
                    })
                    .catch(() => {
                        models.notification.displayError(`A user with this email already exists!`);
                        document.getElementById("inputUsername").value = "";
                        document.getElementById("inputPassword").value = "";
                        document.getElementById("inputRePassword").value = "";
                    });
            }
        }
    }
};