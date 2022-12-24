const db = require("../config/database");

// class Patients {
//     static all(callback) {
//         const query = "SELECT * FROM patients";

//         db.query(query, (err, results) => {
//             callback(results);
//         });
//     }
// }
class Patients {
    static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM patients";

            db.query(query, (err, results) => {
                resolve(results);
            });

        });
    }
    static create(request) {
        // code here
        const student = request;
        return new Promise((resolve, reject) => {
            const insert_sql = "INSERT INTO  patients SET ?";

            db.query(insert_sql, student, function(err, result) {
                err ? console.log(err) : console.log(result);
                resolve(result);
            });
        });
    }
}

module.exports = Patients;