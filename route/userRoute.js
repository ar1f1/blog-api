const user = require('../controller/userController')
const express = require('express')

const router = express.Router()


router.use(express.json())
router.post('/register', user.registerUser)
router.post('/login', user.loginUser)

module.exports = router