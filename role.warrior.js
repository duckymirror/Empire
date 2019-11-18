var roleWarrior = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        var hostileCreeps = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
        var hostileCreepsInRoom = creep.room.find(FIND_HOSTILE_CREEPS);
        if (hostileCreeps.length > 0) {
            creep.rangedAttack(hostileCreeps[0]);
        } else if (hostileCreepsInRoom.length > 0) {
            creep.moveTo(hostileCreepsInRoom[0]);
        } else {
            creep.moveTo(Game.flags.attack);
        }
    }
};
module.exports = roleWarrior;
