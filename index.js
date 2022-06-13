require('./config/database').connect()
const express = require('express')
const user = require('./route/userRoute')
const article = require('./route/articleRoute')
const tag = require('./route/tagRoute')
const comment = require('./route/commentRoute')
const path = require('path')
const ejs = require('ejs')

// const front_route = require('./route/front_route')


const app = express()
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(express.static('public'))
app.use('/api/article', article);
app.use('/api/tag', tag)
app.use('/api/comment', comment)
app.use('/api/user', user)
    // app.use('/front', front_route)





app.listen(8080, () => {
    console.log(`Server running on port 8080`)
})