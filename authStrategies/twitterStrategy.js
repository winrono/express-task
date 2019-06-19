import { Strategy as TwitterStrategy } from 'passport-twitter';
import { genericVerify } from './genericVerify';

const strategy = new TwitterStrategy(
    {
        consumerKey: 'Rd3dj0jS9kbV7WCnEOUdTAigi',
        consumerSecret: '8udxHv4Hqkk2N4SJ30yXDvOwEoER2qSPqLH4qWxmq0efz9Ptso',
        includeEmail: true,
        userProfileURL  : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    genericVerify
);

export default strategy;
