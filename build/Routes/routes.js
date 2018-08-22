'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('../Controllers/controller.js');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// GET SPECIFIC QUESTION DOCUMENT WHEN QUESTION ID IS AVAILABLE
router.param('qID', _controller2.default.routerParam);

//GET ALL QUESTIONS
router.get('/', _controller2.default.getAllQuestion);

//GET SPECIFIC QUESTION ID
router.get('/:qID', _controller2.default.getAQuestion);

//POST A QUESTION
router.post('/', _controller2.default.postAQuestion);

//POST AN ASNWER
router.post('/:qID/answers', _controller2.default.postAnAnswer);

//GET SPECIFIC ANSWER
router.get('/:qID/answers/:aID', _controller2.default.getAnAnswer);

//GET ALL ANSWERS FOR A QUESTION
router.get('/:qID/answers', _controller2.default.getAllAnswer);

//DELETE A SPECIFIC QUESTION
router.delete('/:qID', _controller2.default.deleteAQuestion);

exports.default = router;