const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userShema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User name is required!"],
        unique: [true, "this User name already exist please try another"]
    },
    email: {
        type: String,
        unique: [true, "this email already exist please try another"],
        required: [true, "email is required please enter an email"],
        lowercase: true,
        validate: [isEmail, "please enter a valid email"]

    },
    password: {
        type: String,
        required: [true, "password is required"],
        maxlength: [6, "The minemum password lenght is 6 characters"]

    }
});

// Hash password befor saved
userShema.pre('save', async(next) => {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
        next()
    })
    // validate user for login 
userShema.statics.login = async function(userName, password) {
    const user = await this.findOne({ userName })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        } else {
            throw Error("Incorrect password")
        }
    } else {
        throw Error("Incorrect user name")
    }
}


const User = mongoose.model('User', userShema);
module.exports = User