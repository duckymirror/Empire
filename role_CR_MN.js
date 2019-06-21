var role_CR_MN = {

/** @param {Creep} creep **/

	control(creep) {
		var source = Game.getObjectById(creep.memory.sourceId);
		var energyStoreForSpawn = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType === STRUCTURE_EXTENSION ||
					structure.structureType === STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
			}
		});

		if (creep.spawning) {
			creep.memory.room = creep.room.name;
		}

		if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
			creep.moveTo(source);
		}
	}
};
module.exports = role_CR_MN;
