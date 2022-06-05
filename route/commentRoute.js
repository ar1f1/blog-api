const express = require('express');
const comment = require('../controller/commentController')

const router = express.Router()

router.use(express.json())

router.post('/comment', comment.addComment);
router.get('/comment', comment.comments)
router.get('/comment/:id', comment.articleComments)



module.exports = router