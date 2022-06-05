const express = require('express')
const article = require('../controller/articleControlller')

const router = express.Router()

router.use(express.json())
router.post('/article', article.addArtilce)
router.get('/article', article.artilces)
router.post('/article/:id', article.addArticleComment)
router.get('/article/:id', article.anArticle)
router.put('/article/:id', article.editAnArticle)


module.exports = router