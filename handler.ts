import { Handler, Context } from 'aws-lambda'
import { requestParser, corsAllowHeader } from './utils'

// You can define the type of header to respond to by default.
let headers = {}
headers = {
    ...headers,
    ...corsAllowHeader,
}

// Function name "yourFunctionName" must be changed.
export const yourFunctionName: Handler = async (
    event: any,
    context: Context
) => {
    // The request values are contained here.
    const { body, params } = requestParser(event, context)

    // The responses to be returned are contained here.
    let results: any = {}

    // You can write the handler code here.

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(results),
    }
}
