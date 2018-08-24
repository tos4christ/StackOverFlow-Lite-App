import allData from '../../data.json';

const { data } = allData;
const answerController = {};

// POST AN ANSWER
answerController.postAnAnswer = (req, res) => {
    const doc = data.find(question => question.id === parseInt(req.params.qID, 10));
    const id = doc.answers.length + 1;
    const { text } = req.body;
    doc.answers.push({ text, id });
    res.json(doc.answers[id - 1]);
};

// GET SPECIFIC ANSWER DOCUMENT WHEN ANSWER ID IS AVAILABLE
answerController.getAnAnswer = (req, res) => {
    const docs = data.find(question => question.id === parseInt(req.params.qID, 10));
    const answer = docs.answers[parseInt(req.params.aID, 10) - 1];
    res.json(answer);
};

// GET ALL ANSWERS IN A QUESTION
answerController.getAllAnswer = (req, res) => {
    const docs = data.find(question => question.id === parseInt(req.params.qID, 10));
    const { answers } = docs;
    res.json(answers);
};

export default answerController;
