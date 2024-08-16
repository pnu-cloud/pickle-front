const path = require('path');

module.exports = {
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      pages: path.resolve(__dirname, 'src/pages'),
      router: path.resolve(__dirname, 'src/router'),
    },
    extensions: ['.js', '.jsx', '.css'],
  },
};
