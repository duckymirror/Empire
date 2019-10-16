var roleMiner = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        if (creep.memory.room == creep.room.name) {
            var source = Game.getObjectById(creep.memory.sourceId);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { reusePath: 20 });
            } else {
                creep.harvest(source);
            }
        } else {
            creep.moveTo(new RoomPosition(25, 25, creep.memory.room));
        }
    }
};
module.exports = roleMiner;