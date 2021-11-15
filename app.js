import { employees } from './routes/employees'
import {departments} from './routes/departments'


const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded());



app.use('/api/employees',employees);
app.use('/api/departments',departments);
const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'secret123',
    database:'test'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});
console.log(db.query)
module.exports.db = db



/*const app = express();

// Create DB
//app.get('/createdb', (req, res) => {
//    let sql = 'CREATE DATABASE nodemysql';
//    db.query(sql, (err, result) => {
//        if(err) throw err;
//        console.log(result);
//        res.send('Database created...');
//    });
//});

// Create table
app.get('/createemployeestable', (req, res) => {
    let sql = 'CREATE TABLE employees(id int AUTO_INCREMENT, name VARCHAR(255), age VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.get('/addpemployee1', (req, res) => {
    let post = {name:'priyanshu',age:'23'};
    let sql = 'INSERT INTO employees SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});



// Select posts
app.get('/getemployees', (req, res) => {
    let sql = 'SELECT * FROM employees';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('fetched...');
    });
});

// Select single post
app.get('/getemployee/:id', (req, res) => {
    let sql = `SELECT * FROM employee WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

// Update post
app.get('/updateemployee/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET name = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});*/

app.listen('3000', () => {
    console.log('Server started on port 3000');
});