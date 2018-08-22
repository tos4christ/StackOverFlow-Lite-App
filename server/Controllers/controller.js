import allData from '../../data.json';

const { data } = allData;
const controller = {};

// PARAM FUNCTION
controller.routerParam = (req, res, next) => {
    req.question = data.find(question => question.id === parseInt(req.params.qID, 10));
    if (!req.question) {
        const err = new Error('Not Found');
        return next(err.message);
    }
    return next();
};

// GET ALL QUESTION
controller.getAllQuestion = (req, res) => {
    res.json(data);
};

// GET SPECIFIC QUESTION ID
controller.getAQuestion = (req, res) => {
    res.json(req.question);
};

// POST A QUESTION
controller.postAQuestion = (req, res) => {
    const length = data.length + 1;
    const questioner = {};
    questioner.id = length;
    questioner.text = req.body.text;
    data.push(questioner);
    res.json(questioner);
};

// POST AN ANSWER
controller.postAnAnswer = (req, res) => {
    const doc = data.find(c => c.id === parseInt(req.params.qID, 10));
    const id = doc.answers.length + 1;
    const { text } = req.body;
    doc.answers.push({ text, id });
    res.json(doc.answers[id - 1]);
};

// GET SPECIFIC ANSWER DOCUMENT WHEN ANSWER ID IS AVAILABLE
controller.getAnAnswer = (req, res) => {
    const docs = data.find(c => c.id === parseInt(req.params.qID, 10));
    const answer = docs.answers[parseInt(req.params.aID, 10) - 1];
    res.json(answer);
};

// GET ALL ANSWERS IN A QUESTION
controller.getAllAnswer = (req, res) => {
    const docs = data.find(c => c.id === parseInt(req.params.qID, 10));
    const { answers } = docs;
    res.json(answers);
};

// DELETE A QUESTION
controller.deleteAQuestion = (req, res) => {
    const newQuestionArray = data.filter(datas => datas.id !== parseInt(req.params.qID, 10));
    res.json(newQuestionArray);
};


export default controller;