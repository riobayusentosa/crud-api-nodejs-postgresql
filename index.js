const express = require('express');
const cors = require('cors');
const app = express();


const {createEmployee,createTeam,createEmployeeAssignment} = require('./create');
const {getallEmployees,getallTeams,getEmployees,getTeams} = require('./read');
const {updateEmployee,updateTeams} = require('./update');
const {deleteEmployee,deleteTeam, deleteemployeeassignment} = require('./delete');


var corsoptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 
}

app.use(cors(corsoptions));
app.use(express.json());


app.post("/employee", createEmployee);
app.post("/team", createTeam);
app.post("/employeeassignment", createEmployeeAssignment);

app.get("/employees",cors(), getallEmployees);
app.get("/teams",cors(), getallTeams);
app.get('/employee/:id',cors(), getEmployees);
app.get('/team/:id',cors(), getTeams);

app.put('/employee/:id', cors(corsoptions), updateEmployee);
app.put('/team/:id', cors(corsoptions),updateTeams);

app.delete('/employee/:id', deleteEmployee);
app.delete('/team/:id', deleteTeam);
app.delete('/employeeassignment/:employee_id/:item_id', deleteemployeeassignment);

app.listen(3000,() => {
    console.log('Server started on port 3000');
})