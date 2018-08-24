import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/routes';
import signup from './auth/signup';
import login from './auth/login';

const app = express();


app.use(bodyParser.json());

app.use('/auth/signup', signup);
app.use('/auth/login', login);
app.use('/api/v1/questions', router);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.json(err.message);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App is now listening from Heroku on port ${port}`);
})

export default app;
