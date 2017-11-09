var path = require('path');

module.exports = {
  type: 'react-app',
  webpack: {
    rules: {
      sass: {
        map: true,
        data: "@import '_variables';",
        includePaths: [path.resolve('./src/sass')]
      }
    }
  }
}
