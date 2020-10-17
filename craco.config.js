const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'rgba(64,174,108,0.7)' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};