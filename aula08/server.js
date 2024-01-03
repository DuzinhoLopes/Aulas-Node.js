const express = require('express');
const app = express();

//CRUD -> CREATE(POST), READ(GET), UPDATE(PUT), DELETE(DELETE)

app.use(
  express.urlencoded( { extended: true} )
)

app.get('/', (req, res) => {
    res.send(`
      <form action="/" method="POST">
      NOME: <input type="text" name="nome">
      <button>Enviar</button>
      </form>
    `);
})

app.get('/testes/:idUsuarios?', (req, res) => {
  console.log(req.params);
  res.send(req.params.idUsuarios)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`o que foi enviado no formulario: ${req.body.nome}`);
})


app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor rodando.');
});