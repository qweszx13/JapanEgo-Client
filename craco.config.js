const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,//Antd Less Plugin
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#222a6e' //global ant style 지정
          },
            javascriptEnabled: true,
          },
        },  
      },
    },
  ],
};