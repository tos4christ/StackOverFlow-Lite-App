import allData from '../../data.json';

const { data } = allData;
const questionController = {};
let delArray = [];

// function to test IDs are numbers
const testqID = (ID) => {
    return isNaN(ID*1);
}

// function to test if IDs exist in the collection
const findQuestion = (ID) => {
    ID = ID*1;
    const Question = data.find( question => question.id === (ID) );
    return Question;
}

// GET ALL QUESTION
questionController.getAllQuestion = (req, res) => {
    res.json({
        message: 'Request is successful',
        status: 200,
        data
    });
};

// GET SPECIFIC QUESTION ID
questionController.getAQuestion = (req, res, next) => {
    if(testqID(req.params.qID)) {
        return next(new Error('Question ID can only be an integer i.e questions/<numbers only>'));
    }
    const Question = findQuestion(req.params.qID);
    if(Question) {
        res.status(200).json({
        message: 'Request is successful',
        status: 200,
        data: Question
    });
    } else {
        res.status(404).json({
            message: 'Question Not Found',
            status: 404
        });
        return next();
    }
    
};

// POST A QUESTION
questionController.postAQuestion = (req, res) => {
    const length = data.length + 1;
    const questioner = {};
    questioner.id = length;
    questioner.text = req.body.text;
    data.push(questioner);
    res.status(201).json(questioner);
};

// DELETE A QUESTION
questionController.deleteAQuestion = (req, res, next) => {
    const check = delArray.find(del => req.params.qID*1 === del);
    if(check) {
        return next(new Error('Question not found'));
    }
    delArray.push(req.params.qID*1);
    const Question = findQuestion(req.params.qID);
    const newQuestionArray = data.filter(datas => datas.id !== parseInt(req.params.qID, 10));
    res.status(200).json({message: "deleted a question"});
};

export default questionController;
