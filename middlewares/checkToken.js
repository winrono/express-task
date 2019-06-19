import jwt from 'jsonwebtoken';
import config from '../config/config.json';

export default function checkToken(req, res, next) {
    let token = req.headers['x-access-token'];
    if (token){
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err){
                res.status(403).send({success: false, message: 'Failed to authenticate token'});
            } else {
                next();
            }
        });
    } else{
        res.status(403).send({success: false, message: 'No token provided'});
    }
}
