module.exports.webpack = {

    entry: {
        'js/app': './assets/js/app.js',
        'css/app': './assets/sass/app.scss'
    },

    output: {
        path: __dirname + '/.tmp/public',
        filename: 'js/[name].bundle.js'
    }

};
