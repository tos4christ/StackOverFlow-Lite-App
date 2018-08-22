'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _data = require('../../data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = _data2.default.data;

var expectedData = data.filter(function (datas) {
    return datas.id !== 1;
});

describe('GET /Questions /Answers', function () {
    it('Test for the get all question Array', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/questions').expect(data).end(done);
    });

    it('Test for the get specific question with id 1', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/questions/1').expect(data[0]).end(done);
    });

    it('Test for the get specific question with id 2', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/questions/2').expect(data[1]).end(done);
    });

    it('Test for the get specific answer', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/questions/1/answers/1').expect(data[1].answers[0]).end(done);
    });
});

describe('DELETE /Specific Question', function () {
    it('should delete a specific question', function (done) {
        (0, _supertest2.default)(_app2.default).delete('/api/v1/questions/1').expect(expectedData).end(done);
    });
});

describe('POST /Questions /Answers', function () {
    var body = {
        text: 'This is me'
    };

    it('Should return questioner object', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/questions').send(body).expect({ id: 4, text: 'This is me' }).end(done);
    });

    it('Should return answer object', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/questions/1/answers').send(body).expect({ id: 3, text: 'This is me' }).end(done);
    });
});