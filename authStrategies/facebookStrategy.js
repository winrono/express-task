import { Strategy as FacebookStrategy } from 'passport-facebook';
import { genericVerify } from './genericVerify';

const strategy = new FacebookStrategy(
    {
        clientID: '201465263905887',
        clientSecret: '8966f108f6bbb31407c68da6d956ffc0',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'email', 'first_name']
    },
    genericVerify
);

export default strategy;
