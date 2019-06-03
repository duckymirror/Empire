var roleBuilder = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.carry.energy === 0 || creep.room.name != creep.memory.room) {
            creep.memory.building = false;
        }
        if (creep.carry.energy == creep.carryCapacity && creep.room.name == creep.memory.room) {
            creep.memory.building = true;
        }

        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        if (creep.memory.building) {
            var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (creep.room.controller.ticksToDowngrade <= 3000) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            } else if (constructionSite.length != 0) {
                if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite[0]);
                }
            } else {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        } else {
            if (creep.room.name != creep.memory.room) {
                creep.moveTo(new RoomPosition(25, 25, creep.memory.room.name));
            } else {
                var cntr = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER);
                    }
                });
                if (cntr.store > 0) {
                    if (creep.withdraw(cntr[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(cntr[0]);
                    }
                } else if (creep.room.storage) {
                    if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.storage);
                    }
                } else {
                    const droppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                    if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(droppedEnergy);
                    }
                }
            }
        }
    }
};
module.exports = roleBuilder;
