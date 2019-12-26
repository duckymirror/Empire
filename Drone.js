let Drone = {
    /** @param {Creep} creep **/
    control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {
            if (creep.room.name == creep.memory.room) {
                if (creep.store.getUsedCapacity() == 0) {
                    creep.memory.state = "getResource";
                } else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {
                    creep.memory.state = "doWork";
                }

                if (creep.memory.state == "getResource") {

                    let nydus = creep.room.find(FIND_STRUCTURES, { filter: s => s.structureType == STRUCTURE_LINK });

                    if (nydus.length > 1) {

                        for (let i in nydus) {
                            let nydusInRoom = nydus[i];
                            if (nydusInRoom.pos.inRangeTo(nydusInRoom.room.storage.pos, 3)) {
                                var mainNydus = nydusInRoom;
                            }
                        }
                        if (mainNydus && mainNydus.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity() && mainNydus.room.name == creep.memory.room) {
                            if (creep.withdraw(mainNydus, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(mainNydus, { ignoreCreeps: true, ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else {
                            const containerInRoom = creep.room.find(FIND_STRUCTURES, {
                                filter: (structure) => {
                                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0;
                                }
                            });

                            if (containerInRoom.length == 1) {
                                if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                                }
                            } else if (containerInRoom.length >= 2) {

                                const container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                                    filter: (structure) => {
                                        return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0;
                                    }
                                });
                                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(container, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                                }
                            } else {
                                const source = creep.room.find(FIND_SOURCES);
                                if ((creep.room.storage.store[RESOURCE_ENERGY] > 100000 && source.length == 2) || (creep.room.storage.store[RESOURCE_ENERGY] > 50000 && source.length == 1)) {
                                    if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(creep.room.storage, { ignoreCreeps: true, ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
                                    }
                                } else {
                                    const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(source);
                                    }
                                }
                            }
                        }

                    } else if (nydus.length < 2) {
                        const containerInRoom = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0;
                            }
                        });
                        if (containerInRoom.length == 1) {
                            if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else if (containerInRoom.length >= 2) {
                            const container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                                filter: (structure) => {
                                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0;
                                }
                            });
                            if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(container, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else {
                            const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source);
                            }
                        }
                    }
                } else if (creep.memory.state == "doWork") {
                    const spawnEnergyInRoom = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                        }
                    });

                    if (creep.room.controller.ticksToDowngrade < 5000) {
                        creep.memory.roleTask = 'fastUpgrade';
                        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller, { heuristicWeight: 1.2, range: 3, reusePath: 50 });
                        }
                    } else {
                        if (spawnEnergyInRoom.length > 0) {
                            const spawnEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                                filter: (structure) => {
                                    return (structure.structureType == STRUCTURE_EXTENSION ||
                                        structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                                }
                            });
                            creep.memory.roleTask = 'fillSpawn';
                            if (creep.transfer(spawnEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(spawnEnergy, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                            }
                        } else {
                            if (creep.room.controller.ticksToDowngrade < 10000) {
                                creep.memory.roleTask = 'fastUpgrade';
                                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(creep.room.controller, { heuristicWeight: 1.2, range: 3, reusePath: 50 });
                                }
                            } else {
                                const constructionSiteWallAndRampartInRoom = creep.room.find(FIND_MY_CONSTRUCTION_SITES, {
                                    filter: (structure) => {
                                        return (structure.structureType == STRUCTURE_WALL ||
                                            structure.structureType == STRUCTURE_RAMPART);
                                    }
                                });
                                if (constructionSiteWallAndRampartInRoom.length > 0) {
                                    creep.memory.roleTask = 'build';
                                    if (creep.build(constructionSiteWallAndRampartInRoom[0]) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(constructionSiteWallAndRampartInRoom[0], { heuristicWeight: 1.2, range: 3, reusePath: 50 });
                                    }
                                } else {
                                    const towerInRoom = creep.room.find(FIND_STRUCTURES, {
                                        filter: (structure) => {
                                            return (structure.structureType == STRUCTURE_TOWER);
                                        }
                                    });
                                    if (towerInRoom.length > 0) {
                                        const towerWithoutEnergy = creep.room.find(FIND_STRUCTURES, {
                                            filter: (structure) => {
                                                return (structure.structureType == STRUCTURE_TOWER) && structure.store[RESOURCE_ENERGY] <= 750;
                                            }
                                        });
                                        if (towerWithoutEnergy.length > 0 && creep.room.controller.level > 2) {
                                            creep.memory.roleTask = 'fillTower';
                                            towerWithoutEnergy.sort((a, b) => a.store[RESOURCE_ENERGY] - b.store[RESOURCE_ENERGY]);
                                            if (creep.transfer(towerWithoutEnergy[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(towerWithoutEnergy[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                                            }
                                        } else {
                                            const constructionSite = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);
                                            if (constructionSite) {
                                                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                                                    creep.moveTo(constructionSite, { heuristicWeight: 1.2, range: 3, reusePath: 50 });
                                                }
                                            } else {
                                                const source = creep.room.find(FIND_SOURCES);
                                                if ((source.length == 1 && creep.room.storage && creep.room.storage.my && creep.room.storage.store[RESOURCE_ENERGY] < 50000) || (source.length > 1 && creep.room.storage && creep.room.storage.my && creep.room.storage.store[RESOURCE_ENERGY] < 100000)) {
                                                    creep.memory.roleTask = 'fillStorage';
                                                    if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                                        creep.moveTo(creep.room.storage, { euristicWeight: 1.2, range: 1, reusePath: 50 });
                                                    }
                                                } else {
                                                    creep.memory.roleTask = 'upgrade';
                                                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                                        creep.moveTo(creep.room.controller, { heuristicWeight: 1.2, range: 3, reusePath: 30 });
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        const containerInRoom = creep.room.find(FIND_STRUCTURES, {
                                            filter: (structure) => {
                                                return (structure.structureType == STRUCTURE_CONTAINER) && structure.hits < structure.hitsMax;
                                            }
                                        });
                                        if (containerInRoom.length > 0) {
                                            containerInRoom.sort((a, b) => a.hits - b.hits);
                                            if (creep.repair(containerInRoom[0]) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 3, reusePath: 50 });
                                            }
                                        } else {
                                            const constructionSite = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);
                                            if (constructionSite) {
                                                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                                                    creep.moveTo(constructionSite, { heuristicWeight: 1.2, range: 3, reusePath: 50 });
                                                }
                                            } else {
                                                const source = creep.room.find(FIND_SOURCES);
                                                if ((source.length == 1 && creep.room.storage && creep.room.storage.my && creep.room.storage.store[RESOURCE_ENERGY] < 50000) || (source.length > 1 && creep.room.storage && creep.room.storage.my && creep.room.storage.store[RESOURCE_ENERGY] < 100000)) {
                                                    creep.memory.roleTask = 'fillStorage';
                                                    if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                                        creep.moveTo(creep.room.storage, { euristicWeight: 1.2, range: 1, reusePath: 50 });
                                                    }
                                                } else {
                                                    creep.memory.roleTask = 'upgrade';
                                                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                                        creep.moveTo(creep.room.controller, { heuristicWeight: 1.2, range: 3, reusePath: 30 });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                creep.moveTo(new RoomPosition(25, 25, creep.memory.room), { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
            }
        }
    }
};
module.exports = Drone;