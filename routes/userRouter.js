import {Router} from 'express';
import userRepo from '../repositories/userRepository';
import checkToken from '../middlewares/checkToken';


const router = new Router();

router.use(checkToken);

router.get('/', (req, res) => {
    res.send(userRepo.getUsers());
});

export default router;