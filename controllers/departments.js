
const  connect  = require('../app.js')

exports.getAllDepartments = async (req, res) => {
    let sql = 'SELECT * FROM departments';
    connect.db.query(sql, (err, results) => {
        if(err) console.log(err)
        //console.log(results)
        res.send(results)
    })
}



exports.getDepartmentById = async (req, res) => {
    let sql = `SELECT * FROM departments WHERE id = '${req.params.id}'`;
    connect.db.query(sql, (err, results) => {
        if(err) res.status(400).send(err)
        //console.log(results)
        res.send(results)
    })
}

exports.addDepartment =  async (req, res) => {
    let department = {name:req.body.name};
    let sql = 'INSERT INTO departments SET ?';
    let query = connect.db.query(sql, department, (err, result) => {
    if(err) throw err;
    //console.log(result);
    res.send(result);
});
}


exports.updateDepartment = async (req, res) => {
    let newTitle = req.body.name;
    let sql = `UPDATE departments SET name = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = connect.db.query(sql, (err, result) => {
    if(err) throw err;
    //console.log(result);
    res.send(result);
});

}


exports.removeDepartment =  async (req, res) => {
    let sql = `DELETE FROM departments WHERE id = ${req.params.id}`;
    let query = connect.db.query(sql, (err, result) => {
    if(err) throw err;
    //console.log(result);
    res.send(result);
});
}
