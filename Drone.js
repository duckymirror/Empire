var Drone = {
	/** @param {Creep} creep **/
  	control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {

            if (creep.store.getUsedCapacity() == 0) {
                creep.memory.work = "getResource";
            } else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {
                creep.memory.work = "doWork"
            }

            if (creep.memory.work == "getResource") {
                let droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                    filter: (droppedEnergy) => {
                        return droppedEnergy.amout >= creep.store.getFreeCapacity();
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
            
                if (droppedEnergy) {
                    if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(droppedEnergy, {reusePath: 50});
                    }
                } else if (ruin) {
                    if(creep.withdraw(ruin, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(ruin, {reusePath: 50});
                    }
                } else if (container) {
                    if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container, {reusePath: 50});
                    }
                } else if (creep.room.storage.store[RESOURCE_ENERGY] >= creep.store.getFreeCapacity()) {
                    if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.storage, {reusePath: 50});
                    }
                } else if (creep.room.terminal.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity()) {
                    if (creep.withdraw(creep.room.terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.terminal, {reusePath: 50});
                    }
                } else {
                    let source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source, {reusePath: 50});
                    }
                }
            } else if (creep.memory.work == "doWork") {
                let spawnEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                    }
                });
                let tower = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER) && structure.store[RESOURCE_ENERGY] < 1000;
                    }
                });
                let constructionSite = creep.room.find(FIND_MY_CONSTRUCTION_SITES);

                if (spawnEnergy) {
                    if (creep.transfer(spawnEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(spawnEnergy, {reusePath: 50});
                    } else {
                        creep.transfer(spawnEnergy, RESOURCE_ENERGY)
                    }
                } else if (creep.room.controller.ticksToDowngrade < 5000) {
                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller, {reusePath: 50});
                    }
                } else if (tower.length > 0) {
                    tower.sort((a,b) => a.store[RESOURCE_ENERGY] - b.store[RESOURCE_ENERGY]);
                    if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(tower[0], {reusePath: 50});
                    }
                } else if (constructionSite.length > 0) {
                    if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(constructionSite[0], {reusePath: 50});
                    }
                } else if (creep.room.storage.store[RESOURCE_ENERGY] < 500000) {
                    if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.storage, {reusePath: 50});
                    }
                } else {
                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller, {reusePath: 50});
                    }
                }
            }
        }
    }
};
module.exports = Drone;