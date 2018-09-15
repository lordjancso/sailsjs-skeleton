var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('.tmp/public/build/')
    .setPublicPath('/build')
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableVueLoader()
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/sass/app.scss')
    .enablePostCssLoader()
    .enableVersioning()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications();

module.exports = Encore.getWebpackConfig();
