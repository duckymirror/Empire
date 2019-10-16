var roleTransporter = {
    /** @param {Creep} creep **/
    control(creep) {
        var hostileCreeps = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
            }
        });

        var targets2 = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER);
            }
        });
        var tower = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_TOWER) && structure.energy < 700;
            }
        });
        var rampart = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_RAMPART);
            }
        });
        var road = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_ROAD);
            }
        });
        const droppedEnergy = creep.room.find(FIND_DROPPED_RESOURCES);
        var storageInRoom = creep.room.storage;
        var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        if (creep.memory.room == creep.room.name) {
            if (Memory.mode == 1) {
                if (creep.store[RESOURCE_ENERGY] != creep.store.getCapacity()) {
                    creep.memory.work = 0;
                } else if (targets.length > 0 || targets2.length > 0) {
                    creep.memory.work = 2;
                    //} else if (road && road.hits < road.hitsMax) {
                    //    creep.memory.work = 3;
                } else if (tower[0] || tower[1]) {
                    creep.memory.work = 4;
                } else if (storageInRoom) {
                    creep.memory.work = 5;
                } else if (constructionSite) {
                    creep.memory.work = 6;
                }
            } else if (Memory.mode == 2) {
                if (creep.store[RESOURCE_ENERGY] === 0) {
                    creep.memory.work = 0;
                } else if (creep.room.controller) {
                    creep.memory.work = 6;
                }
            }

            switch (creep.memory.work) {
                case 0:
                    creep.say("📥");

                    if (droppedEnergy) {
                        if (droppedEnergy[0] && droppedEnergy[0].amount > 700 && creep.memory.source != 1) {
                            creep.memory.source = 0;
                        } else if (droppedEnergy[1] && droppedEnergy[1].amount > 700) {
                            creep.memory.source = 1;
                        } else {
                            creep.memory.source = 2;
                        }

                        switch (creep.memory.source) {
                            case 0:
                                if (creep.pickup(droppedEnergy[0]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(droppedEnergy[0]);
                                }
                                break;

                            case 1:
                                if (creep.pickup(droppedEnergy[1]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(droppedEnergy[1]);
                                }
                                break;

                            case 2:
                                var targetDroppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                                if (creep.pickup(targetDroppedEnergy) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(targetDroppedEnergy);
                                }
                                break;
                        }
                    }
                    break;

                case 1:
                    creep.say("🚓");
                    if (creep.store[RESOURCE_ENERGY] != 0) {
                        if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(tower[0]);
                        }
                    } else {
                        if (storageInRoom) {
                            if (creep.withdraw(storageInRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(storageInRoom);
                            }
                        } else {
                            if (creep.pickup(droppedEnergy[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(droppedEnergy[0]);
                            }
                        }
                    }
                    break;

                case 2:
                    creep.say("🚛");
                    var energyStoreForSpawn = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                        }
                    });
                    if (creep.transfer(energyStoreForSpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(energyStoreForSpawn);
                    }
                    break;

                case 3:
                    creep.say("🛠️");
                    if (creep.repair(road) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(road);
                    }

                case 4:
                    creep.say("🚚");
                    if (tower[0]) {
                        if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(tower[0]);
                        }
                    } else if (tower[1]) {
                        if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(tower[0]);
                        }
                    }
                    break;

                case 5:
                    creep.say("📤");
                    if (creep.transfer(storageInRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageInRoom);
                    }
                    break;

                case 6:
                    creep.say("⬆️");
                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                    break;
            }
        } else {
            creep.moveTo(new RoomPosition(25, 25, creep.memory.room));
        }
    }
};
module.exports = roleTransporter;
