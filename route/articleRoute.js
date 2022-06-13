const express = require('express')
const auth = require('../middleware/auth')
const article = require('../controller/articleControlller')

const router = express.Router()
router.use(express.json())

// to add new article
router.post('/article', article.addArtilce)

// for get all artilces
router.get('/article', auth.require_auth, article.artilces)

// to get an specific article
router.get('/:id', article.anArticle)

// Comment ot an article with id 
router.post('/:id/comment', article.commentToArticle)

// to get all commetns of an artilce with an artilce id 
router.get('/:id/comment', article.articleComments)

// to update an artilce with id
router.put('/article/:id', article.editAnArticle)

// to get all tags of an article
router.get('/:id/tags', article.getTags)

// to add tags to an article
router.post('/:id/tags', article.tagToArticle)




module.exports = router