let zergling = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;
            
        } else {
            if (Game.flags.attack) {
                creep.memory.task = 'attack';
                creep.memory.taskRoom = Game.flags.attack.room;
            } else if (Game.flags.clearRoom) {
                creep.memory.task = 'clear';
                creep.memory.taskRoom = Game.flags.clearRoom.room;
            } else if (Game.flags.power) {
                creep.memory.task = 'power';
                creep.memory.taskRoom = Game.flags.power.room;
            }

            if (creep.ticksToLive < 150) {
                Memory.room.One.Creeps.AmountIsLive.zerglings--;
            }
            let hostileCreeps = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != "kotyara");
                }
            });
            
            if (creep.memory.task == 'power') { 
                let powerBank = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_POWER_BANK);
                    }
                });

                if (creep.room != Game.flags.power.room) {
                    creep.moveTo(Game.flags.power, {heuristicWeight: 1.2, range: 1, reusePath: 10});
                } else {
                    if (powerBank) {
                        speak = ['FOR', 'THE', 'HIVE'];
                        speakNow = speak[Game.time % speak.length];
                        creep.say(speakNow, true);

                        if (creep.attack(powerBank) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(powerBank, {heuristicWeight: 1.2, reusePath: 10});
                        }
                    }
                }
            } else if (creep.memory.task == 'clear') {
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
            
            let dangerHostileStructures = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER) && structure.owner.username != "Kotyara";
                }
            });

            let invaderCore = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_INVADER_CORE)
                }
            });
            if (invaderCore && creep.room == creep.memory.taskRoom) {
                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow, true);

                if (creep.attack(invaderCore) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(invaderCore, {heuristicWeight: 1.2, reusePath: 10});
                }
            } else if (dangerHostileStructures && creep.room == creep.memory.taskRoom) {
                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow, true);

                if (hostileStructures.structureType == STRUCTURE_RAMPART) {
                    hostileStructures.sort((a,b) => a.hits - b.hits);
                }
                if (creep.attack(hostileStructures) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileStructures, {heuristicWeight: 1.2, reusePath: 10});
                }
            } else if (hostileCreeps && creep.room == creep.memory.taskRoom) {
                
                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow, true);

                let hostileAttackCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
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
            } else if (hostileStructures && creep.room == creep.memory.taskRoom) {

                speak = ['FOR', 'THE', 'HIVE'];
                speakNow = speak[Game.time % speak.length];
                creep.say(speakNow, true);

                if (creep.attack(hostileStructures) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileStructures, {heuristicWeight: 1.2, reusePath: 10});
                }
            } else {
                
                if (creep.memory.task == 'attack') {
                    if (creep.room == creep.memory.taskRoom) {
                        if(creep.signController(creep.room.controller, "HIVE") == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller);
                        }
                    } else {
                        creep.moveTo(Game.flags.attack, {heuristicWeight: 1.2, range: 1, reusePath: 10});
                    }
                } else if (creep.memory.task == 'clear') {
                    creep.moveTo(Game.flags.clearRoom, {heuristicWeight: 1.2, range: 1, reusePath: 10});
                }
            }

        }
    }
};
module.exports = zergling;
