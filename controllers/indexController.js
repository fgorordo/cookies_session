const { validationResult } = require('express-validator');

const controller = {
  microDesafio1: (req, res) => {
    res.render('microdesafio1', {color: req.session.color})
  },
  microDesafio2: (req, res) => {
    let errors = validationResult(req); 
    console.log('error',errors)
    if(!errors.isEmpty()) { 
      res.render('microdesafio1', { errors:errors.errors})
    } else {
      let userInputs = {
        name: req.body.name,
        color: req.body.color,
        email: req.body.email,
        age: req.body.age
      }
      if (req.body.rememberColor) {
        res.cookie('rememberColor',req.body.color, {maxAge: 3600000})
      }
      req.session.color = req.body.color;
      req.session.name = req.body.name
      res.render('microdesafio2', {data: userInputs})
    }
  },
  microDesafio3: (req,res) => {
    res.render('microdesafio3',{color:req.session.color,name:req.session.name})
  },
  micro3Eliminarcolor: (req,res) => {
    res.cookie('rememberColor','unset', {maxAge: 3600000})
    req.session.color = 'unset';
    res.redirect('/')
  }
}


module.exports = controller