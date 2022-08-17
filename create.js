const pool = require('./db');

exports.createEmployee = async(req,res) => {
    try {
        const {name,date_of_joining,designation,gender,email,bio} = req.body;
        const employeedata = await pool.query("INSERT INTO employee (name,date_of_joining,designation,gender,email,bio) values ($1,$2,$3,$4,$5,$6) returning *",[name,date_of_joining,designation,gender,email,bio])
        res.json(employeedata.rows[0]);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.createTeam = async(req,res) => {
    try {
        const {name,email,description} = req.body;
        const teamdata = await pool.query("INSERT INTO team (name,email,description) values ($1,$2,$3) returning *",[name,email,description])
        res.json(teamdata.rows[0]);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.createEmployeeAssignment = async(req,res) => {
    try {
        const {team_id,employe_id} = req.body;
        const employeeassignmentdata = await pool.query("INSERT INTO employee_assignment (team_id,employe_id) values ($1,$2) returning *",[team_id,employe_id])
        res.json(employeeassignmentdata.rows[0]);
    } catch (error) {
        res.status(500).json({error});
    }
}