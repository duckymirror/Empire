var roleSpawn = {
  run(spawn) {

    if (Game.spawns["AR-KD1"]) {
      var originSpawn = Game.spawns["AR-KD1"];
      var originRoom = originSpawn.room;
      var sources = originRoom.find(FIND_SOURCES);

      if (sources[0].id == sources[1].id && !Memory.sources.sourceId0 && !Memory.sources.sourceId1) {
        while (sources[0].id == sources[1].id) {
          var sources = originRoom.find(FIND_SOURCES);
        }
      }

      if (sources[0].id != sources[1].id && !Memory.sources.sourceId0 && !Memory.sources.sourceId1) {
        Memory.sources.sourceId0 = sources[0].id;
        Memory.sources.sourceId1 = sources[1].id;
      }

      var extensions = originRoom.find(FIND_STRUCTURES, {
        filter: (structure) => {
          (structure.structureType == STRUCTURE_EXTENSION);
        }
      });
      var amountExtensions = extensions.length;
      var amountEnergy = originRoom.energyCapacityAvailable;
    }

    var numberCreep = Math.random();

    if (Memory.room.E51S39.amount_CR_MN_0_IsLive < Memory.amountCreeps.room.One.amount_CR_MN_0_InRoom) {
      var newName = "CR-MN-0 || " + numberCreep;
      if (amountEnergy == 300 && Memory.room.E51S39.amount_CR_TR_IsLive < 1) {
        originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } if (amountEnergy == 300 && Memory.room.E51S39.amount_CR_TR_IsLive > 0) {
        originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 350) {
        originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 400) {
        originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 450) {
        originSpawn.spawnCreep([WORK, WORK, WORK, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 500) {
        originSpawn.spawnCreep([WORK, WORK, WORK, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 550) {
        originSpawn.spawnCreep([WORK, WORK, WORK, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 600) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 650) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy == 700) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else if (amountEnergy >= 750) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-0", sourceId: Memory.sources.sourceId0}});
      } else {
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
        console.log("| ERROR: CR-MN-0 can't spawn. Problem with amount energy                       |");
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
      }
    } else if (Memory.room.E51S39.amount_CR_MN_1_IsLive < Memory.amountCreeps.room.One.amount_CR_MN_1_InRoom) {
      var newName = "CR-MN-1 || " + numberCreep;
      if (amountEnergy == 300) {
        originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 350) {
        originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 400) {
        originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 450) {
        originSpawn.spawnCreep([WORK, WORK, WORK, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 500) {
        originSpawn.spawnCreep([WORK, WORK, WORK, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 550) {
        originSpawn.spawnCreep([WORK, WORK, WORK, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 600) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 650) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy == 700) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else if (amountEnergy >= 750) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR-MN-1", sourceId: Memory.sources.sourceId1}});
      } else {
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
        console.log("| ERROR: CR-MN-1 can't spawn. Problem with amount energy                       |");
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
      }
    } else if (Memory.room.E51S39.amount_CR_TR_IsLive < Memory.amountCreeps.room.One.amount_CR_TP_InRoom) {
      var newName = "CR_TR || " + numberCreep;
      if (amountEnergy == 300) {
        originSpawn.spawnCreep([CARRY, CARRY, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 350) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 400) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 450) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 500) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 550) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 600) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 650) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 700) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 750) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 800) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 850) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 900) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy == 950) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else if (amountEnergy >= 1000) {
        originSpawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_TR"}});
      } else {
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
        console.log("| ERROR: CR_TR can't spawn. Problem with amount energy                         |");
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
      }
    } else if (Memory.room.E51S39.amount_CR_BD_IsLive < Memory.amountCreeps.room.One.amount_CR_BD_InRoom) {
      var newName = "CR_BD || " + numberCreep;
      if (amountEnergy == 300) {
        originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 350) {
        originSpawn.spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 400) {
        originSpawn.spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 450) {
        originSpawn.spawnCreep([WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 500) {
        originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 550) {
        originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 600) {
        originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 650) {
        originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 700) {
        originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 750) {
        originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 800) {
        originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 850) {
        originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 900) {
        originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 950) {
        originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 1000) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 1050) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 1100) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 1150) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy == 1200) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else if (amountEnergy >= 1250) {
        originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
        {memory: {role: "CR_BD"}});
      } else {
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
        console.log("| ERROR: CR_BD can't spawn. Problem with amount energy                         |");
        console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:");
      }
    }


  }
};
module.exports = roleSpawn;
