function getResource(creep) {
    gR = require("BasicFunctions")
    gR.run(creep, creep.memory.state);
}

function doWork(creep) {
    const constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);

    if (constructionSite) {
        if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) creep.moveTo(constructionSite, { heuristicWeight: 1.2, range: 3, reusePath: 20 });
    } else {
        gR = require("BasicFunctions")
        gR.run(creep, "upgrade");
    }
}

const DroneHelperBuilder = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {
            if (Game.flags.Claim && creep.room.name == Game.flags.Claim.room.name) {
                if (creep.store.getUsedCapacity() == 0) creep.memory.state = "getResource";
                else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) creep.memory.state = "doWork";

                if (creep.memory.state == "getResource") getResource(creep);
                if (creep.memory.state == "doWork") doWork(creep);
            } else {
                creep.moveTo(new RoomPosition(25, 25, Game.flags.Claim.room.name), { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
            }
        }
    }
}
module.exports = DroneHelperBuilder;