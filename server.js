const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'condominio'
});

connection.connect();

// Rota para cadastro de moradores
app.post('/register', (req, res) => {
    const { name, dob, age, apartment, animals, garage } = req.body;

    const query = 'INSERT INTO moradores (nome, data_nascimento, idade, apartamento, animais, garagem) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [name, dob, age, apartment, animals, garage], (error, results) => {
        if (error) {
            console.error('Erro ao inserir dados:', error);
            res.status(500).json({ success: false });
            return;
        }
        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
