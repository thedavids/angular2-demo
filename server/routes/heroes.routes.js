var express = require('express');
var heroesController = require('../controllers/heroes.controller');
var router = express.Router();

router.get('/', heroesController.getHeroes);
router.get('/:id', heroesController.getHero);
router.post('/', heroesController.postHero);
router.put('/:id', heroesController.putHero);
router.delete('/:id', heroesController.deleteHero);

module.exports = router;