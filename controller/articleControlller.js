const Article = require('../model/articleSchema');
const Comment = require('../model/commentSchema')


// to add new article
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


// for get all artilces
const artilces = async(req, res) => {
    const artilce = await Article.find()
    if (artilce) {
        res.status(200).json(artilce)
    } else {
        res.status(400).json({ error: "There is't Artilce" })
    }
}

// to get an specific article
const anArticle = async(req, res) => {
    try {
        const id = req.params.id
        const article = await Article.find({ _id: id })
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


// Comment ot an article with id 
const commentToArticle = async(req, res) => {

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


// to get all commetns of an artilce with an artilce id 
const articleComments; //TODO


// to update an artilce with id
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


// to get all tags of an article
const getTags;

// to add tags to an article
const tagToArticle;
module.exports = {
    addArtilce,
    artilces,
    anArticle,
    commentToArticle,
    articleComments,
    editAnArticle,
    getTags,
    tagToArticle

}