const  connect  = require('../app.js')

export const getAllEmployees = async (req, res) => {
    let sql = 'SELECT *,departments.name as department,employees.name as name FROM employees INNER JOIN departments ON employees.departmentId = departments.id ';
    connect.db.query(sql, (err, results) => {
        if(err) console.log(err)
        //console.log(results)
        res.send(results)
    })
}



exports.getEmployeeById = async (req, res) => {
    let sql = `SELECT * FROM employees WHERE id = '${req.params.id}'`;
    connect.db.query(sql, (err, results) => {
        if(err) res.status(400).send(err)
        //console.log(results)
        res.send(results)
    })
}

exports.addEmployee =  async (req, res) => {
    let department = req.body;
    let sql = 'INSERT INTO employees SET ?';
    let query = connect.db.query(sql, department, (err, result) => {
    if(err) throw err;
    //console.log(result);
    res.send(result);
});
}


exports.updateEmployee= async (req, res) => {
    let newTitle = req.body.name;
    let sql = `UPDATE employees SET ? WHERE id = ${req.params.id}`;
    let query = connect.db.query(sql, req.body,(err, result) => {
    if(err) throw err;
    //console.log(result);
    res.send(result);
});

}


exports.removeEmployee =  async (req, res) => {
    let sql = `DELETE FROM employees WHERE id = ${req.params.id}`;
    let query = connect.db.query(sql, (err, result) => {
    if(err) throw err;
    //console.log(result);
    res.send(result);
});
}