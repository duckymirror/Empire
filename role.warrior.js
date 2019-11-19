var roleWarrior = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        var hostileCreeps = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3, {
            filter: (creep) => {
                return (creep.owner.username != "kotyara");
            }
        });
        var hostileCreepsInRoom = creep.room.find(FIND_HOSTILE_CREEPS, {
            filter: (creep) => {
                return (creep.owner.username != "kotyara");
            }
        });
        if (hostileCreeps.length > 0) {
            if(hostileCreeps.length > 1) {
                creep.rangedAttack(hostileCreeps[1]);
            } else {
                creep.rangedAttack(hostileCreeps[0]);
            }
        } else if (hostileCreepsInRoom.length > 0) {
            if (hostileCreepsInRoom.length > 1) {
                creep.moveTo(hostileCreepsInRoom[1]);
            } else {
                creep.moveTo(hostileCreepsInRoom[0]);
            }
        } else {
            creep.moveTo(Game.flags.attack);
        }
    }
};
module.exports = roleWarrior;
