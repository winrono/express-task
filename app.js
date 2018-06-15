import express from 'express';
import productsRouter from './routes/productRouter';
import usersRouter from './routes/userRouter';
import cookieParsing from './middlewares/cookieParsing';
import queryParsing from './middlewares/queryParsing';

const app = express();

app.use(cookieParsing);
app.use(queryParsing);

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

export default app;