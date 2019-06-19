import { User } from '../models';

//according to task app should be able to only return all users without any other functionality

class UserRepository {
    constructor() {
        this.users = [
            new User('Raman', 'Nasovich'),
            new User('Ivan', 'Ivanov'),
            new User('Petr', 'Petrov')
        ];
    }
    getUsers(){
        return this.users;
    }
}

export default new UserRepository();
