let Overlord = {
	/** @param {Creep} creep **/
	control(creep) {
		if (creep.spawning) {
			creep.memory.room = creep.room.name;
		}

		creep.memory.room = creep.room.name;
  
		targetRoom = 'W49N25';

		if (creep.room.name != targetRoom && Game.flags.claim) {
			creep.moveTo(Game.flags.claim);
		} else if (creep.room.name != targetRoom) {
			creep.moveTo(new RoomPosition(25, 25, targetRoom), {reusePath: 50});
		} else {
		  	if (creep.room.controller) {
				if (!creep.room.controller.my) {
					
					if (creep.room.controller.reservation && creep.room.controller.reservation.username != "JOURLOY" && creep.room.controller.reservation.ticksToEnd > 0) {
						if (creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
							creep.moveTo(creep.room.controller);
						}
					} else {
						if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
							creep.moveTo(creep.room.controller);
						} else if (creep.claimController(creep.room.controller) == ERR_FULL) {
						  if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
								creep.moveTo(creep.room.controller, {visualizePathStyle: {
							  stroke: 'purple',
							  lineStyle: 'dashed',
							  opacity: 1,
								}, reusePath: 50});
						  }
						}
					}
				} else {
			  		if(creep.signController(creep.room.controller, "HIVE") == ERR_NOT_IN_RANGE) {
				  		creep.moveTo(creep.room.controller);
			  		}
				}
			}
		}
	}
  };
  module.exports = Overlord;
