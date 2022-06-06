const express = require('express')
const tag = require('../controller/tagController')

const router = express.Router()

router.post('/', tag.addTag)
router.get('/', tag.tags)


module.exports = router