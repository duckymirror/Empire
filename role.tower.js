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
            var hostileCreeps = tower.room.find(FIND_HOSTILE_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != "kotyara");
                }
            });

            var friendsCreeps = tower.pos.findInRange(FIND_HOSTILE_CREEPS, 6, {
                filter: (creep) => {
                    return (creep.owner.username == "kotyara");
                }
            });

            var rampartsNear = tower.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_RAMPART) && structure.pos.inRangeTo(tower.pos, 10);
                }
            });
            
            if (friendsCreeps.length > 0 && rampartsNear) {
                if (rampartsNear[0].isPublic == false) {
                    rampartsNear[0].setPublic(true)
                }
            } else if (rampartsNear && rampartsNear[0].isPublic == true) {
                rampartsNear[0].setPublic(false)
            }

            var roads = tower.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_ROAD) && structure.hits < structure.hitsMax;
                }
            });
            var walls = tower.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_WALL) && structure.hits < 1000000;
                }
            });
            var ramparts = tower.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_RAMPART) && structure.hits < 1000000;
                }
            });
            var brokenRamparts = tower.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_RAMPART) && structure.hits < 10000;
                }
            });

            if (hostileCreeps.length == 0) {
                if (tower.store[RESOURCE_ENERGY] > 699) {
                    if (brokenRamparts.length > 0) {
                        brokenRamparts.sort((a,b) => a.hits - b.hits);
                        tower.repair(brokenRamparts[0]);
                    } else if (roads.length > 0) {
                        roads.sort((a,b) => a.hits - b.hits);
                        tower.repair(roads[0]);
                    } else if (ramparts.length > 0) {
                        ramparts.sort((a,b) => a.hits - b.hits);
                        tower.repair(ramparts[0]);
                    } else if (walls.length > 0) {
                        walls.sort((a,b) => a.hits - b.hits);
                        tower.repair(walls[0]);
                    }
                }
            } else {
                if (hostileCreeps.length > 0) {
                    if (hostileCreeps.length > 1) {
                        Memory.amountCreeps.amountWarriorsInE45N9 = 1;
                    }
                    tower.attack(hostileCreeps[0]);
                }
            }
        }
    }
};

module.exports = roleTower;
