
import request from 'supertest';
import app from '../app';
import allData from '../../data.json';

const { data } = allData;
const expectedData = data.filter(datas => datas.id !== 1);

describe('GET /Questions /Answers', () => {
    it('Test for the get all question Array', (done) => {
        request(app)
        .get('/api/v1/questions')
        .expect(200)
        .expect({
        message: 'Request is successful',
        status: 200,
        data
    })
        .end(done);
    });


    it('Test for the get specific question with id 1', (done) => {
        request(app)
        .get('/api/v1/questions/1')
        .expect(200)
        .expect({
        message: 'Request is successful',
        status: 200,
        data: data[0]
    })
        .end(done);
    });


    it('Test for the get specific question with id 2', (done) => {
        request(app)
        .get('/api/v1/questions/2')
        .expect(200)
        .expect({
        message: 'Request is successful',
        status: 200,
        data: data[1]
    })
        .end(done);
    });


    it('Test for the get specific answer', (done) => {
        request(app)
        .get('/api/v1/questions/1/answers/1')
        .expect(200)
        .expect(data[1].answers[0])
        .end(done);
    });
});

describe('DELETE /Specific Question', () => {
    it('should delete a specific question', (done) => {
        request(app)
            .delete('/api/v1/questions/1')
            .expect(200)
            .expect({message: "deleted a question"})
            .end(done);
    });
});

describe('POST /Questions /Answers', () => {
    const body = {
        text: 'This is me',
    };

    it('Should return questioner object', (done) => {
        request(app)
            .post('/api/v1/questions')
            .send(body)
            .expect(201)
            .expect({ id: 4, text: 'This is me' })
            .end(done);
    });

    it('Should return answer object', (done) => {
        request(app)
            .post('/api/v1/questions/1/answers')
            .send(body)
            .expect(201)
            .expect({ id: 3, text: 'This is me' })
            .end(done);
    });
});
