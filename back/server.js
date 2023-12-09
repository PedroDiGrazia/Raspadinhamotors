const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "180804",
    database: "crud"
})

db.connect((err) => {
    if (err) {
        console.error('Erro de conexão ao banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    }
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            return res.json("ERROR");
        }

        if (data.length > 0) {
            return res.json("Registro encontrado");
        } else {
            return res.json("Sem registro");
        }
    })
})

app.post('/cadastro', (req, res) => {
    const sql = "INSERT INTO login (`nome`,`email`,`password`,`telefone`) VALUES (?)";
    const values = [
        req.body.nome, 
        req.body.email , 
        req.body.password, 
        req.body.telefone
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("ERROR 02");
        } 
        return res.json(data)
    })
})


app.listen(8081, () => {
    console.log("Running...");
})