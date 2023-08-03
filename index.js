const express = require('express')
const app = express()
const port = 5000
const dbConnection = require('./config/db')
app.use(express.json())     // express body-parser
const userRoute = require('./routes/user')


app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'OK'
    })
})

app.use('/user', userRoute)

dbConnection.connect((err) => {
    if (err) {
        return console.log(`An error occured ${err.message}`);
    } 
    app.listen(port, () => {
        console.log(`app is up and working on port ${port}`)
      })
});


app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'Not found'
    })
})