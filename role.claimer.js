var roleClaimer = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }

        if (creep.memory.room == "E51S39") {
            creep.memory.workMode = 0;
        } else if (creep.memory.room == "E49S39") {
            creep.memory.workMode = 1;
        } else if (creep.memory.room == "E49S39") {
            creep.memory.workMode = 2;
        }

        switch (creep.memory.workMode) {
            case 0:
                if (creep.room.name != "E49S39") {
                    creep.moveTo(new RoomPosition(25, 25, "E49S39"));
                } else if (creep.room.name == "E49S39") {
                    if (!creep.room.controller.my) {
                        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller);
                        }
                    } else {
                      if(creep.room.controller) {
                          if(creep.signController(creep.room.controller, "Peace player") == ERR_NOT_IN_RANGE) {
                              creep.moveTo(creep.room.controller);
                          }
                      }
                    }
                }
                break;
            case 1:
                if (creep.room.name != "E49S39") {
                    creep.moveTo(new RoomPosition(25, 25, "E49S39"));
                } else if (creep.room.name == "E49S39") {
                    if (!creep.room.controller.my) {
                        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller);
                        }
                    }
                }
                break;
            case 2:
                if (creep.room.name != "E49S39") {
                    creep.moveTo(new RoomPosition(25, 25, "E49S39"));
                } else if (creep.room.name == "E49S39") {
                    if (!creep.room.controller.my) {
                        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller);
                        }
                    }
                }

                break;
        }

    }
};
module.exports = roleClaimer;