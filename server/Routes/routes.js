import { Router } from 'express';
import questionController from '../Controllers/questionController';
import answerController from '../Controllers/answerController';

const router = Router();

// GET ALL QUESTIONS
router.get('/', questionController.getAllQuestion);


// GET SPECIFIC QUESTION ID
router.get('/:qID', questionController.getAQuestion);


// POST A QUESTION
router.post('/', questionController.postAQuestion);


// POST AN ASNWER
router.post('/:qID/answers', answerController.postAnAnswer);

// GET SPECIFIC ANSWER
router.get('/:qID/answers/:aID', answerController.getAnAnswer);

// GET ALL ANSWERS FOR A QUESTION
router.get('/:qID/answers', answerController.getAllAnswer);

// DELETE A SPECIFIC QUESTION
router.delete('/:qID', questionController.deleteAQuestion);

export default router;
