import _ from 'lodash';
import {User} from '../models';

//according to task app should be able to only return all users without any other functionality

class UserRepository {
    async getUsers(){
        const users = await User.all();
        return users;
    }
    async authenticate(login, password){
        const user = await User.findOne({
            where: {
                login: login,
                password: password
            }
        });
        return user;
    }
}

export default new UserRepository();
