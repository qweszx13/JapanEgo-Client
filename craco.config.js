const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,//Antd Less Plugin
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#4F45E4' 
          },//global ant style 지정
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};