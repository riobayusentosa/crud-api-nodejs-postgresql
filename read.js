const pool = require('./db');

exports.getallEmployees = async(req,res) => {
    try {
        const employeedata = await pool.query("SELECT * FROM employee");
        res.json(employeedata.rows);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.getallTeams = async(req,res) => {
    try {
        const teamdata = await pool.query("SELECT * FROM team");
        res.json(teamdata.rows);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.getEmployees=async(req,res) => {
    try {
        const {id} = req.params;
        let data = {};

        const employeedata = await pool.query("SELECT * FROM employee WHERE id = $1",[id]);
        const teams = await pool.query("SELECT * FROM team WHERE id IN (SELECT team_id FROM employee_assignment WHERE employe_id = $1)",[id]);
        data = employeedata.rows[0];
        if (data)
        {
            data.teams=teams.rows
        }
        else
        {
            data = {
                info : "No data found"
            }
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.getTeams = async(req,res) => {
    try {
        const {id} = req.params;
        let data = {};

        const teamdata = await pool.query("SELECT * FROM team WHERE id = $1",[id]);
        const employees = await pool.query("SELECT * FROM employee WHERE id IN (SELECT team_id FROM employee_assignment WHERE team_id = $1)",[id]);
        data = teamdata.rows[0];
        if (data)
        {
            data.employess=employees.rows
        }
        else
        {
            data = {
                info : "No data found"
            }
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({error});
    }
}