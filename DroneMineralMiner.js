function doMine(creep) {
    const extractor = creep.room.find(FIND_STRUCTURES, { filter: s => s.structureType == STRUCTURE_EXTRACTOR });

    if (creep.store.getUsedCapacity([RESOURCE_HYDROGEN]) > 0) {
        if (creep.pos.isNearTo(creep.room.storage.pos)) {
            creep.transfer(creep.room.storage, RESOURCE_HYDROGEN)
        }
    }
    
    if (extractor.length > 0 && extractor[0].cooldown && extractor[0].cooldown > 0) {

    } else if (extractor.length > 0 && (!extractor[0].cooldown || extractor[0].cooldown == 0)) {
        const source = creep.room.find(FIND_MINERALS);
        const containerNear = creep.pos.findInRange(FIND_STRUCTURES, 1, { filter: s => s.structureType == STRUCTURE_CONTAINER });

        if (containerNear.length == 1 && creep.pos.isNearTo(source[0])) {
            if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                creep.moveTo(containerNear[0].pos, { ignoreCreeps: false, reusePath: 50 });
            } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                creep.harvest(source[0]);
            }
        } else {
            creep.moveTo(source[0], { ignoreCreeps: false, reusePath: 10 });
        }
    }
}

const DroneMiner = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {
            if (creep.room.name == creep.memory.room) {
                doMine(creep);
            } else {
                creep.moveTo(new RoomPosition(25, 25, creep.memory.room), { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
            }
        }
    }
}
module.exports = DroneMiner;