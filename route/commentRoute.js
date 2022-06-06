const express = require('express');
const comment = require('../controller/commentController')

const router = express.Router()

router.use(express.json())

router.get('/', comment.comments)
router.put('/:id', comment.editAComment)



module.exports = router