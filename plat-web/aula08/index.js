const express = require('express');
const path = require('path');
const app = express();

app.get('/animais', (req, res) => {
    //se for testar no windows o nome deve ser \_\_dirname se for no linux tem que ficar __dirname
    res.sendFile(path.join(__dirname, './pages/animais.html'));
});

app.use('/dados', express.static('dados'));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});