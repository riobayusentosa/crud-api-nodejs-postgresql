const pool = require('./db');

exports.deleteEmployee = async(req,res) => {
    try {
        const {id} = req.params;
        let data = {};

        const employeassigmentdata = await pool.query("DELETE FROM employee_assignment WHERE employe_id = $1 returning *",[id]);
        const employeedata = await pool.query("DELETE FROM employee WHERE id = $1 returning *",[id]);
        data = employeedata.rows[0];
        if (data)
        {
            data.employeassigmentdata=employeassigmentdata.rows
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

exports.deleteTeam = async(req,res) => {
    try {
        const {id} = req.params;
        let data = {};

        const employeassigmentdata = await pool.query("DELETE FROM employee_assignment WHERE team_id = $1 returning *",[id]);
        const teamedata = await pool.query("DELETE FROM team WHERE id = $1 returning *",[id]);
        data = teamedata.rows[0];
        if (data)
        {
            data.employeassigmentdata=employeassigmentdata.rows
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

exports.deleteemployeeassignment = async(req,res) => {
    try {
        const {employee_id,item_id} = req.params;

        const employeassigmentdata = await pool.query("DELETE FROM employee_assignment WHERE team_id = $1 and employe_id=$2 returning *",[item_id,employee_id]);
        res.json(employeassigmentdata.rows[0]);
    } catch (error) {
        res.status(500).json({error});
    }
}