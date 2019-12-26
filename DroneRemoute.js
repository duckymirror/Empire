let DroneRemoute = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {

            if (creep.store.getUsedCapacity() == 0) {
                creep.memory.work = 'getResource';
            } else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {
                creep.memory.work = 'doWork';
            }

            if (Game.flags.clearRoom) {
                creep.memory.task = 'clearRoom';
                creep.memory.taskRoom = Game.flags.clearRoom.room;
            } else if (Game.flags.claim) {
                creep.memory.task = 'claim';
                creep.memory.taskRoom = Game.flags.claim.room;
            } else if (Game.flags.min) {
                creep.memory.task = 'min';
                creep.memory.taskRoom = Game.flags.min.room;
            }

            if (creep.memory.task == 'clearRoom') {

                if (creep.memory.work == 'getResource') {
                    if (creep.room != creep.memory.taskRoom) {
                        creep.moveTo(Game.flags.clearRoom, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                    } else {

                        storage = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_STORAGE) && structure.owner.username != "Kotyara" && structure.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity();
                            }
                        });

                        if (storage) {
                            speak = ['FOR', 'THE', 'HIVE'];
                            speakNow = speak[Game.time % speak.length];
                            creep.say(speakNow, true);

                            if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.storage, { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else {
                            if (creep.room.storage && creep.room.storage.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity()) {
                                speak = ['FOR', 'THE', 'HIVE'];
                                speakNow = speak[Game.time % speak.length];
                                creep.say(speakNow, true);

                                let hostileStructures = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                                    filter: (structure) => {
                                        return ((structure.structureType == STRUCTURE_RAMPART) && structure.owner.username != "Kotyara") || ((structure.structureType == STRUCTURE_RAMPART) && structure.pos.isEqualTo(creep.room.storage.pos));
                                    }
                                });

                                if (hostileStructures) {
                                    if (creep.dismantle(hostileStructures) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(hostileStructures, { heuristicWeight: 1.2, reusePath: 10 });
                                    }

                                    let droppedEnergy = creep.room.find(FIND_DROPPED_RESOURCES, {
                                        filter: (droppedEnergy) => {
                                            return droppedEnergy.pos.isEqualTo(creep.pos);
                                        }
                                    });

                                    if (droppedEnergy) {
                                        creep.pickup(droppedEnergy);
                                    }
                                }

                            } else {
                                Memory.room.One.Creeps.Amount.zerglings = 2;
                                Memory.room.One.Creeps.Amount.DroneRemoute = 0;
                                creep.moveTo(Game.flags.clearRoom, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }

                        }
                    }
                } else {

                    let constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

                    if (creep.room.name != creep.memory.room && !constructionSite) {
                        creep.moveTo(new RoomPosition(25, 25, creep.memory.room), { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                    } else {
                        if (creep.room.name != creep.memory.room) {
                            if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSite);
                            }
                        } else {
                            if (creep.room.storage) {
                                if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(creep.room.storage, { ignoreRoads: true, euristicWeight: 1.2, range: 1, reusePath: 50 });
                                }
                            } else {
                                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(creep.room.controller, { ignoreRoads: true, heuristicWeight: 1.2, range: 3, reusePath: 30 });
                                }
                            }
                        }   
                    }

                }
            } else if (creep.memory.task == 'claim') {

                targetRoom = Game.flags.claim.room;

                if (creep.memory.work == 'getResource') {
                    if (creep.room == targetRoom) {
                        let energy= creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_EXTENSION ||
                                    structure.structureType == STRUCTURE_SPAWN ||
                                    structure.structureType == STRUCTURE_CONTAINER) && structure.energy > 0 && structure.owner.username != "Kotyara" && structure.owner.username != "JOURLOY";
                            }
                        });
                        let ruin = creep.pos.findClosestByPath(FIND_RUINS, {
                            filter: (ruin) => {
                                return ruin.store[RESOURCE_ENERGY] > 0;
                            }
                        });
                        storage = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_STORAGE) && structure.owner.username != "Kotyara" && structure.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity();
                            }
                        });
                        if (ruin) {
                            if (creep.withdraw(ruin, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(ruin, { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else if (energy) {
                            if (creep.withdraw(energy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(energy, { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else if (storage) {
                            if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.storage, { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else {
                            const droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                            let source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                            if (droppedEnergy && creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE && droppedEnergy.amount > 100) {
                                creep.moveTo(droppedEnergy);
                            } else if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source, { reusePath: 20 });
                            }
                        }
                    } else {
                        if (creep.room.name == creep.memory.room && creep.room.storage) {
                            if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.storage);
                            }
                        } else {
                            creep.moveTo(Game.flags.claim, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                        }
                    }
                } else {
                    if (creep.room != targetRoom) {
                        creep.moveTo(Game.flags.claim, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                    } else {
                        let targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_EXTENSION ||
                                    structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                            }
                        });
                        let constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if (targets && creep.room.controller.ticksToDowngrade > 3000) {
                            if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets, { reusePath: 30 });
                            }
                        } else if (constructionSite.length > 0 && creep.room.controller.ticksToDowngrade > 3000) {
                            if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSite[0]);
                            }
                        } else {
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.controller);
                            }
                        }
                    }
                }
            }
        }
    }
};
module.exports = DroneRemoute;
