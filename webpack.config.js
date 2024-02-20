const path = require('path');

module.exports = {
    entry: './Script',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
          {
            test: /\.json$/,
            loader: 'json-loader',
            type: 'javascript/auto', 
          },
        ],
      },
};