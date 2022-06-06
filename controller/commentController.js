const Comment = require('../model/commentSchema');
const Article = require('../model/articleSchema')


const comments = async(req, res) => {
    const comment = await Comment.find()
    if (comment) {
        res.status(200).json(comment)
    }
}

const editAComment = async(req, res) => {
    try {
        const id = req.params.id
        const newComment = req.body
        await Comment.findOneAndUpdate({ _id: id }, {
            $set: {
                body: newComment.body,
                date: Date.now()

            }
        });
        res.status(200).json({ newComment })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}
module.exports = {
    comments,
    editAComment
}