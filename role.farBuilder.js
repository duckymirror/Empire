var roleFarBuilder = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;

            creep.memory.visualizePathForWork = {
                stroke: 'cyan',
                lineStyle: 'dashed',
                opacity: 1,
            };

            creep.memory.visualizePathForGetStore = {
                stroke: 'orange',
                lineStyle: 'dashed',
                opacity: 1,
            };

        } else {
            
            if (Memory.room.claim) {
                let targetRoom = Memory.room.claim;
                var source = creep.pos.findClosestByPath(FIND_SOURCES);
                if (creep.store[RESOURCE_ENERGY] === 0) {
                    creep.memory.building = false;
                }
                if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
                    creep.memory.building = true;
                }

                if (creep.memory.building != true) {
                    if (creep.room.name == Memory.room.claim) {
                        const droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE && droppedEnergy.amount > 100) {
                            creep.moveTo(droppedEnergy);
                        } else if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source, { reusePath: 20, reusePath: creep.memory.visualizePathForGetStore});
                        }
                    } else {
                        if (creep.room.storage) {
                            if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.storage);
                            }
                        } else {
                            creep.moveTo(new RoomPosition(25, 25, targetRoom));
                        }
                    }
                } else {
                    if (creep.room.name == Memory.room.claim) {
                        let targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_EXTENSION ||
                                    structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                            }
                        });
                        var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if (targets && creep.room.controller.ticksToDowngrade > 3000) {  
                            if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets, {reusePath: 30});
                                creep.say("90");
                            }
                        } else if (constructionSite.length > 0 && creep.room.controller.ticksToDowngrade > 3000) {
                            if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(constructionSite[0]);
                                creep.say("91");
                            }
                        } else {
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.controller);
                                creep.say("92");
                            }
                        }
                    } else {
                        creep.moveTo(new RoomPosition(25, 25, targetRoom));
                    }
                }

            } else {
                creep.say("0");
            }
        }
    }
};
module.exports = roleFarBuilder;
