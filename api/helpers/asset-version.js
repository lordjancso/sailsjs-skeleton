const manifest = require('../../.tmp/public/build/manifest');

module.exports = {

    inputs: {
        path: {
            type: 'string',
            required: true
        }
    },

    sync: true,

    fn: function (inputs, exits) {
        return exits.success(manifest[inputs.path]);
    }

};

