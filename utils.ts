import { Handler, Context, APIGatewayEvent } from 'aws-lambda'
import querystring from 'querystring'

export const requestParser = (event, context: Context) => {
    let params: querystring.ParsedUrlQuery = {}
    if (event?.pathParameters?.params)
        params = querystring.parse(event.pathParameters.params)

    let body: any = {}
    if (event.body) body = JSON.parse(event.body)

    return {
        params,
        body,
    }
}

export const corsAllowHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
}
