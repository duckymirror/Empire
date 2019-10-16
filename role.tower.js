var roleTower = {

    control(tower) {

        var towers = [];
        for (var i in Game.rooms){
            var room = Game.rooms[i];
            var roomTowers = room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            towers = towers.concat(roomTowers);
        }
        for (var i in towers){
            var tower = towers[i];
            var target = tower.room.find(FIND_HOSTILE_CREEPS);
            if (target.length == 0) {
                if (tower.energy < 700) {
                    const targets = tower.room.find(FIND_STRUCTURES, {
                        filter: (object) => object.hits < 300
                    });

                    targets.sort((a,b) => a.hits - b.hits);

                    if(targets.length > 0) {
                        tower.repair(targets[0]);
                    }
                } else {
                    const targets = tower.room.find(FIND_STRUCTURES, {
                        filter: (object) => object.hits < object.hitsMax
                    });

                    targets.sort((a,b) => a.hits - b.hits);

                    if(targets.length > 0) {
                        tower.repair(targets[0]);
                    }
                }
            } else {
                tower.attack(target[0]);
            }
        }
    }
};

module.exports = roleTower;
