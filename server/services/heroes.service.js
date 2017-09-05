var heroesService = {};

var db = [
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

heroesService.getHeroes = function() {
    return db;
};

heroesService.createHero = function(name) {
    var len = db.length;
    var id = len > 0 ? db[len - 1].id + 1 : 1;
    var hero = {id: id, name: name};
    db.push(hero);
    return hero;
};

heroesService.updateHero = function(id, name) {
    var hero = db.find(x => x.id == id);
    if (hero !== undefined) {
        hero.name = name || '';
        return true;
    }
    return false;
}

heroesService.deleteHero = function(id) {
    var lengthBefore = db.length;
    db = db.filter(x => x.id != id);
    return lengthBefore !== db.length;
}

module.exports = heroesService;