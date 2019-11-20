var roleBuilder = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        }
        
        if (!creep.memory.room) {
            creep.memory.room = creep.room.name
        }
      var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_EXTENSION ||
            structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
          }
      });

        if (creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.building = false;
        }
        if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
            creep.memory.building = true;
        }
        
        var ruin = creep.room.find(FIND_RUINS, {
			filter: (ruin) => {
				return ruin.store[RESOURCE_ENERGY] > 0;
			}
		});
        if (creep.memory.building) {
            var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (creep.room.controller && creep.room.controller.ticksToDowngrade <= 3000) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            } else if (constructionSite.length != 0) {
                if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite[0]);
                }
            } else if (targets) {
              if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(targets);
              }
            } else {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        } else {
            if (creep.room.name != creep.memory.room) {
                creep.moveTo(new RoomPosition(25, 25, creep.memory.room.name));
            } else {
                var containerNear = creep.room.find(FIND_STRUCTURES,{filter:s=>s.structureType == STRUCTURE_CONTAINER});
                if (ruin.length > 0) {
					if(creep.withdraw(ruin[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(ruin[0]);
					}
				} else if (containerNear.length == 2 && (containerNear[0].store[RESOURCE_ENERGY] > 0 || containerNear[1].store[RESOURCE_ENERGY] > 0)) {
                    if (containerNear[0].store[RESOURCE_ENERGY] > 0 && containerNear[0].store[RESOURCE_ENERGY] > containerNear[1].store[RESOURCE_ENERGY]) {
                        if (creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(containerNear[0]);
                        }
                    } else {
                        if (creep.withdraw(containerNear[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(containerNear[1]);
                        }
                    }
                } else if (containerNear.length == 1 && containerNear[0].store[RESOURCE_ENERGY] > 0) {
                    if (creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(containerNear[0]);
                    }
                } else if (creep.room.storage) {
                    if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.storage);
                    }
				} else {
                    const droppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                    if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(droppedEnergy);
                    }
                }
            }
        }
    }
};
module.exports = roleBuilder;
