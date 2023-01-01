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
        //     static create(request) {
        //         // code here
        //         const student = request;
        //         return new Promise((resolve, reject) => {
        //             const insert_sql = "INSERT INTO  patients SET ?";

    //         db.query(insert_sql, student, function(err, result) {
    //             err ? console.log(err) : console.log(result);
    //             resolve(result);
    //         });
    //     });
    // }
    static async create(data) {
        // Promise 1
        const id = await new Promise((resolve, reject) => {
            // insert data ke database
            const sql = "INSERT INTO patients SET ?";

            db.query(sql, data, function(err, results) {
                resolve(results.insertId);
            });
        });

        // Promise 2
        const student = await this.find(id);
        return student;
    }

    static find(id) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // select data by id
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        // query delete
        return new Promise((resolve, rejecet) => {
            // query sql
            const sql = "DELETE from patients WHERE id = ?"
            db.query(sql, id, (err, results) => {
                resolve(results);
            })
        })
    }

}

module.exports = Patients;