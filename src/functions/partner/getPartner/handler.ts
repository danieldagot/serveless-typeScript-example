import 'source-map-support/register';
import type { APIGatewayProxyEvent, APIGatewayProxyResult,  } from "aws-lambda"
import { middyfy } from '$libs/lambda';
import { LambdaResponse } from '$types/index';
import { returnedLambdaResponse } from '$utils/index';

const getPartner  =async (event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
  const {partnerId} = event.pathParameters
  return returnedLambdaResponse({hello:partnerId},200)
  
};

export const main = middyfy(getPartner);
