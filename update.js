const pool = require('./db');

exports.updateEmployee = async(req,res) => {
    try {
        const {id} = req.params;
        const {name,date_of_joining,designation,gender,email,bio} = req.body;
        const employeedata = await pool.query("UPDATE employee SET name = $1,date_of_joining = $2,designation=$3,gender=$4,email=$5,bio=$6 WHERE id = $7 returning *",[name,date_of_joining,designation,gender,email,bio,id])
        res.json(employeedata.rows[0]);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.updateTeams = async(req,res) => {
    try {
        const {id} = req.params;
        const {name,email,description} = req.body;
        const teamdata = await pool.query("UPDATE team SET name = $1,email = $2,description=$3 WHERE id = $4 returning *",[name,email,description,id])
        res.json(teamdata.rows[0]);
        
    } catch (error) {
        res.status(500).json({error});
    }
}