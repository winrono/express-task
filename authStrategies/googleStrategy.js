import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { genericVerify } from './genericVerify';

const strategy = new GoogleStrategy(
    {
        clientID:
            '752689020737-uqr3ihae7hodln2g7720hprg2acbpqhh.apps.googleusercontent.com',
        clientSecret: 'ktnh67y6Cv-CEC-IFAA1_BrJ',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    genericVerify
);

export default strategy;
