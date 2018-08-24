import allData from '../../data.json';

const { data } = allData;
const questionController = {};

// function to test IDs are numbers
const testID = (ID) => {
    return isNaN(ID*1);
}

// GET ALL QUESTION
questionController.getAllQuestion = (req, res) => {
    res.json(data);
};

// GET SPECIFIC QUESTION ID
questionController.getAQuestion = (req, res, next) => {
    if(testID(req.params.qID)) {
        return next(new Error('Specify the question ID i.e questions/<numbers only>'));
    }
    const doc = data.find(question => question.id === parseInt(req.params.qID, 10));
    res.json({
        message: 'Request is successful',
        status: 200,
        data: doc
    });
};

// POST A QUESTION
questionController.postAQuestion = (req, res) => {
    const length = data.length + 1;
    const questioner = {};
    questioner.id = length;
    questioner.text = req.body.text;
    data.push(questioner);
    res.json(questioner);
};

// DELETE A QUESTION
questionController.deleteAQuestion = (req, res) => {
    const newQuestionArray = data.filter(datas => datas.id !== parseInt(req.params.qID, 10));
    res.json(newQuestionArray);
};

export default questionController;
