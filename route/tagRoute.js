const express = require('express')
const tag = require('../controller/tagController')

const router = express.Router()

router.post('/tag', tag.addTag)
router.get('/tag', tag.tags)


module.exports = router