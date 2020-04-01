import controllers from '../controllers/index.js';

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');

    // home

    this.get("#/home", controllers.home.get.home);

    // user
    this.get("#/user/login", controllers.user.get.login);
    this.get("#/user/register", controllers.user.get.register);
    this.get("#/user/profile", controllers.user.get.profile);

    this.post("#/user/login", controllers.user.post.login);
    this.post("#/user/register", controllers.user.post.register);
    this.get("#/user/logout", controllers.user.get.logout);

    //trek
    this.get("#/trek/dashboard", controllers.trek.get.dashboard);
    this.get("#/trek/create", controllers.trek.get.create);
    this.get("#/trek/details/:trekId", controllers.trek.get.details);

    this.post("#/trek/create", controllers.trek.post.create);
    this.get("#/trek/close/:trekId", controllers.trek.del.close);
    this.get("#/trek/like/:trekId", controllers.trek.put.like);
});

(() => {
    app.run("#/home");
})();