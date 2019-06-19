export default function queryParsing(req, res, next){
    //request.query is parsed already
    req.parsedQuery = req.query;
    next();
}