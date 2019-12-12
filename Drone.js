var Drone = {
	/** @param {Creep} creep **/
  	control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {

            if (creep.room.name == creep.memory.room) {
                if (creep.store.getUsedCapacity() == 0) {
                    creep.memory.work = "getResource";
                } else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {
                    creep.memory.work = "doWork"
                }
                
                if (creep.memory.work == "getResource") {
                    let source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    let droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                        filter: (droppedEnergy) => {
                            return droppedEnergy.amount >= creep.store.getFreeCapacity();
                        }
                    });
                    let ruin = creep.pos.findClosestByPath(FIND_RUINS, {
                        filter: (ruin) => {
                            return ruin.store[RESOURCE_ENERGY] >= creep.store.getFreeCapacity();
                        }
                    });
                    let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] >= creep.store.getFreeCapacity();
                        }
                    });
                
                    if ((creep.room.terminal && creep.room.terminal.store[RESOURCE_UTRIUM] > 0) && (creep.room.storage && creep.room.storage.store[RESOURCE_UTRIUM] < 20000)) {
                        if(creep.withdraw(creep.room.terminal, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.terminal, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    } else if (droppedEnergy) {
                        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(droppedEnergy, {heuristicWeight: 1.2, range: 1});
                        }
                    } else if (ruin) {
                        if(creep.withdraw(ruin, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(ruin, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    } else if (container) {
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(container, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    } else if ((creep.room.storage && creep.room.storage.store[RESOURCE_ENERGY] >= creep.store.getFreeCapacity() && creep.room.storage.store[RESOURCE_ENERGY] > 100000) || (creep.room.storage && creep.room.storage.store[RESOURCE_ENERGY] >= creep.store.getFreeCapacity() && creep.room.storage.store[RESOURCE_ENERGY] > 40000 && !source)) {
                        if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.storage, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    } else if (creep.room.terminal && creep.room.terminal.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity()) {
                        if (creep.withdraw(creep.room.terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.terminal, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    } else {
                        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    }
                } else if (creep.memory.work == "doWork") {
    
                    if (creep.store[RESOURCE_ENERGY] > 0) {
                        let spawnEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_EXTENSION ||
                                    structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                            }
                        });
                        let tower = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_TOWER) && structure.store[RESOURCE_ENERGY] <= 750;
                            }
                        });
                        let constructionSite = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
                        let constructionSiteWallAndRampart = creep.room.find(FIND_MY_CONSTRUCTION_SITES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_WALL ||
                                        structure.structureType == STRUCTURE_RAMPART);
                            }
                        });
        
                        if (spawnEnergy) {
                            if (creep.transfer(spawnEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(spawnEnergy, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                            }
                        } else if (creep.room.controller.ticksToDowngrade < 5000) {
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.controller, {heuristicWeight: 1.2, range: 3, reusePath: 50});
                            }
                        } else if (constructionSiteWallAndRampart.length > 0) { 
                            if (creep.build(constructionSiteWallAndRampart[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSiteWallAndRampart[0], {heuristicWeight: 1.2, range: 3, reusePath: 50});
                            }
                        }else if (tower.length > 0) {
                            tower.sort((a,b) => a.store[RESOURCE_ENERGY] - b.store[RESOURCE_ENERGY]);
                            if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(tower[0], {heuristicWeight: 1.2, range: 1, reusePath: 50});
                            }
                        } else if (constructionSite.length > 0) {
                            if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSite[0], {heuristicWeight: 1.2, range: 3, reusePath: 50});
                            }
                        } else if (creep.room.storage && creep.room.storage.my && creep.room.storage.store[RESOURCE_ENERGY] < 100000) {
                            if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.storage, {euristicWeight: 1.2, range: 1, reusePath: 50});
                            }
                        } else {
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.controller, {heuristicWeight: 1.2, range: 3, reusePath: 30});
                            }
                        }
                    } else {
                        if (creep.store[RESOURCE_UTRIUM] > 0) {
                            if (creep.transfer(creep.room.storage, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.storage, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                            }
                        }
                    }
                    
                }
            } else {
                creep.moveTo(new RoomPosition(25, 25, creep.memory.room), {heuristicWeight: 1.2, range: 1, reusePath: 50});
            }
        }
    }
};
module.exports = Drone;