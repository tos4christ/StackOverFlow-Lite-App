import allData from '../../data.json';

const { data } = allData;
const questionController = {};

// GET ALL QUESTION
questionController.getAllQuestion = (req, res) => {
    res.json(data);
};

// GET SPECIFIC QUESTION ID
questionController.getAQuestion = (req, res) => {
    const doc = data.find(c => c.id === parseInt(req.params.qID, 10));
    res.json(doc);
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
