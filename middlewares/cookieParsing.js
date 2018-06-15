//parses cookie to JavaScript object and attach it to request stream
export default function cookieParsing(req, res, next) {
    if (req.headers.cookie) {
        req.parsedCookies = req.headers.cookie
            .split(/[;] */)
            .reduce(function(result, pairStr) {
                var arr = pairStr.split('=');
                if (arr.length === 2) {
                    result[arr[0]] = arr[1];
                }
                return result;
            }, {});
    }
    next();
}
