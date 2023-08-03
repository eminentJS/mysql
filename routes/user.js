const express = require('express')
const router = express.Router()
const {register} = require('../controllers/user')
const {getUser} = require('../controllers/user')
router.post('/register', register)
router.get('/getUser/:user_id', getUser)


module.exports = router;