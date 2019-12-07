var zergling = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {

            var hostileCreeps = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != "kotyara");
                }
            });
            
            var hostileStructures = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION) && structure.owner.username != "Kotyara";
                }
            });

            if (hostileCreeps) {
                var hostileAttackCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
                    filter: (creep) => {
                        return (creep.owner.username != "kotyara") && (creep.body.type == "ATTACK" || creep.body.type == "RANGED_ATTACK");
                    }
                });

                if (hostileAttackCreeps.length > 0) {
                    if (creep.attack(hostileAttackCreeps[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(hostileAttackCreeps[0], {heuristicWeight: 1.2, range: 1, reusePath: 50});
                    }
                } else {
                    if (creep.attack(hostileCreeps) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(hostileCreeps, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                    }
                }
            } else if (hostileStructures) {
                if (creep.attack(hostileStructures) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileStructures, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                }
            } else {
                if (Game.flags.attack) {
                    creep.moveTo(Game.flags.attack, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                } else {

                }
            }

        }
    }
};
module.exports = zergling;
