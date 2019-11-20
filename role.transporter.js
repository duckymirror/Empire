var roleTransporter = {
	/** @param {Creep} creep **/
  	control(creep) {
		var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType == STRUCTURE_EXTENSION ||
				structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
				}
			});
		var tower = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType == STRUCTURE_TOWER) && structure.energy < 700;
			}
			});
		const droppedEnergy = creep.room.find(FIND_DROPPED_RESOURCES);
		var storageInRoom = creep.room.storage;
		
		var ruin = creep.room.find(FIND_RUINS, {
			filter: (ruin) => {
				return ruin.store[RESOURCE_ENERGY] > 0;
			}
		});

		var containerNear = creep.room.find(FIND_STRUCTURES, {filter:s=>s.structureType == STRUCTURE_CONTAINER});
		

		if (creep.spawning) {
			creep.memory.room = creep.room.name;
		} else {
			if (creep.store[RESOURCE_ENERGY] == 0) {
				creep.memory.work = 0;
			} else if (targets) {
				creep.memory.work = 2;
			} else if (storageInRoom && storageInRoom.store[RESOURCE_ENERGY] != 500000) {
				creep.memory.work = 5;
			} else {
				creep.memory.work = 6;
			}

			switch (creep.memory.work) {
				case 0:
					creep.say("📥");
					if (ruin.length > 0) {
						if(creep.withdraw(ruin[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(ruin[0]);
						}
					}

					if (containerNear.length > 0 && (containerNear[0] && containerNear[0].store[RESOURCE_ENERGY] > 50 || containerNear[1] && containerNear[1].store[RESOURCE_ENERGY] > 50)) {
						if (containerNear[0].store[RESOURCE_ENERGY] > 50) {
							if(creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
								creep.moveTo(containerNear[0]);
							}
						} else {
							if(creep.withdraw(containerNear[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
								creep.moveTo(containerNear[1]);
							}
						}
					} else {
						if (droppedEnergy[0] && droppedEnergy[0].amount > 300 && creep.memory.source != 1) {
							creep.memory.source = 0;
						} else if (droppedEnergy[1] && droppedEnergy[1].amount > 300) {
							creep.memory.source = 1;
						}
						switch (creep.memory.source) {
							case 0:
								if (creep.pickup(droppedEnergy[0]) == ERR_NOT_IN_RANGE) {
									creep.moveTo(droppedEnergy[0]);
								}
								break;
							case 1:
								if (creep.pickup(droppedEnergy[1]) == ERR_NOT_IN_RANGE) {
									creep.moveTo(droppedEnergy[1]);
								}
								break;
							case 2:
								var targetDroppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
								if (creep.pickup(targetDroppedEnergy) == ERR_NOT_IN_RANGE) {
									creep.moveTo(targetDroppedEnergy);
								}
								break;
						}
					}
					break;

				case 2:
					creep.say("🚛");
					if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets);
					}
					break;

				case 4:
					creep.say("🚚");
					if (tower[0]) {
						if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(tower[0]);
						}
					} else if (tower[1]) {
						if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(tower[0]);
						}
					}
					break;

				case 5:
					creep.say("📤");
					if (creep.transfer(storageInRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(storageInRoom);
					}
					break;

				case 6:
					creep.say("⬆️");
					if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller);
					}
					break;
			}
		}
	}
};
module.exports = roleTransporter;
