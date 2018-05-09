export function success(body) {
    return buildResponse(200, body);
}

export function failure(body) {
    return buildResponse(500, body);
}

// Manages the building of response objects
function buildResponse(statusCode, body) {
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Controll-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}