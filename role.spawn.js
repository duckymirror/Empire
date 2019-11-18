var roleSpawn = {
    run(spawn) {
        /**********************************************************************************************************\
       |                                               Переменные                                                   |
        \**********************************************************************************************************/

        if (Game.spawns["SP-R1"]) {
            var originSpawn = Game.spawns["SP-R1"];
            var originRoom = originSpawn.room;
            var sources = originRoom.find(FIND_SOURCES);
            var amountEnergy = originRoom.energyCapacityAvailable;
        }
        
        if (Game.spawns["SP-R2"]) {
            var originSpawn1 = Game.spawns["SP-R2"];
            var originRoom1 = originSpawn1.room;
            var sources1 = originRoom1.find(FIND_SOURCES);
            var amountEnergy1 = originRoom1.energyCapacityAvailable;
        }

        if (Game.spawns["SP-R3"]) {
            var originSpawn2 = Game.spawns["SP-R3"];
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

        //let peaceNames = [''];
        //let peaceCreepNames = Game.time % peaceNames.length;

        if (amountEnergy <= 549) {
            if (Memory.room.E45N9.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE45N9) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.E45N9.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE45N9) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.E45N9.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE45N9) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.E45N9.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE45N9) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.E45N9.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE45N9) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep([RANGED_ATTACK, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.E45N9.amountRefillersIsLive < Memory.amountCreeps.amountRefillersInE45N9) {
                var newName = "refiller | " + numberCreep;
                originSpawn.spawnCreep([MOVE, CARRY, MOVE, CARRY, MOVE, CARRY], newName,
                    { memory: { role: "refiller" } });
            }
        } else if (amountEnergy > 549 && amountEnergy <= 799) {
            if (Memory.room.E45N9.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE45N9) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.E45N9.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE45N9) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, CARRY], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.E45N9.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE45N9) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.E45N9.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE45N9) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.E45N9.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE45N9) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep([RANGED_ATTACK, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.E45N9.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE45N9) {
                var newName = "claimer | " + numberCreep;
                originSpawn.spawnCreep([CLAIM, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.E45N9.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInE45N9) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            } else if (Memory.room.E45N9.amountRefillersIsLive < Memory.amountCreeps.amountRefillersInE45N9) {
                var newName = "refiller | " + numberCreep;
                originSpawn.spawnCreep([MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY], newName,
                    { memory: { role: "refiller" } });
            }
        } else if (amountEnergy > 799 && amountEnergy < 1299) {
            if (Memory.room.E45N9.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE45N9) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.E45N9.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE45N9) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.E45N9.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE45N9) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.E45N9.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE45N9) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.E45N9.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE45N9) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep([RANGED_ATTACK, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.E45N9.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE45N9) {
                var newName = "claimer | " + numberCreep;
                originSpawn.spawnCreep([CLAIM, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.E45N9.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInE45N9) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            } else if (Memory.room.E45N9.amountRefillersIsLive < Memory.amountCreeps.amountRefillersInE45N9) {
                var newName = "refiller | " + numberCreep;
                originSpawn.spawnCreep([MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY], newName,
                    { memory: { role: "refiller" } });
            }
        } else if (amountEnergy > 1299) {
            if (Memory.room.E45N9.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE45N9) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.E45N9.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE45N9) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.E45N9.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE45N9) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.E45N9.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE45N9) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.E45N9.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE45N9) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep([RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.E45N9.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE45N9) {
                var newName = "claimer | " + numberCreep;
                originSpawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.E45N9.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInE45N9) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], newName,
                    { memory: { role: "farBuilder" } });
            } else if (Memory.room.E45N9.amountRefillersIsLive < Memory.amountCreeps.amountRefillersInE45N9) {
                var newName = "refiller | " + numberCreep;
                originSpawn.spawnCreep([MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY], newName,
                    { memory: { role: "refiller" } });
            }
        }
    }
};
module.exports = roleSpawn;
