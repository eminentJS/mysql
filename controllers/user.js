const {v4: uuidv4} = require('uuid');
const database = require('../config/db');
const {getAUserFromDb} = require('../utils/helper');


const register = (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json({
            status: "error",
            message: 'Name is required'
        })
    }   
    const user_id = uuidv4();

        database.query({
        sql: `INSERT INTO users (user_id, name) VALUES (?, ?)`,
        values: [user_id, name]
        }, (err, result, field) => {
        if (err) {
        return res.status(500).json({
            status: "error",
            message: err.message || "An error occurred"
        })
    }
    res.status(201).json({
        status: 201,
        message: 'User created successfully'
    })
})
}

const getUser = async (req, res) => {
    const {user_id} = req.params
    if (!user_id) {
        return res.status(400).json({
            status: "error",
            message: 'User ID is required'
        })
    }

    const user = await getAUserFromDb(user_id)
    if (!user) {
        return res.status(404).json({
            status: "error",
            message: 'User not found'
        })
    }   
    res.status(200).json({
        status: "success",
        message: 'User fetched successfully',
        data: user
    })


}

module.exports = {register, getUser}