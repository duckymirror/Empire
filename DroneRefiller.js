function getResource(creep) {
    const containerInRoom = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 20;
        }
    });
    if (containerInRoom.length == 1) {
        if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
    } else if (containerInRoom.length >= 2) {
        containerInRoom.sort((a, b) => b.store[RESOURCE_ENERGY] - a.store[RESOURCE_ENERGY]);
        if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
    } else {
        if (creep.room.terminal && creep.room.terminal.store[RESOURCE_ENERGY] > 20) {
            if (creep.withdraw(creep.room.terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.terminal, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
        } else {
            if ((!Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner1"] || Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner1"] == 0) || (!Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner2"] || Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner2"] == 0)) {
                if (creep.room.storage && (creep.room.storage.store[RESOURCE_ENERGY] > 20)) {
                    if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.storage, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                }
            }
        }
    }
}

function doWork(creep) {
    gR = require("BasicFunctions")
    gR.run(creep, "refill");
}


const DroneRefiller = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {
            if (creep.room.name == creep.memory.room) {
                if (creep.store.getUsedCapacity() == 0) creep.memory.state = "getResource";
                else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) creep.memory.state = "doWork";

                if (creep.memory.state == "getResource") getResource(creep);
                if (creep.memory.state == "doWork") doWork(creep);
            } else {
                creep.moveTo(new RoomPosition(25, 25, creep.memory.room), { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
            }
        }
    }
}
module.exports = DroneRefiller;