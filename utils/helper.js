const database = require('../config/db');
const getAUserFromDb = async (user_id) => {
    return new Promise((resolve, reject) => {
        database.query({
            sql: `SELECT * FROM users WHERE user_id = ?`,
            values: [user_id]
        }, (err, result, field) => {
            if (err) {
                return reject(err)
            }
            resolve(result)
        }) 
    })  
}


module.exports = {getAUserFromDb}