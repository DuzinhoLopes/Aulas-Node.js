const express = require('express');
const app = express();
const route = require('./routes')
const path = require('path')
//CRUD -> CREATE(POST), READ(GET), UPDATE(PUT), DELETE(DELETE)

app.use(express.urlencoded( { extended: true} ))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(route)

app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor rodando.');
});