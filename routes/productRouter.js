import {Router} from 'express';
import { Product } from '../models';
import productRepo from '../repositories/productRepository';

const router = new Router();

router.get('/', (req, res) => {
    var token = req.headers['x-access-token'];
    console.log(token);
    res.send(productRepo.getProducts());
});

router.post('/', (req, res) => {
    const product = new Product(req.body.id, req.body.name, req.body.brand, req.body.price, req.body.reviews);
    const result = productRepo.addProduct(product);
    if (result){
        res.send(product);
    } else {
        res.status(422).send(`Product with id ${req.body.id} already exists`);
    }
});

router.get('/:id', (req, res) => {
    const product = productRepo.getProductById(req.params.id);
    res.send(product);
});

router.get('/:id/reviews', (req, res) => {
    const product = productRepo.getProductById(req.params.id);
    if (!product){
        res.status(204).send();
    } else {
        res.send(product.reviews);
    }
});


export default router;