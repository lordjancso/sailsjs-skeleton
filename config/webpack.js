module.exports = {

    mode: 'development',

    entry: {
        'js/app': './assets/js/app.js',
        'css/app': './assets/sass/app.scss'
    },

    output: {
        path: __dirname + '/.tmp/public',
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }

};
