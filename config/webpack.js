var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('.tmp/build')
    .setPublicPath('/build')
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableVueLoader()
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/sass/app.scss')
    .enableVersioning()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications();

module.exports = Encore.getWebpackConfig();
