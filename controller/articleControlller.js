const Article = require('../model/articleSchema');
const Comment = require('../model/commentSchema')

const addArtilce = async(req, res) => {
    const { image, title, description, context, pub_date } = req.body;
    if (!(image && title && description && context)) {
        res.status(400).json({ error: "Title, Description, Context and Tag list is required!" })
    } else {
        const article = await Article.create({
            image,
            title,
            description,
            context,
            pub_date
        });
        res.status(200).send(article)
    }
}

const artilces = async(req, res) => {
    const artilce = await Article.find()
    if (artilce) {
        res.status(200).json(artilce)
    } else {
        res.status(400).json({ error: "There is't Artilce" })
    }
}

const addArticleComment = async(req, res) => {

    const id = req.params.id
    const comment = await Comment.create(req.body)
    if (!(comment.body)) {
        res.status(400).json({ error: "Please eniter the message" })
    } else {
        try {
            await Article.findOneAndUpdate({ _id: id }, { $push: { comment: comment } })
            res.status(200).json({ ok: "OK" })
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}
const anArticle = async(req, res) => {
    try {
        const id = req.params.id
        const article = await Article.find({ _id: id })
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const editAnArticle = async(req, res) => {
    try {
        const id = req.params.id;
        const newArticle = req.body
        await Article.findOneAndUpdate({ _id: id }, {
            $set: {
                image: newArticle.image,
                title: newArticle.title,
                description: newArticle.description,
                context: newArticle.context,
                pub_date: newArticle.pub_date,
                edit_data: Date.now
            }
        })
        res.status(200).json({ "message": `Objest with ${id} succesfully updated` })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}
module.exports = {
    addArtilce,
    artilces,
    addArticleComment,
    anArticle,
    editAnArticle

}