import express from 'express';
import session from 'express-session';
import productsRouter from './routes/productRouter';
import usersRouter from './routes/userRouter';
import authRouter from './routes/authRouter';
import cookieParsing from './middlewares/cookieParsing';
import queryParsing from './middlewares/queryParsing';
import passport from 'passport';
import localStrategy from './authStrategies/localStrategy';
import facebookStrategy from './authStrategies/facebookStrategy';
import twitterStrategy from './authStrategies/twitterStrategy';
import googleStrategy from './authStrategies/googleStrategy';
import config from './config/config.json';

const app = express();

app.use(cookieParsing);
app.use(queryParsing);
app.use(express.json());
app.use(session({ secret: config.secret }));
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', localStrategy);
passport.use('facebook', facebookStrategy);
passport.use('twitter', twitterStrategy);
passport.use('google', googleStrategy);

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/auth', authRouter);

export default app;
