const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')

const createToken = (id) => {
    return jwt.sign(id, "I love you! my queen", { expiresIn: maxAge })

}
const handle_errors = (err) => {

    let errors = { email: "", password: "" }

    // Incorrect email
    if (err.message === "Incorrect email") {
        errors.email = "This email not registered"
    }
    // incorrect password
    if (err.message === "Incorrect password")[
        errors.password = "The password is incorrect"
    ]

    // duplicate error code
    if (err.code === 11000) {
        errors.email = "email already exist"
        return errors
    }

    // user validate error
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

const loginUser = async(req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.login(userName, password)
        const token = createToken(user._id)
        res.cookie('jwt', "I love you! my queen", { httpOnlu: true, maxAge: maxAge * 60 * 1000 })
        res.status(200).json({ user: user._id })
    } catch (error) {
        const errors = handle_errors(error)
        res.status(400).json({ errors })
    }
}

const registerUser = async(req, res) => {


    // Get user input
    try {
        const { userName, email, password } = req.body
        const user = await User.create(userName, email, password)
        res.status(200).json({ user: user._id })

    } catch (error) {
        const errors = await handle_errors(error)
        res.status(400).json({ errors })


    }


};


module.exports = {
    registerUser,
    loginUser
}