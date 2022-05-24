const express = require('express')
const app = express();
const methodOverride = require('method-override')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const mainRouter = require('./routes/mainRouter')
const rememberMe = require('./middlewares/rememberMe')
const expressPort = 3030;


// Argumento para usar put y delete //
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(session({
  secret: "Nuestro mensaje secreto",
}))

app.use(cookieParser())

app.use(rememberMe)

// seteando el uso de plantillas ejs //
app.set('view engine', 'ejs');

app.use(mainRouter);

app.listen(process.env.PORT || expressPort, () => {
  console.log(`Servidor inciado en puerto ${expressPort}`)
  console.log(`Link al sitio: http://localhost:3030`)
})