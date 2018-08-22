import express from 'express';
import bodyParser from 'body-parser';

import router from './Routes/routes';

const app = express();


app.use(bodyParser.json());

app.use('/questions', router);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status(404);
    next(err);
});

app.use((err, req, res) => {
    res.json(err);
});

export default app;