// TODO 3: Import data students dari folder data/students.js
// code here
const Patients = require("../models/Patients");

// Membuat Class StudentController
class StudentController {
    // index(req, res) {
    //     // TODO 4: Tampilkan data students
    //     // code here
    //     Patients.all(function(patients) {
    //         const data = {
    //             message: "Menampilkkan semua students",
    //             data: patients,
    //         };

    //         res.json(data);

    //     });

    // }

    async index(req, res) {
        // TODO 4: Tampilkan data students
        // code here
        const patients = await Patients.all();

        const data = {
            message: "Menampilkkan semua students",
            data: patients,
        };

        res.json(data);

    }



    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */
        // code here
        const patients = await Patients.create(req.body);


        const data = {
            message: "Menambahkan data student",
            data: req.body,
        };

        res.status(200).json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        // TODO 6: Update data students
        // code here
        const data = {
            message: `Mengedit student id ${id}, nama ${nama}`,
            data: [],
        };

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        // TODO 7: Hapus data students
        // code here
        const data = {
            message: `Menghapus student id ${id}`,
            data: [],
        };

        res.json(data);
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;