const express = require('express');
const app = express();

//CRUD -> CREATE(POST), READ(GET), UPDATE(PUT), DELETE(DELETE)

app.get('/', (req, res) => {
    res.send(`
      <form action="/" method="POST">
      NOME: <input type="text" name="nome">
      <button>Enviar</button>
      </form>
    `);
})

app.post('/', (req, res) => {
  res.send('Recebi o form');
})

app.get('/contato', (req, res) => {
  res.send('Teste pagina contato');
})

app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor rodando.');
});