import {Router} from 'express';
import userRepo from '../repositories/userRepository';

const router = new Router();

router.get('/', (req, res) => {
    res.send(userRepo.getUsers());
});

export default router;