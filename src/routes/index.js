const express = require('express');
const router = express.Router();
const receitaRoutes = require('./receita.route.js');


router.use('/receitas', receitaRoutes);


module.exports = router;