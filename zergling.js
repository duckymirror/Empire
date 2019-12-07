var zergling = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {

            var hostileCreeps = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != "kotyara" && creep.owner.username != "Kasami" && creep.owner.username != "Fostenel");
                }
            });
            
            var hostileStructures = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_STORAGE) && structure.owner.username != "Kotyara" && structure.owner.username != "Kasami";
                }
            });

            if (hostileStructures) {

                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow);

                if (creep.attack(hostileStructures) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileStructures, {heuristicWeight: 1.2, range: 1, reusePath: 10});
                }
            } else if (hostileCreeps) {
                
                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow);

                var hostileAttackCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
                    filter: (creep) => {
                        return (creep.owner.username != "kotyara" && creep.owner.username != "Kasami") && (creep.body.type == "ATTACK" || creep.body.type == "RANGED_ATTACK");
                    }
                });

                if (hostileAttackCreeps.length > 0) {
                    if (creep.attack(hostileAttackCreeps[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(hostileAttackCreeps[0], {heuristicWeight: 1.2, range: 1, reusePath: 10});
                    }
                } else {
                    if (creep.attack(hostileCreeps) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(hostileCreeps, {heuristicWeight: 1.2, range: 1, reusePath: 10});
                    }
                }
            } else {
                if (Game.flags.attack) {
                    creep.moveTo(Game.flags.attack, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                } else {
                    if(creep.signController(creep.room.controller, "HIVE") == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
            }

        }
    }
};
module.exports = zergling;
