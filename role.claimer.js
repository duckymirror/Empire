var roleClaimer = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        var targetRoom = "W48S27"


        if (creep.room.name != targetRoom) {
          creep.moveTo(new RoomPosition(25, 25, targetRoom));
        } else if (creep.room.name == targetRoom) {
          if(creep.room.controller && !creep.room.controller.my) {
            if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller);
            }
          } else {
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller);
            }
            if(creep.signController(creep.room.controller, "Room under control") == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller);
            }
          }
        }
    }
};
module.exports = roleClaimer;
