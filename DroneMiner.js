let DroneMiner = {
    /** @param {Creep} creep **/
    control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {

            const linkInRoom = creep.room.find(FIND_STRUCTURES, { filter: s => s.structureType == STRUCTURE_LINK });
            if (linkInRoom.length > 0) {
                var linkIsNear = creep.pos.findInRange(FIND_STRUCTURES, 1, { filter: s => s.structureType == STRUCTURE_LINK });
            }
            const containerNear = creep.pos.findInRange(FIND_STRUCTURES, 2, { filter: s => s.structureType == STRUCTURE_CONTAINER });
            const source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);

            if (creep.store[RESOURCE_ENERGY] === 0) {
                creep.memory.repair = false;
            }
            if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
                creep.memory.repair = true;
            }

            if (containerNear.length == 1) {
                if (containerNear[0].hits < containerNear[0].hitsMax && creep.memory.repair) {
                    creep.repair(containerNear[0]);
                } else if (containerNear[0].hits < containerNear[0].hitsMax && !creep.memory.repair) {
                    creep.harvest(source);
                }
            }

            if (linkInRoom && linkInRoom.length > 1 && linkIsNear && linkIsNear.length > 0) {

                if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
                    if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                        if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                            creep.moveTo(containerNear[0].pos, { ignoreCreeps: false, reusePath: 50 });
                        } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950 || linkIsNear[0].store[RESOURCE_ENERGY] < 800) {
                            creep.harvest(source);
                        }
                    } else {
                        creep.moveTo(source, { rignoreCreeps: false, reusePath: 50 });
                    }
                } else {
                    if (linkIsNear[0].store[RESOURCE_ENERGY] < 800) {
                        creep.transfer(linkIsNear[0], RESOURCE_ENERGY);
                        creep.harvest(source);
                    } else {
                        if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                            creep.harvest(source);
                        }
                    }
                }

            } else {

                if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                    if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                        creep.moveTo(containerNear[0].pos, { ignoreCreeps: false, reusePath: 50 });
                    } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                        creep.harvest(source);
                    }
                } else {
                    creep.moveTo(source, { rignoreCreeps: false, reusePath: 50 });
                }
            }
        }
    }
};
module.exports = DroneMiner;