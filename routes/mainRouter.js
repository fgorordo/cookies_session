const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')
const validations = require('../middlewares/formValidator')

router.get('/', indexController.microDesafio1)
router.post('/response', validations, indexController.microDesafio2)
router.get('/responsev2', indexController.microDesafio3)
router.post('/', indexController.micro3Eliminarcolor)

module.exports = router;