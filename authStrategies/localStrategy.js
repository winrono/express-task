import { Strategy as LocalStrategy } from 'passport-local';
import userRepository from '../repositories/userRepository';

let strategy = new LocalStrategy(
    {
        usernameField: 'login',
        passwordField: 'password'
    },
    function(username, password, done) {
        let user = userRepository.authenticate(username, password);
        if (user){
            done(null, user);
        } else{
            done(null, false);
        }
    }
);

export default strategy;
