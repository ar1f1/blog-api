const mongoose = require('mongoose');
const comment = require('./commentSchema')
const auther = require('./userSchema')

const articleShema = mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    context: { type: String, required: true },
    pub_date: { type: Date, default: Date.now },
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag' }],
    auther: { type: mongoose.Schema.Types.ObjectId, ref: 'auther' },
    edit_date: Date
})

const Article = mongoose.model('Artilce', articleShema)
module.exports = Article