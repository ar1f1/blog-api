const jwt = require("jsonwebtoken");
const User = require('../model/userSchema')

module.exports.require_auth = async(req, res, next) => {
    const token = req.cookies.jwt
    console.log(token)
    if (token) {
        jwt.verify(token, "I love you! my queen", (err, decodedToken) => {
            if (err) {
                res.status(400).json({ Error: " required login" })
            } else {
                next()
            }
        })
    } else {
        res.status(400).json({ Error: " required login" })
    }
}