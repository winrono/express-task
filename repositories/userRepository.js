import { User } from '../models';
import _ from 'lodash';

//according to task app should be able to only return all users without any other functionality

class UserRepository {
    constructor() {
        this.users = [
            new User('Raman', 'Nasovich', 'roman@test.com', 'test1', '12345678'),
            new User('Ivan', 'Ivanov', 'ivan@test.by', 'test2', '87654321'),
            new User('Petr', 'Petrov', 'petr@test.uk', 'test3', '11111111')
        ];
    }
    getUsers(){
        return this.users;
    }
    authenticate(login, password){
        return _.find(this.users, {login: login, password: password});
    }
}

export default new UserRepository();
