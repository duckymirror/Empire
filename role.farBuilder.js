var roleFarBuilder = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        if (creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.work = 0;
        } else if (creep.room.name != "W48S27" && creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
            creep.memory.work = 1;
        } else if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
            creep.memory.work = 2;
        }

        if (creep.memory.room == "W49S28") {
            creep.memory.workMode = 0;
        } else if (creep.memory.room == "W11N46") {
            creep.memory.workMode = 1;
        } else if (creep.memory.room == "W48S27") {
            creep.memory.workMode = 2;
        }


        switch (creep.memory.workMode) {
            case 0:
                switch (creep.memory.work) {
                    case 0:
                        if (creep.room.name == "W48S27") {
                            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source, { reusePath: 20 });
                            }
                        } else {
                            if (creep.room.storage) {
                                if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(creep.room.storage);
                                }
                            }
                        }
                        break;

                    case 1:
                        creep.moveTo(new RoomPosition(25, 25, "W48S27"));
                        break;

                    case 2:
                        var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if (constructionSite.length > 0) {
                            if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSite[0]);
                            }
                        } else {
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.controller);
                            }
                        }
                        break;
                }
                break;
            case 1:
                switch (creep.memory.work) {
                    case 0:
                        if (creep.room.name == "W11N46") {
                            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source, { reusePath: 20 });
                            }
                        } else {
                            if (creep.room.storage) {
                                if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(creep.room.storage);
                                }
                            }
                        }
                        break;

                    case 1:
                        creep.moveTo(new RoomPosition(25, 25, "W11N46"));
                        break;

                    case 2:
                        var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if (constructionSite.length > 0) {
                            if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSite[0]);
                            }
                        } else {
                            var targets = creep.room.find(FIND_STRUCTURES, {
                                filter: (structure) => {
                                    return (structure.structureType == STRUCTURE_EXTENSION ||
                                        structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                                }
                            });
                            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets[0]);
                            }
                        }
                        break;
                }
                break;
            case 2:
                switch (creep.memory.work) {
                    case 0:
                        if (creep.room.name == "W11N46") {
                            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source, { reusePath: 20 });
                            }
                        } else {
                            if (creep.room.storage) {
                                if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(creep.room.storage);
                                }
                            }
                        }
                        break;

                    case 1:
                        creep.moveTo(new RoomPosition(25, 25, "W11N46"));
                        break;

                    case 2:
                        var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if (constructionSite.length > 0) {
                            if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSite[0]);
                            }
                        } else {
                            var targets = creep.room.find(FIND_STRUCTURES, {
                                filter: (structure) => {
                                    return (structure.structureType == STRUCTURE_EXTENSION ||
                                        structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                                }
                            });
                            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets[0]);
                            }
                        }
                        break;
                }
                break;
        }
    }
};
module.exports = roleFarBuilder;
