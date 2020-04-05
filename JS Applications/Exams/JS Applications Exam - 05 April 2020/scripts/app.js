import controllers from '../controllers/index.js';

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');

    // home
    this.get("#/home", controllers.home.get.home);

    // guestHome
    this.get("#/guestHome", controllers.user.get.login);

    // user
    this.get("#/user/login", controllers.user.get.login);
    this.get("#/user/register", controllers.user.get.register);

    this.post("#/user/login", controllers.user.post.login);
    this.post("#/user/register", controllers.user.post.register);
    this.get("#/user/logout", controllers.user.get.logout);

    //article
    this.get("#/article/create", controllers.article.get.create);
    this.get("#/article/edit/:articleId", controllers.article.get.edit);
    this.get("#/article/details/:articleId", controllers.article.get.details);

    this.post("#/article/create", controllers.article.post.create);
    this.post("#/article/edit/:articleId", controllers.article.put.edit);
    this.get("#/article/delete/:articleId", controllers.article.del.close);
});

(() => {
    app.run("#/guestHome");
})();