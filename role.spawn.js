function creepBody(energy, role) {

   if (role == "DroneRemoute" || role == "Drone") {
        if (energy == 300) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 350) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 400) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 450) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1350) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy >= 1400) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        }
    }

    if (role == 'Zergling') {
        if (energy == 300) {
            return [MOVE, ATTACK]
        } else if (energy == 350) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy == 400) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy == 450) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy == 500) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy >= 550) {
            return [TOUGH, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK]
        }
    }

    if (role == 'Overseer') {
        return [MOVE, MOVE, MOVE, MOVE, MOVE, CLAIM]
    }

    if (role == 'hydralisk') {
        if (energy == 300) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 350) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 400) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 450) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 500) {
            return [MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 550) {
            return [MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 950) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        }
    }

    if (role == 'claimer') {
        if (energy == 650) {
            return [CLAIM, MOVE]
        } else if (energy == 700) {
            return [CLAIM, MOVE, MOVE]
        } else if (energy == 750) {
            return [CLAIM, MOVE, MOVE, MOVE]
        } else if (energy == 800) {
            return [CLAIM, MOVE, MOVE, MOVE, MOVE]
        } else if (energy >= 850) {
            return [CLAIM, MOVE, MOVE, MOVE, MOVE, MOVE]
        }
    }

    if (role == "healer") {
        if (energy >= 400 && energy < 1000) {
            return [TOUGH, MOVE, MOVE, HEAL]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1300) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1350) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1400) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1450) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy >= 1500) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL]
        }
    }

}

function calculateCreeps (energy, role, target) {
    creep = creepBody(energy, role);
    
    let price = 0;
    if (target == 'spawnTime') {
        time = creep.length * 3;
        return time
    } else if (target == 'spawnPrice') {
        for (var i in creep) {
            if (creep[i] == "move" || creep[i] == "carry") {
                price = price + 50;
            } else if (creep[i] == "work") {
                price = price + 100;
            } else if (creep[i] == "attack") {
                price = price + 80;
            } else if (creep[i] == "ranged_attack") {
                price = price + 150;
            } else if (creep[i] == "heal") {
                price = price + 250;
            } else if (creep[i] == "tough") {
                price = price + 10;
            } else if (creep[i] == "claim") {
                price = price + 600;
            }
        }

        return price
    }
}

var roleSpawn = {
    run(spawn) {
        
        var spawns = [];
        for (var i in Game.rooms){
            var room = Game.rooms[i];
            var roomSpawns = room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_SPAWN}});
            spawns = spawns.concat(roomSpawns);
        }
        for (var i in spawns){
            var spawn = spawns[i];
            var amountEnergy = spawn.room.energyCapacityAvailable;

            for (var i in Memory.rolies) {
                if ((!Memory.room[spawn.room.name + ".amountIsLive." + Memory.rolies[i]] && Memory.room[spawn.room.name + ".amount." + Memory.rolies[i]] > 0) || Memory.room[spawn.room.name + ".amountIsLive." + Memory.rolies[i]] < Memory.room[spawn.room.name + ".amount." + Memory.rolies[i]]) {
                    var newName = Game.time;
                    
                    body = creepBody(amountEnergy, Memory.rolies[i]);
                    spawn.spawnCreep(body, newName,
                        { memory: { role: Memory.rolies[i] } });
                }
            }
            
            let extensions = spawn.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_EXTENSION;
                }
            });

            let tower = spawn.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_TOWER;
                }
            });

            if (spawn.room.controller.level == 2 && (!extensions || (extensions && extensions.length < 5))) {
                x = spawn.pos.x;
                y = spawn.pos.y;

                let coordForExtensions = [[x+1, y+1], [x+2, y], [x+2, y-1], [x+1, y-2], [x, y-2]]
                coordForExtensionsNow = coordForExtensions[Game.time % coordForExtensions.length];
                
                let constructionSite = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);

                if (constructionSite.length == 0) {
                    spawn.room.createConstructionSite(coordForExtensionsNow[0], coordForExtensionsNow[1], STRUCTURE_EXTENSION)
                }
            } else if (spawn.room.controller.level == 3 && ((!extensions || (extensions && extensions.length < 15) || !tower))) {
                x = spawn.pos.x;
                y = spawn.pos.y;

                if (!extensions || (extensions && extensions.length < 15)) {
                    let coordForExtensions = [[x, y+1], [x-1, y], [x-1, y-1], [x-1,y+3], [x, y+3], [x+1, y+3], [x+2, y+3], [x+3, y+1], [x+3, y], [x+3, y-1]]
                    coordForExtensionsNow = coordForExtensions[Game.time % coordForExtensions.length];
                    
                    if (constructionSite.length == 0) {
                        spawn.room.createConstructionSite(coordForExtensionsNow[0], coordForExtensionsNow[1], STRUCTURE_EXTENSION)
                    }
                }
            }
        }

    }
};
module.exports = roleSpawn;
