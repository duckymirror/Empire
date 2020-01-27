const ScoutTrooper = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {
            if (creep.room.controller && creep.room.controller.my) {
                if (!creep.room.controller.sign || (creep.room.controller.sign && creep.room.controller.sign.text != Memory.code)) {
                    if (creep.signController(creep.room.controller, Memory.code) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.controller)
                }
            }
        }
    }
}
module.exports = ScoutTrooper;