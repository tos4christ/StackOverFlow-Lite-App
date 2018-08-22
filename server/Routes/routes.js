import { Router } from 'express';
import controller from '../Controllers/controller';

const router = Router();


// GET SPECIFIC QUESTION DOCUMENT WHEN QUESTION ID IS AVAILABLE
router.param('qID', controller.routerParam);


// GET ALL QUESTIONS
router.get('/', controller.getAllQuestion);


// GET SPECIFIC QUESTION ID
router.get('/:qID', controller.getAQuestion);


// POST A QUESTION
router.post('/', controller.postAQuestion);


// POST AN ASNWER
router.post('/:qID/answers', controller.postAnAnswer);

// GET SPECIFIC ANSWER
router.get('/:qID/answers/:aID', controller.getAnAnswer);

// GET ALL ANSWERS FOR A QUESTION
router.get('/:qID/answers', controller.getAllAnswer);

// DELETE A SPECIFIC QUESTION
router.delete('/:qID', controller.deleteAQuestion);

export default router;
