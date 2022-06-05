const mongoose = require('mongoose')

const tagArticle = mongoose.Schema({
    tag: { type: mongoose.Schema.Types.ObjectId, ref: 'tag' },
    artilce: { type: mongoose.Schema.Types.ObjectId, ref: 'article' }
})

const TagArticle = mongoose.model('tagArticle', tagArticle)

module.exports = TagArticle