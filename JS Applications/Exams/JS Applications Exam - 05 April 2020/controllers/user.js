import models from '../models/index.js';
import extend from '../utils/context.js';

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
                context.redirect('#/user/login');
            })
        },
    },
    post: {
        login(context) {
            const { email, password } = context.params;
            models.user.login(email, password)
                .then((resp) => {
                    context.user = resp;
                    context.username = resp.email;
                    context.isLoggedIn = true;
                    context.redirect('#/home');
                })
                .catch((e) => console.error(e));
        },
        register(context) {
            const { email, password, repPass } = context.params;

            if (password === repPass) {
                models.user.register(email, password)
                    .then((resp) => {
                        context.user = resp;
                        context.username = resp.email;
                        context.isLoggedIn = true;
                        context.redirect('#/home');
                    })
                    .catch((e) => console.error(e));
            }
        }
    }
};