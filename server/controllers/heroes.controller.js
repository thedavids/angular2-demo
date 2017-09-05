var heroesContoller = {};
var heroesService = require('../services/heroes.service');

heroesContoller.getHeroes = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({'heroes' : heroesService.getHeroes()});
};

heroesContoller.getHero = function (req, res) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    res.send(heroesService.getHero(id));
};

heroesContoller.postHero = function (req, res) {
    var name = req.body.name;
    res.setHeader('Content-Type', 'application/json');
    return res.send(heroesService.createHero(name));
};

heroesContoller.putHero = function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    if (heroesService.updateHero(id, name)) {
        return res.sendStatus(202);
    }
    return res.sendStatus(404);
};

heroesContoller.deleteHero = function (req, res) {
    var id = req.params.id;
    if (heroesService.deleteHero(id)) {
        return res.sendStatus(202);
    }
    return res.sendStatus(404);
};

module.exports = heroesContoller;