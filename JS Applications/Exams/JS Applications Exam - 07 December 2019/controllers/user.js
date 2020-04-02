import models from '../models/index.js';
import extend from '../utils/context.js';
import modifier from '../utils/modifier.js'

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
                context.redirect('#/home');
            })
        },
        profile(context) {
            models.trek.getAll().then((resp) => {
                const treks = [];
                const treksObj = resp.docs.map(modifier);
                Object.keys(treksObj).forEach((key) => {
                    // console.log(treksObj[key])
                    if(localStorage.getItem("userId") === treksObj[key].uId){
                        treks.push(treksObj[key].location);
                    }
                });
                context.treks = treks;
                context.wishedTreks = treks.length;
                // console.log(treks);

                extend(context).then(function () {
                    this.partial('../views/user/profile.hbs');
                });
            });
            
        },
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