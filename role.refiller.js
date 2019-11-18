/*

Коды предупреждения:

*/

var DroneRefiller = {
    /** @param {Creep} creep **/
    control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {

            if (!creep.memory.room) {
                creep.memory.room = creep.room.name;
            }

            if (creep.store[RESOURCE_ENERGY] === 0) {

                creep.memory.building = false;
                

            } else if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {

                creep.memory.building = true;

            }
            
            var containerNear = creep.room.find(FIND_STRUCTURES,{filter:s=>s.structureType == STRUCTURE_CONTAINER});
            var tower = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER);
                }
            });
            var ruin = creep.room.find(FIND_RUINS, {
                filter: (ruin) => {
                    return ruin.store[RESOURCE_ENERGY] > 0;
                }
            });
                
            switch (creep.memory.building) {
                case true:

                    if (tower) {
                        tower.sort((a,b) => a.store[RESOURCE_ENERGY] - b.store[RESOURCE_ENERGY]);
                        creep.say("🚚");
                        if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(tower[0]);
                        }
                    }

                    break;

                case false:

                    if (containerNear.length == 2 && (containerNear[0].store[RESOURCE_ENERGY] > 0 || containerNear[1].store[RESOURCE_ENERGY] > 0)) {
                        if (containerNear[0].store[RESOURCE_ENERGY] > 0 && containerNear[0].store[RESOURCE_ENERGY] > containerNear[1].store[RESOURCE_ENERGY]) {
                            if (creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(containerNear[0]);
                            }
                        } else {
                            if (creep.withdraw(containerNear[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(containerNear[1]);
                            }
                        }
                    } else if (containerNear.length == 1 && containerNear[0].store[RESOURCE_ENERGY] > 0) {
                        if (creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(containerNear[0]);
                        }
                    } else if (creep.room.storage) {
                        if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.storage);
                        }
                    } else if (ruin && ruin.length > 0) {
                        if(creep.withdraw(ruin[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(ruin[0]);
                        }
                    } else {
                        const droppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(droppedEnergy);
                        }
                    }
                    break;
            }

        }
    }
};
module.exports = DroneRefiller;