import models from '../models/index.js';
import exted from '../utils/context.js';

export default {
    get: {
        login(context) {
            exted(context).then(function () {
                this.partial("../views/user/login.hbs");
            });
        },
        register(context) {
            exted(context).then(function () {
                this.partial("../views/user/register.hbs");
            });
        },
        logout(context) {
            models.user.logout().then((resp) => {
                context.redirect('#/home');
            })
        },
        profile(context) {
            exted(context).then(function () {
                this.partial("../views/user/profile.hbs");
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
                    context.redirect('#/trek/dashboard');
                })
                .catch((e) => console.error(e))
        },
        register(context) {
            const { username, password, rePassword } = context.params;

            if (password === rePassword && username.length>= 3 && password.length >= 6) {
                models.user.register(username, password)
                    .then((resp) => {
                        context.user = resp;
                        context.username = resp.email;
                        context.isLoggedIn = true;
                        context.redirect('#/trek/dashboard');
                    })
                    .catch((e) => console.error(e));
            }
        }
    }
};