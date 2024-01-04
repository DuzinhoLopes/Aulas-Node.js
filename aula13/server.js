const express = require('express');
const app = express();
const route = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')
//CRUD -> CREATE(POST), READ(GET), UPDATE(PUT), DELETE(DELETE)

app.use(express.urlencoded( { extended: true} ))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


//nossos middlewares
app.use(meuMiddleware)
app.use(route)

app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor rodando.');
});