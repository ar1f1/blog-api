const mongoose = require('mongoose')


// There is no authentication so anyone on the site can feel free to comment whatever they like
const commentSchema = mongoose.Schema({
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
})
const Comment = mongoose.model('commentSchema', commentSchema)

module.exports = Comment