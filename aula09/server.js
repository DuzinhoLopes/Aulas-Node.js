const express = require('express');
const app = express();
const route = require('./routes')

//CRUD -> CREATE(POST), READ(GET), UPDATE(PUT), DELETE(DELETE)

app.use(express.urlencoded( { extended: true} ))

app.use(route)


app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor rodando.');
});