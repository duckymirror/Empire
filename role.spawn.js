var roleSpawn = {
    run(spawn) {

        if (Game.spawns["Spawn1"]) {
            var originSpawn = Game.spawns["Spawn1"];
            var originRoom = originSpawn.room;
            var sources = originRoom.find(FIND_SOURCES);
            var amountEnergy = originRoom.energyCapacityAvailable;
        }

        if (Game.spawns["Spawn2"]) {
            var originSpawn1 = Game.spawns["Spawn2"];
            var originRoom1 = originSpawn1.room;
            var sources1 = originRoom1.find(FIND_SOURCES);
            var amountEnergy1 = originRoom1.energyCapacityAvailable;
        }

        if (Game.spawns["Spawn3"]) {
            var originSpawn2 = Game.spawns["Spawn3"];
            var originRoom2 = originSpawn2.room;
            var sources2 = originRoom2.find(FIND_SOURCES);
            var amountEnergy2 = originRoom2.energyCapacityAvailable;
        }

        if (Game.spawns["Spawn4"]) {
            var originSpawn3 = Game.spawns["Spawn4"];
            var originRoom3 = originSpawn3.room;
            var sources3 = originRoom3.find(FIND_SOURCES);
            var amountEnergy3 = originRoom3.energyCapacityAvailable;
        }

        var numberCreep = Game.time;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if (Game.spawns["Spawn1"]) {
            if (Memory.room.W49S21.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S21) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S21.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S21) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE]
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S21.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S21) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S21.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S21) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.W49S21.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW49S21) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep(
                    [RANGED_ATTACK, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.W49S21.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW49S21) {
                var newName = "claimer | " + numberCreep;
                originSpawn.spawnCreep(
                    [CLAIM, MOVE] ||
                    [CLAIM, CLAIM, MOVE, MOVE]
                    [CLAIM, CLAIM, CLAIM, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.W49S21.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW49S21) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            }
        }
        
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if (Game.spawns["Spawn2"]) {
            if (Memory.room.W49S21.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S21) {
                var newName = "miner0 | " + numberCreep;
                originSpawn1.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S21.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S21) {
                var newName = "transporter | " + numberCreep;
                originSpawn1.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S21.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S21) {
                var newName = "miner1 | " + numberCreep;
                originSpawn1.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S21.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S21) {
                var newName = "builder | " + numberCreep;
                originSpawn1.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.W49S27.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW49S27) {
                var newName = "warrior | " + numberCreep;
                originSpawn1.spawnCreep(
                    [RANGED_ATTACK, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.W49S27.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW49S27) {
                var newName = "claimer | " + numberCreep;
                originSpawn1.spawnCreep(
                    [CLAIM, MOVE] ||
                    [CLAIM, CLAIM, MOVE, MOVE]
                    [CLAIM, CLAIM, CLAIM, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.W49S27.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW49S27) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn1.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            }
        }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if (Game.spawns["Spawn3"]) {
            if (Memory.room.W49S21.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S21) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S21.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S21) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S21.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S21) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S21.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S21) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.W49S27.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW49S27) {
                var newName = "warrior | " + numberCreep;
                originSpawn1.spawnCreep(
                    [RANGED_ATTACK, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.W49S27.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW49S27) {
                var newName = "claimer | " + numberCreep;
                originSpawn1.spawnCreep(
                    [CLAIM, MOVE] ||
                    [CLAIM, CLAIM, MOVE, MOVE]
                    [CLAIM, CLAIM, CLAIM, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.W49S27.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW49S27) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn1.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            }
        }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if (Game.spawns["Spawn4"]) {
            if (Memory.room.W49S21.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S21) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S21.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S21) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S21.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S21) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, MOVE, MOVE] ||
                    [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S21.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S21) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.W49S27.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW49S27) {
                var newName = "warrior | " + numberCreep;
                originSpawn1.spawnCreep(
                    [RANGED_ATTACK, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE] ||
                    [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.W49S27.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW49S27) {
                var newName = "claimer | " + numberCreep;
                originSpawn1.spawnCreep(
                    [CLAIM, MOVE] ||
                    [CLAIM, CLAIM, MOVE, MOVE]
                    [CLAIM, CLAIM, CLAIM, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.W49S27.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW49S27) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn1.spawnCreep(
                    [WORK, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE] ||
                    [WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE] ||
                    [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            }
        }
    }
};
module.exports = roleSpawn;
