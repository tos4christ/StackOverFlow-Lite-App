import allData from '../../data.json';

const { data } = allData;
const answerController = {};

// function to validate for aID
const testaID = (ID) => {
    return isNaN(ID*1);
}

// function to check for a specific ID
const findAnswer = (QID, aID) => {
    const qID = QID*1;
    const Question = data.find( question => question.id === qID);
    const Answer = Question.answers[(aID*1) - 1];
    return Answer;
}

// POST AN ANSWER
answerController.postAnAnswer = (req, res) => {
    const doc = data.find(question => question.id === parseInt(req.params.qID, 10));
    const id = doc.answers.length + 1;
    const { text } = req.body;
    doc.answers.push({ text, id });
    res.status(201).json(doc.answers[id - 1]);
};

// GET SPECIFIC ANSWER DOCUMENT WHEN ANSWER ID IS AVAILABLE
answerController.getAnAnswer = (req, res, next) => {
    if(testaID(req.params.aID)) {
        return next(new Error('Answer ID can only be an integer i.e answers/<numbers only>'));
    }
    const Answer = findAnswer(req.params.qID, req.params.aID);
    if(!Answer) {
        return next(new Error('Answer not found'));
    }
    res.status(200).json(Answer);
};

// GET ALL ANSWERS IN A QUESTION
answerController.getAllAnswer = (req, res) => {
    const Question = data.find(question => question.id === parseInt(req.params.qID, 10));
    const { answers } = Question;
    res.status(200).json(answers);
};

export default answerController;
