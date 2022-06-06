const Tag = require('../model/tagSchema')
const auth = require("..//middleware/auth")


const addTag = async(req, res) => {
    const tagName = req.body.tagName
    if (!(tagName)) {
        res.status(400).json({ error: "Please enter tag name" })
    } else {
        const tag = await Tag.create({ tagName })
        res.status(200).json(tag)
    }
}

const tags = async(req, res) => {
    const tag = await Tag.find()
    if (tag) {
        res.status(200).json(tag)
    } else { res.status(400).json({ error: "there is'n tag" }) }
}

module.exports = {
    addTag,
    tags
}