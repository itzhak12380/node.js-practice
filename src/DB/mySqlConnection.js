const mysql = require('mysql')

const host = process.env.host
const user = process.env.user
const password = process.env.password
const database = process.env.database
function createPoolConection() {
    try {
        return(  mysql.createPool({
            host: 'localhost',
            user: 'root',
            password:'',
            database: 'db_test'
        }))



    } catch (error) {
        console.log(error);
    }
}
module.exports = createPoolConection()

