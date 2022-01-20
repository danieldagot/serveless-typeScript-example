import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
// import word from '@functions/word';
import { getPartner } from '$functions/index';
import provider from '$config/provider';


const serverlessConfiguration: AWS = {
  service: 'serverless-back',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', "serverless-offline", "serverless-domain-manager"],
  provider,
  // import the function via paths
  functions: { getPartner },
};

module.exports = serverlessConfiguration;
