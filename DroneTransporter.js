/*

Коды предупреждения:

0  -  Нет источника энергии
01 -  Не достаточно энергии
80 - Энергия есть в руинах
81 - Энергия есть в контейнерах
82 - Энергия есть на земле
90 - Энергии не достаточно в расширителях
91 - Энергии не достаточно в хранилище
92 - Необходимо улучшить контроллер

*/

var DroneTransporter = {
	/** @param {Creep} creep **/
  	control(creep) {

		if (creep.spawning) {

			creep.memory.room = creep.room.name;

			creep.memory.visualizePathForWork = {
                stroke: 'cyan',
                lineStyle: 'dashed',
                opacity: 1,
            };

            creep.memory.visualizePathForGetStore = {
                stroke: 'orange',
                lineStyle: 'dashed',
                opacity: 1,
            };

		} else {

			let targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
				filter: (structure) => {
					return (structure.structureType == STRUCTURE_EXTENSION ||
						structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
				}
			});
			let droppedEnergy = creep.room.find(FIND_DROPPED_RESOURCES);
			let storageInRoom = creep.room.storage;
			let ruin = creep.room.find(FIND_RUINS, {
				filter: (ruin) => {
					return ruin.store[RESOURCE_ENERGY] > 0;
				}
			});
			let containerNear = creep.room.find(FIND_STRUCTURES, {filter:s=>s.structureType == STRUCTURE_CONTAINER});

			if (creep.store[RESOURCE_ENERGY] == 0) {
				creep.memory.work = 0;
			} else if (targets) {
				creep.memory.work = 1;
			} else if (storageInRoom && storageInRoom.store[RESOURCE_ENERGY] < 500000) {
				creep.memory.work = 2;
			} else {
				creep.memory.work = 3;
			}

			switch (creep.memory.work) {
				case 0:

					if (ruin.length > 0) {
						if(creep.withdraw(ruin[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(ruin[0], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
							creep.say("80");
						}
					} else if (containerNear.length > 0 && (containerNear[0] && containerNear[0].store[RESOURCE_ENERGY] > 50 || containerNear[1] && containerNear[1].store[RESOURCE_ENERGY] > 50)) {
						if (containerNear[1].store[RESOURCE_ENERGY] > 50) {
							if(creep.withdraw(containerNear[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
								creep.moveTo(containerNear[1], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
								creep.say("81");
							}
						} else {
							if(creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
								creep.moveTo(containerNear[0], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
								creep.say("81");
							}
						}
					} else if (droppedEnergy && droppedEnergy.amount > 800) {
						if (droppedEnergy.length > 1) {
							if (droppedEnergy[0].amount > droppedEnergy[1].amount) {
								creep.memory.source = 1;
							} else {
								creep.memory.source = 2;
							}
						} else {
							creep.memory.source = 1;
						}

						if (creep.memory.source == 1 && droppedEnergy[0].amount > 150) {
							if (creep.pickup(droppedEnergy[0]) == ERR_NOT_IN_RANGE) {
								creep.moveTo(droppedEnergy[0], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
								creep.say("82");
							}
						} else if (creep.memory.source == 2 && droppedEnergy[1].amount > 150) {
							if (creep.pickup(droppedEnergy[1]) == ERR_NOT_IN_RANGE) {
								creep.moveTo(droppedEnergy[1], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
								creep.say("82");
							}
						} else {
							if ((creep.memory.source == 1 && droppedEnergy[0].amount <= 150) || (creep.memory.source == 2 && droppedEnergy[1].amount <= 150)) {
								creep.say("01");
							} else {
								creep.say("0");
							}
						}
					}
					break;
				
				case 1:

					if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets, {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForWork});
						creep.say("90");
					}
					break;

				case 2:

					if (creep.transfer(storageInRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(storageInRoom, {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForWork});
						creep.say("91");
					}
					break;

				case 3:

					if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller, {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForWork});
						creep.say("92");
					}
					break;
	
			}
			
		}
	}
};
module.exports = DroneTransporter;
