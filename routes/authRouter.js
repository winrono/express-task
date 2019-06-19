import { Router } from 'express';
import config from '../config/config.json';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const router = new Router();

router.post(
    '/',
    passport.authenticate('local', { session: false }),
    (req, res) => {
        //at this point user should be already authenticated via passport and available as user property of req object
        //it's impossible to reach code below if passport authentication failed
        postAuthAction(res, req.user);
    }
);

router.get(
    '/facebook',
    passport.authenticate('facebook', {
        session: false
    })
);

router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { session: false }),
    (req, res) => {
        postAuthAction(res, req.user);
    }
);

router.get(
    '/twitter',
    passport.authenticate('twitter')
);

router.get(
    '/twitter/callback',
    passport.authenticate('twitter'),
    (req, res) => {
        postAuthAction(res, req.user);
    }
);

router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'https://www.googleapis.com/auth/userinfo.email'] })
);

router.get(
    '/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        postAuthAction(res, req.user);
    }
);

function postAuthAction(res, user){
    var token = jwt.sign({ login: user.login }, config.secret, {
        expiresIn: '1d'
    });
    res.send({
        data: {
            user: {
                email: user.email,
                username: user.login
            }
        },
        token: token
    });
}

export default router;
