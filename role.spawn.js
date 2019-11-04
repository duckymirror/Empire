var roleSpawn = {
    run(spawn) {
        /**********************************************************************************************************\
       |                                               Переменные                                                   |
        \**********************************************************************************************************/
        var originSpawn = Game.spawns["SP-R1"];
        var originRoom = originSpawn.room;
        var sources = originRoom.find(FIND_SOURCES);

        if (Game.spawns["Spawn2"]) {
            var originSpawn1 = Game.spawns["Spawn2"];
            var originRoom1 = originSpawn1.room;
            var sources1 = originRoom1.find(FIND_SOURCES);
            var extensions1 = originRoom1.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION);
                }
            });
            var amountExtension1 = extensions1.length;
            if (amountExtension1 > 0) {
                var amountEnergy1 = amountExtension1 * 50 + 300;
            } else {
                var amountEnergy1 = 300;
            }
        }

        if (Game.spawns["Spawn3"]) {
            var originSpawn2 = Game.spawns["Spawn3"];
            var originRoom2 = originSpawn2.room;
            var sources2 = originRoom2.find(FIND_SOURCES);
            var extensions2 = originRoom2.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION);
                }
            });
            var amountExtension2 = extensions2.length;
            if (amountExtension2 > 0) {
                var amountEnergy2 = amountExtension2 * 50 + 300;
            } else {
                var amountEnergy2 = 300;
            }
        }

        if (Game.spawns["Spawn4"]) {
            var originSpawn3 = Game.spawns["Spawn4"];
            var originRoom3 = originSpawn3.room;
            var sources3 = originRoom3.find(FIND_SOURCES);
            var extensions3 = originRoom3.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION);
                }
            });
            var amountExtension3 = extensions3.length;
            if (amountExtension3 > 0) {
                var amountEnergy3 = amountExtension3 * 50 + 300;
            } else {
                var amountEnergy3 = 300;
            }
        }

        var numberCreep = Math.random();
        var extensions = originRoom.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION);
            }
        });
        var amountExtension = extensions.length;
        if (amountExtension > 0) {
            var amountEnergy = amountExtension * 50 + 300;
        } else {
            var amountEnergy = 300;
        }

        /**********************************************************************************************************\
       |                                         Спаун: меньше 550 энергии                                          |
        \**********************************************************************************************************/
        if (amountEnergy <= 549) {
            if (Memory.room.W49S27.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S27) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S27.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S27) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S27.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S27) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S27.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S27) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            }
            /**********************************************************************************************************\
           |                                   Спаун: меньше 799 энергии и больше 549                                   |
            \**********************************************************************************************************/
        } else if (amountEnergy > 549 && amountEnergy <= 799) {
            if (Memory.room.W49S27.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S27) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S27.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S27) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, CARRY], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S27.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S27) {
                var newName = "miner1" + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S27.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S27) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.W49S27.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW49S27) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.W49S27.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW49S27) {
                var newName = "claimer | " + numberCreep;
                originSpawn.spawnCreep([CLAIM, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.W49S27.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW49S27) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            }
            /**********************************************************************************************************\
           |                                          Спаун: больше 800 энергии                                         |
            \**********************************************************************************************************/
        } else if (amountEnergy > 799 && amountEnergy < 1299) {
            if (Memory.room.W49S27.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S27) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S27.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S27) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S27.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S27) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S27.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S27) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.W49S27.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW49S27) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.W49S27.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW49S27) {
                var newName = "claimer | " + numberCreep;
                originSpawn.spawnCreep([CLAIM, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.W49S27.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW49S27) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, WORK, CARRY, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            }
        } else if (amountEnergy > 1299) {
            if (Memory.room.W49S27.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW49S27) {
                var newName = "miner0 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.W49S27.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW49S27) {
                var newName = "transporter | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.W49S27.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW49S27) {
                var newName = "miner1 | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.W49S27.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW49S27) {
                var newName = "builder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.W49S27.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW49S27) {
                var newName = "warrior | " + numberCreep;
                originSpawn.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                    { memory: { role: "warrior" } });
            } else if (Memory.room.W49S27.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW49S27) {
                var newName = "claimer | " + numberCreep;
                originSpawn.spawnCreep([CLAIM, MOVE, MOVE], newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.W49S27.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW49S27) {
                var newName = "farBuilder | " + numberCreep;
                originSpawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                    { memory: { role: "farBuilder" } });
            }
        }
        if (Game.spawns["Spawn2"]) {
            /**********************************************************************************************************\
           |                                         Спаун: меньше 550 энергии                                          |
            \**********************************************************************************************************/
            if (amountEnergy1 <= 549) {
                if (Memory.room.E49S39.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE49S39) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources1[0].id } });
                } else if (Memory.room.E49S39.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE49S39) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E49S39.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE49S39) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources1[1].id } });
                } else if (Memory.room.E49S39.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE49S39) {
                    var newName = "builder | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                        { memory: { role: "builder" } });
                }
                /**********************************************************************************************************\
               |                                   Спаун: меньше 799 энергии и больше 549                                   |
                \**********************************************************************************************************/
            } else if (amountEnergy1 > 549 && amountEnergy1 <= 799) {
                if (Memory.room.E49S39.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE49S39) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources1[0].id } });
                } else if (Memory.room.E49S39.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE49S39) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, CARRY], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E49S39.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE49S39) {
                    var newName = "miner1" + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources1[1].id } });
                } else if (Memory.room.E49S39.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE49S39) {
                    var newName = "builder | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.E49S39.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE49S39) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn1.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.E49S39.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE49S39) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn1.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                }
                /**********************************************************************************************************\
               |                                          Спаун: больше 800 энергии                                         |
                \**********************************************************************************************************/
            } else if (amountEnergy1 >= 800 && amountEnergy1 < 1200) {
                if (Memory.room.E49S39.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE49S39) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources1[0].id } });
                } else if (Memory.room.E49S39.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE49S39) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E49S39.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE49S39) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources1[1].id } });
                } else if (Memory.room.E49S39.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE49S39) {
                    var newName = "builder | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.E49S39.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE49S39) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn1.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.E49S39.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE49S39) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn1.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                } else if (Memory.room.E49S39.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInE49S39) {
                    var newName = "farBuilder | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], newName,
                        { memory: { role: "farBuilder" } });
                }
            } else if (amountEnergy1 >= 1200) {
                if (Memory.room.E49S39.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE49S39) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources1[0].id } });
                } else if (Memory.room.E49S39.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE49S39) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E49S39.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE49S39) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources1[1].id } });
                } else if (Memory.room.E49S39.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE49S39) {
                    var newName = "builder | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.E49S39.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE49S39) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn1.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.E49S39.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE49S39) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn1.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                } else if (Memory.room.E49S39.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInE49S39) {
                    var newName = "farBuilder | " + numberCreep;
                    originSpawn1.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], newName,
                        { memory: { role: "farBuilder" } });
                }
            }
        }

        if (Game.spawns["Spawn3"]) {
            /**********************************************************************************************************\
           |                                         Спаун: меньше 550 энергии                                          |
            \**********************************************************************************************************/
            if (amountEnergy2 <= 549) {
                if (Memory.room.E16S28.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE16S28) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources2[0].id } });
                } else if (Memory.room.E16S28.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE16S28) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E16S28.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE16S28) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources2[1].id } });
                } else if (Memory.room.E16S28.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE16S28) {
                    var newName = "builder | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                        { memory: { role: "builder" } });
                }
                /**********************************************************************************************************\
               |                                   Спаун: меньше 799 энергии и больше 549                                   |
                \**********************************************************************************************************/
            } else if (amountEnergy2 > 549 && amountEnergy1 <= 799) {
                if (Memory.room.E16S28.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE16S28) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources2[0].id } });
                } else if (Memory.room.E16S28.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE16S28) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, CARRY], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E16S28.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE16S28) {
                    var newName = "miner1" + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources2[1].id } });
                } else if (Memory.room.E16S28.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE16S28) {
                    var newName = "builder | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.E16S28.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE16S28) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn2.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.E16S28.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE16S28) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn2.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                }
                /**********************************************************************************************************\
               |                                          Спаун: больше 800 энергии                                         |
                \**********************************************************************************************************/
            } else if (amountEnergy2 >= 800 && amountEnergy2 < 1200) {
                if (Memory.room.E16S28.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE16S28) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources2[0].id } });
                } else if (Memory.room.E16S28.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE16S28) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E16S28.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE16S28) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources2[1].id } });
                } else if (Memory.room.E16S28.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE16S28) {
                    var newName = "builder | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.E16S28.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE16S28) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn2.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.E16S28.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE16S28) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn2.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                } else if (Memory.room.E16S28.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInE16S28) {
                    var newName = "farBuilder | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], newName,
                        { memory: { role: "farBuilder" } });
                }
            } else if (amountEnergy2 >= 1200) {
                if (Memory.room.E16S28.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InE16S28) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources2[0].id } });
                } else if (Memory.room.E16S28.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInE16S28) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.E16S28.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InE16S28) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources2[1].id } });
                } else if (Memory.room.E16S28.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInE16S28) {
                    var newName = "builder | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.E16S28.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInE16S28) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn2.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.E16S28.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInE16S28) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn2.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                } else if (Memory.room.E16S28.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInE16S28) {
                    var newName = "farBuilder | " + numberCreep;
                    originSpawn2.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], newName,
                        { memory: { role: "farBuilder" } });
                }
            }
        }

        if (Game.spawns["Spawn4"]) {
            /**********************************************************************************************************\
           |                                         Спаун: меньше 550 энергии                                          |
            \**********************************************************************************************************/
            if (amountEnergy3 <= 549) {
                if (Memory.room.W13N47.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW13N47) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources3[0].id } });
                } else if (Memory.room.W13N47.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW13N47) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.W13N47.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW13N47) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, MOVE, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources3[1].id } });
                } else if (Memory.room.W13N47.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW13N47) {
                    var newName = "builder | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, CARRY, MOVE, MOVE], newName,
                        { memory: { role: "builder" } });
                }
                /**********************************************************************************************************\
               |                                   Спаун: меньше 799 энергии и больше 549                                   |
                \**********************************************************************************************************/
            } else if (amountEnergy3 > 549 && amountEnergy3 <= 799) {
                if (Memory.room.W13N47.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW13N47) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources3[0].id } });
                } else if (Memory.room.W13N47.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW13N47) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, CARRY], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.W13N47.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW13N47) {
                    var newName = "miner1" + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources3[1].id } });
                } else if (Memory.room.W13N47.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW13N47) {
                    var newName = "builder | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.W13N47.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW13N47) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn3.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.W13N47.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW13N47) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn3.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                }
                /**********************************************************************************************************\
               |                                          Спаун: больше 800 энергии                                         |
                \**********************************************************************************************************/
            } else if (amountEnergy3 >= 800 && amountEnergy3 < 1200) {
                if (Memory.room.W13N47.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW13N47) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources3[0].id } });
                } else if (Memory.room.W13N47.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW13N47) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.W13N47.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW13N47) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources3[1].id } });
                } else if (Memory.room.W13N47.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW13N47) {
                    var newName = "builder | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.W13N47.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW13N47) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn3.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.W13N47.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW13N47) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn3.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                } else if (Memory.room.W13N47.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW13N47) {
                    var newName = "farBuilder | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], newName,
                        { memory: { role: "farBuilder" } });
                }
            } else if (amountEnergy3 >= 1200) {
                if (Memory.room.W13N47.amountMiners0IsLive < Memory.amountCreeps.amountMiners0InW13N47) {
                    var newName = "miner0 | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner0", sourceId: sources3[0].id } });
                } else if (Memory.room.W13N47.amountTransportersIsLive < Memory.amountCreeps.amountTransportersInW13N47) {
                    var newName = "transporter | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "transporter" } });
                } else if (Memory.room.W13N47.amountMiners1IsLive < Memory.amountCreeps.amountMiners1InW13N47) {
                    var newName = "miner1 | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                        { memory: { role: "miner1", sourceId: sources3[1].id } });
                } else if (Memory.room.W13N47.amountBuildersIsLive < Memory.amountCreeps.amountBuildersInW13N47) {
                    var newName = "builder | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName,
                        { memory: { role: "builder" } });
                } else if (Memory.room.W13N47.amountWarriorsIsLive < Memory.amountCreeps.amountWarriorsInW13N47) {
                    var newName = "warrior | " + numberCreep;
                    originSpawn3.spawnCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE], newName,
                        { memory: { role: "warrior" } });
                } else if (Memory.room.W13N47.amountClaimersIsLive < Memory.amountCreeps.amountClaimersInW13N47) {
                    var newName = "claimer | " + numberCreep;
                    originSpawn3.spawnCreep([CLAIM, MOVE, MOVE], newName,
                        { memory: { role: "claimer" } });
                } else if (Memory.room.W13N47.amountFarBuildersIsLive < Memory.amountCreeps.amountFarBuildersInW13N47) {
                    var newName = "farBuilder | " + numberCreep;
                    originSpawn3.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], newName,
                        { memory: { role: "farBuilder" } });
                }
            }
        }


    }
};
module.exports = roleSpawn;
