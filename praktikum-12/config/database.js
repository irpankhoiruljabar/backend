const mysql = require("mysql");

require("dotenv").config();

const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.log('error conrctiond' + err.stack);
        return;

    } else {
        console.log("conect to database");
        return;
    }
});

module.exports = db;