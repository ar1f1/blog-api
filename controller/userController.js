const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
    // const auth = require("../middleware/auth");

const User = require('../model/userSchema')

// const express = require('express');

// const app = express()
// app.use(express.json());


// app.post("/welcome", auth, (req, res) => {
//     res.status(200).send("Welcome 🙌 ");
// });

const registerUser = async(req, res) => {
    const { userName, email, password } = req.body;
    if (!(userName && email && password)) {
        res.status(400).json({ error: "Please enter all of fields(userName, email and password)" });
    } else {
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).json({ error: "User Already Exist. Please Login" });
        } else {
            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                userName,
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                password: encryptedPassword,
            });
            const token = jwt.sign({ user_id: user._id, email },
                process.env.TOKEN_KEY, {
                    expiresIn: "2m",
                }
            );
            user.token = token;
            res.status(200).json(user);
        }
    }

};

const loginUser = async(req, res) => {


    // Get user input
    const { email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
        res.status(400).json({ error: "Please enter email and password!" })
    } else {
        // Validate if user exist in our database
        const user = await User.findOne({ email });
        if (user == null) { res.status(400).json({ error: "The email you have've entred is incorrect" }) } else {
            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign({ user_id: user._id, email },
                    process.env.TOKEN_KEY, {
                        expiresIn: "1h",
                    }
                );

                // save user token
                user.token = token;

                // user
                res.status(200).json(user);
            } else { res.status(400).json({ error: "The password you have've entered is inccorect!" }) }

        }


    }


};


module.exports = {
    registerUser,
    loginUser
}