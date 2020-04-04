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

    // idea
    this.get("#/idea/dashboard", controllers.idea.get.dashboard);
    this.get("#/idea/create", controllers.idea.get.create);
    this.get("#/idea/details/:ideaId", controllers.idea.get.details);

    this.post("#/idea/create", controllers.idea.post.create);
    this.get("#/idea/delete/:ideaId", controllers.idea.del.close);
    this.get("#/idea/like/:ideaId", controllers.idea.put.like);
    this.post("#/idea/comment/:ideaId", controllers.idea.put.comment);
});

(() => {
    app.run("#/home");
})();