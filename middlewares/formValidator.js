const { body } = require('express-validator')


const formValidation = [
  body('name','Este campo es obligatorio').notEmpty(),
  body('email','Debe ser un mail valido').notEmpty().bail().isEmail()
]

module.exports = formValidation
