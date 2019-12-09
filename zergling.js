var zergling = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;
            
        } else {

            if (Game.flags.attack) {
                creep.memory.task = 'attack';
            } else if (Game.flags.clearRoom) {
                creep.memory.task = 'clear';
            }

            if (creep.ticksToLive < 150) {
                Memory.room.One.Creeps.AmountIsLive.zerglings--;
            }
            var hostileCreeps = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != "kotyara");
                }
            });
            
            if (creep.memory.task == 'clear') {
                var hostileStructures = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_RAMPART) && structure.owner.username != "Kotyara";
                    }
                });
            } else {
                var hostileStructures = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_STORAGE || 
                                structure.structureType == STRUCTURE_RAMPART) && structure.owner.username != "Kotyara";
                    }
                });
            }
            
            var dangerHostileStructures = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER) && structure.owner.username != "Kotyara";
                }
            });

            if (dangerHostileStructures) {
                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow, true);

                if (creep.attack(hostileStructures) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileStructures, {heuristicWeight: 1.2, reusePath: 10});
                }
            } else if (hostileCreeps) {
                
                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow, true);

                var hostileAttackCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
                    filter: (creep) => {
                        return (creep.owner.username != "kotyara") && (creep.body.type == "ATTACK" || creep.body.type == "RANGED_ATTACK");
                    }
                });

                if (hostileAttackCreeps.length > 0) {
                    if (creep.attack(hostileAttackCreeps[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(hostileAttackCreeps[0]);
                    }
                } else {
                    if (creep.attack(hostileCreeps) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(hostileCreeps);
                    }
                }
            } else if (hostileStructures) {

                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow, true);

                if (creep.attack(hostileStructures) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileStructures, {heuristicWeight: 1.2, reusePath: 10});
                }
            } else {
                if (creep.memory.task == 'attack') {
                    creep.moveTo(Game.flags.attack, {heuristicWeight: 1.2, range: 1, reusePath: 10});
                } else if (creep.memory.task == 'clear') {
                    creep.moveTo(Game.flags.clearRoom, {heuristicWeight: 1.2, range: 1, reusePath: 10});
                }
            }

        }
    }
};
module.exports = zergling;
