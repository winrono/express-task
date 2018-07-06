import { Router } from 'express';
import userRepo from '../repositories/userRepository';
import jwt from 'jsonwebtoken';

const router = new Router();

router.post('/', (req, res) => {
    var user = userRepo.authenticate(req.body.login, req.body.password);
    if (user) {
        var token = jwt.sign(user.login, 'superSecret');
        res.send({
            data: {
                user: {
                    email: user.email,
                    username: user.login
                }
            },
            token: token
        });
    } else {
        res.status(404).send({ data: 'Failed to authenticate user with provided login and password' });
    }
});

export default router;