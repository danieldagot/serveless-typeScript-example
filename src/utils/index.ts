import { LambdaResponse } from './../types/index';
export const returnedLambdaResponse= (body :object,statusCode :number) : LambdaResponse =>{
    return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: statusCode,
        body: JSON.stringify(body),
      }
}