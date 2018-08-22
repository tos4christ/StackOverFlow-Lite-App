
import request from 'supertest';
import { describe, it } from 'mocha';
import app from '../app';
import allData from '../../data.json';

const { data } = allData;
const expectedData = data.filter(datas => datas.id !== 1);

describe('GET /Questions /Answers', () => {
    it('Test for the get all question Array', (done) => {
        request(app).get('/questions').expect(data).end(done);
    });


    it('Test for the get specific question with id 1', (done) => {
        request(app).get('/questions/1').expect(data[0]).end(done);
    });


    it('Test for the get specific question with id 2', (done) => {
        request(app).get('/questions/2').expect(data[1]).end(done);
    });


    it('Test for the get specific answer', (done) => {
        request(app).get('/questions/1/answers/1').expect(data[1].answers[0]).end(done);
    });
});

describe('DELETE /Specific Question', () => {
    it('should delete a specific question', (done) => {
        request(app)
            .delete('/questions/1')
            .expect(expectedData)
            .end(done);
    });
});

describe('POST /Questions /Answers', () => {
    const body = {
        text: 'This is me',
    };

    it('Should return questioner object', (done) => {
        request(app)
            .post('/questions')
            .send(body)
            .expect({ id: 4, text: 'This is me' })
            .end(done);
    });

    it('Should return answer object', (done) => {
        request(app)
            .post('/questions/1/answers')
            .send(body)
            .expect({ id: 3, text: 'This is me' })
            .end(done);
    });
});
