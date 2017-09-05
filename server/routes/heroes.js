var express = require('express');
var router = express.Router();

var heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({'heroes' : heroes});
});

router.post('/', function (req, res) {
    var name = req.body.name;

    var len = heroes.length;
    var id = len > 0 ? heroes[len - 1].id + 1 : 1;

    var hero = {id: id, name: name};
    heroes.push(hero);
    return res.send(hero);
});

router.put('/:id', function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
      
    var hero = heroes.find(x => x.id == id);

    if (hero !== undefined) {
        hero.name = name || '';
        return res.sendStatus(202);
    }
    return res.sendStatus(404);
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    var lengthBefore = heroes.length;

    heroes = heroes.filter(x => x.id != id);

    if (lengthBefore !== heroes.length) {
        return res.sendStatus(202);
    }
    return res.sendStatus(404);
});

module.exports = router;