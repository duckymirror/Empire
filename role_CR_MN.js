var role_CR_MN = {
  /** @param {Creep} creep **/
  control(creep) {
    var source = Game.getObjectById(creep.Memory.sources.sourceId);
    var targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_EXTENSION ||
          structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
        }
    });

    if (creep.spawning) {
      creep.memory.room = creep.room.name;
    }

    if (creep.memory.room == creep.room.name) {
      if (Memory.room.E51S39.amount_CR_TR_IsLive < 1) {
        if (creep.carry.energy != 0) {
          creep.memory.work = 0;
        } else {
          creep.memory.work = 1;
        }
      } else {
        creep.memory.work = 0;
      }
    } else {
      creep.memory.work = 2;
    }

    switch (creep.memory.work) {
      case 0:
        if (creep.harvest(source) = ERR_NOT_IN_RANGE) {
          creep.moveTo(source);
        } else {
          creep.harvest(source);
        }
        break;

      case 1:
        if (creep.transfer(energyStoreForSpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(energyStoreForSpawn);
        }
        break;

      case 2:
        creep.moveTo(new RoomPosition(25, 25, creep.memory.room));
    }
  }
};
module.exports = role_CR_MN;
