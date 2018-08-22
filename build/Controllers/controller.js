'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = require('../../data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = _data2.default.data;

var controller = {};

// PARAM FUNCTION
controller.routerParam = function (req, res, next) {
    req.question = data.find(function (question) {
        return question.id === parseInt(req.params.qID, 10);
    });
    if (!req.question) {
        var err = new Error('Not Found');
        return next(err.message);
    }
    return next();
};

// GET ALL QUESTION
controller.getAllQuestion = function (req, res) {
    res.json(data);
};

// GET SPECIFIC QUESTION ID
controller.getAQuestion = function (req, res) {
    res.json(req.question);
};

// POST A QUESTION
controller.postAQuestion = function (req, res) {
    var length = data.length + 1;
    var questioner = {};
    questioner.id = length;
    questioner.text = req.body.text;
    data.push(questioner);
    res.json(questioner);
};

// POST AN ANSWER
controller.postAnAnswer = function (req, res) {
    var doc = data.find(function (c) {
        return c.id === parseInt(req.params.qID, 10);
    });
    var id = doc.answers.length + 1;
    var text = req.body.text;

    doc.answers.push({ text: text, id: id });
    res.json(doc.answers[id - 1]);
};

// GET SPECIFIC ANSWER DOCUMENT WHEN ANSWER ID IS AVAILABLE
controller.getAnAnswer = function (req, res) {
    var docs = data.find(function (c) {
        return c.id === parseInt(req.params.qID, 10);
    });
    var answer = docs.answers[parseInt(req.params.aID, 10) - 1];
    res.json(answer);
};

// GET ALL ANSWERS IN A QUESTION
controller.getAllAnswer = function (req, res) {
    var docs = data.find(function (c) {
        return c.id === parseInt(req.params.qID, 10);
    });
    var answers = docs.answers;

    res.json(answers);
};

// DELETE A QUESTION
controller.deleteAQuestion = function (req, res) {
    var newQuestionArray = data.filter(function (datas) {
        return datas.id !== parseInt(req.params.qID, 10);
    });
    res.json(newQuestionArray);
};

exports.default = controller;