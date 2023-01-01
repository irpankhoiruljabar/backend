const Patients = require("../models/Patients");

// Membuat Class PatientController
class PatientController {
    // index(req, res) {
    //     // TODO 4: Tampilkan data Patients
    //     // code here
    //     Patients.all(function(patients) {
    //         const data = {
    //             message: "Menampilkkan semua Patients",
    //             data: patients,
    //         };

    //         res.json(data);

    //     });

    // }

    async index(req, res) {
        // TODO 4: Tampilkan data Patients
        // code here
        const patients = await Patients.all();

        const data = {
            message: "Menampilkkan semua Patients",
            data: patients,
        };

        res.json(data);

    }



    // async store(req, res) {
    //     /**
    //      * TODO 2: memanggil method create.
    //      * Method create mengembalikan data yang baru diinsert.
    //      * Mengembalikan response dalam bentuk json.
    //      */
    //     // code here
    //     const patients = await Patients.create(req.body);


    //     const data = {
    //         message: "Menambahkan data Patient",
    //         data: patients,
    //     };

    //     res.json(data);
    // }


    async store(req, res) {
        /**
         * validasi sederhana
         * menghandle jika salah satu data tidak dikirim
         */
        const { name, phone, address } = req.body

        // jika data undefined maka kirim response
        if (!name || !phone || !address) {
            const data = {
                message: "Semua data harus dikirim"
            }
            return res.status(422).json(data)

        }
        // else
        const Patients = await Patients.create(req.body);
        const data = {
            message: "Menampilkan Patient baru",
            data: Patients,
        };

        return res.status(200).json(data);
    }

    async update(req, res) {
        const { id } = req.params;
        // mencari id Patient yang ingin diupdate
        const Patient = await Patients.find(id)
        if (Patient) {
            const Patient = await Patients.update(id, req.body);
            const data = {
                message: "Mengedit data Patient",
                data: Patient,
            };
            res.status(200).json(data);
        } else {
            const data = {
                message: "Patient not found"
            }
            res.status(404).json(data)
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const Patient = await Patients.find(id);

        if (Patient) {
            await Patients.delete(id);
            const data = {
                message: "Menghapus data Patient"
            }
            res.status(200).json(data)
        } else {
            const data = {
                message: "Patient not found"
            }
            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const { id } = req.params;
        const Patient = await Patients.find(id);

        if (Patient) {
            const data = {
                message: "Menampilkan detail Patient",
                data: Patient
            };
            res.status(200).json(data)
        } else {
            const data = {
                mesage: "Patient not found"
            };
            res.status(404).json(data);
        }
    }
}


const object = new PatientController();


module.exports = object;