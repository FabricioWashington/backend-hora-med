const express = require('express');
const router = express.Router();
const ReceitaController = require('../controllers/receita.controller');


router.get('/', ReceitaController.getAll);
router.post('/', ReceitaController.create);
router.get('/:id', ReceitaController.getById);
router.put('/:id', ReceitaController.update);
router.delete('/:id', ReceitaController.remove);


module.exports = router;