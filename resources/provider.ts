export default {
    name: aws,
    runtime: 'nodejs12.x',
    stage: 'dev',
    region: 'eu-west-1',
    apiGateway: {
      shouldStartNameWithService: true,
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      REGION: '${self:custom.region}',
      STAGE: '${self:custom.stage}',
      LIST_TABLE: '${self:custom.list_table}',
      TASKS_TABLE: '${self:custom.tasks_table}',
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:DescribeTable',
          'dynamodb:Query',
          'dynamodb:Scan',
          'dynamodb:GetItem',
          'dynamodb:PutItem',
          'dynamodb:UpdateItem',
          'dynamodb:DeleteItem'
        ],
        Resource: [
          {"Fn::GetAtt": [ 'ListTable', 'Arn' ]},
          {"Fn::GetAtt": [ 'TasksTable', 'Arn' ]}
        ]
      }
    ],
    profile: '${self:custom.profile.${self:custom.stage}}'
  }


