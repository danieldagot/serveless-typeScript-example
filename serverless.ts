import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
// import word from '@functions/word';
import {getPartner} from '@function';


const serverlessConfiguration: AWS = {
  service: 'serveless-back',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack',"serverless-offline"],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {getPartner},
};

module.exports = serverlessConfiguration;
