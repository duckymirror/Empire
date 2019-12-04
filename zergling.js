var zergling = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {

            var hostileCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != "kotyara");
                }
            });

            
            var invaderCore = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_INVADER_CORE);
                }
            });

            var hostileStructures = creep.room.find(FIND_HOSTILE_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION)
                }
            });

            if (Game.flags.attack || hostileCreeps.length >= 0 || invaderCore.length >= 0) {
                if (hostileCreeps.length == 0 && invaderCore.length == 0) {
                    creep.moveTo(Game.flags.attack, {reusePath: 30, visualizePathStyle: creep.memory.visualizePathPrepare});
                } else if (hostileCreeps.length > 0) {
                    if(creep.attack(hostileCreeps[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(hostileCreeps[0]);
                        creep.say("ZERGS!", true)
                    }
                } else if (invaderCore.length > 0) {
                    if(creep.attack(invaderCore[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(invaderCore[0]);
                    }
                }
            }

        }
    }
};
module.exports = zergling;
