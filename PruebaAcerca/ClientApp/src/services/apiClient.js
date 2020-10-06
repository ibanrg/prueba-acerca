
export async function apiCall(uri, method, parameters) {
    var request = {
        method: method
    };

    if (parameters != null) {
        request.body = JSON.stringify(parameters);
        request.headers = {
            "Content-Type": "application/json; charset=utf-8"
        };
    }
    return await fetch(uri, request);
}
