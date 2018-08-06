import {Router} from 'express';
import userRepo from '../repositories/userRepository';
import checkToken from '../middlewares/checkToken';


const router = new Router();

//router.use(checkToken);

router.get('/', (req, res) => {
    userRepo.getUsers().then((users) => {
        res.send(users);
    });
});

export default router;