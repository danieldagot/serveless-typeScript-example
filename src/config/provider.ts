import type { AWS } from '@serverless/typescript';


const provider: AWS["provider"] = {
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
}
export default provider; 