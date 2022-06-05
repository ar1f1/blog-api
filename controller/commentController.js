const Comment = require('../model/commentSchema');
const Article = require('../model/articleSchema')

const addComment = async(req, res) => {
    const { body, article } = req.body
    if (!(body && article)) {
        res.status(400).json({ error: "please enter comment message and article ID" })
    } else {
        const isExistArticle = await Article.findOne({ article })
        if (!(isExistArticle)) { res.status(400).json({ error: `An article with this ${aricle} not exit` }) } else {
            const commetn = await Comment.create({ body, article })
            res.status(200).json(commetn)
        }
    }
}

const comments = async(req, res) => {
    const comment = await Comment.find()
    if (comment) {
        res.status(200).json(comment)
    }
}
const articleComments = async(req, res) => {

    try {
        const comment = await Comment.find({ article: req.params.id })
        res.status(200).json(comment)
    } catch { res.status(400).json({ error: `article with ${req.params.id} not exist` }) }
}

module.exports = {
    addComment,
    comments,
    articleComments
}