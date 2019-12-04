function creepBody(energy, role) {

    if (role == 'miner0' || role == 'miner1') {
        if (energy == 300) {
            return [MOVE, CARRY, WORK]
        } else if (energy == 350) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 400) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 450) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 500) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy >= 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        }
    }

    if (role == "transporter" || role == "builder" || role == "FarBuilder") {
        if (energy == 300) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 350) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 400) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 450) {
            return [MOVE, MOVE, MOVE, CARRY, CARRY, WORK]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy == 1350) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK]
        } else if (energy >= 1400) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK]
        }
    }

    if (role == 'refiller') {
        if (energy == 300) {
            return [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY]
        } else if (energy == 350) {
            return [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY]
        } else if (energy == 400) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 450) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy >= 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        }
    }

    if (role == 'warrior') {
        return [RANGED_ATTACK, MOVE]
    }

    if (role == 'zergling') {
        if (energy == 300) {
            return [MOVE, ATTACK]
        } else if (energy == 350) {
            return [MOVE, ATTACK]
        } else if (energy == 400) {
            return [MOVE, ATTACK]
        } else if (energy == 450) {
            return [MOVE, ATTACK]
        } else if (energy == 500) {
            return [MOVE, ATTACK]
        } else if (energy >= 550) {
            return [TOUGH, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK]
        }
    }

    if (role == 'hydralisk') {
        if (energy == 300) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 350) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 400) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 450) {
            return [MOVE, RANGED_ATTACK]
        } else if (energy == 500) {
            return [MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 550) {
            return [MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 950) {
            return [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]
        }
    }

    if (role == 'claimer') {
        if (energy == 650) {
            return [CLAIM, MOVE]
        } else if (energy == 700) {
            return [CLAIM, MOVE, MOVE]
        } else if (energy == 750) {
            return [CLAIM, MOVE, MOVE, MOVE]
        } else if (energy == 800) {
            return [CLAIM, MOVE, MOVE, MOVE, MOVE]
        } else if (energy >= 850) {
            return [CLAIM, MOVE, MOVE, MOVE, MOVE, MOVE]
        }
    }

    if (role == "healer") {
        if (energy == 1000) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, HEAL, HEAL, HEAL]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1300) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1350) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1400) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy == 1450) {
            return [MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL]
        } else if (energy >= 1500) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL]
        }
    }

}

var roleSpawn = {
    run(spawn) {

        if (Game.spawns["SP-R1"]) {
            var originSpawn = Game.spawns["SP-R1"];
            var originRoom = originSpawn.room;
            var sources = originRoom.find(FIND_SOURCES);
            var amountEnergy = originRoom.energyCapacityAvailable;
        }

        if (Game.spawns["RT-SP2"]) {
            var originSpawn1 = Game.spawns["RT-SP2"];
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

        if (Game.spawns["SP-R"]) {
            var originSpawn3 = Game.spawns["SP-R"];
            var originRoom3 = originSpawn3.room;
            var sources3 = originRoom3.find(FIND_SOURCES);
            var amountEnergy3 = originRoom3.energyCapacityAvailable;
        }

        if (Game.spawns["SP-R5"]) {
            var originSpawn4 = Game.spawns["SP-R5"];
            var originRoom4 = originSpawn4.room;
            var sources4 = originRoom4.find(FIND_SOURCES);
            var amountEnergy4 = originRoom4.energyCapacityAvailable;
        }

        var numberCreep = Game.time;

        //let peaceNames = [''];
        //let peaceCreepNames = Game.time % peaceNames.length;

        if (Game.spawns['SP-R1']) {
            if (Memory.room.One.Creeps.AmountIsLive.Miners0 < Memory.room.One.Creeps.Amount.Miners0) {
                var newName = "miner0 | " + numberCreep;
                body = creepBody(amountEnergy, 'miner0');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources[0].id } });
            } else if (Memory.room.One.Creeps.AmountIsLive.DroneTransporters < Memory.room.One.Creeps.Amount.DroneTransporters) {
                var newName = "transporter | " + numberCreep;
                body = creepBody(amountEnergy, 'transporter');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.Miners1 < Memory.room.One.Creeps.Amount.Miners1) {
                var newName = "miner1 | " + numberCreep;
                body = creepBody(amountEnergy, 'miner1');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.One.Creeps.AmountIsLive.Builders < Memory.room.One.Creeps.Amount.Builders) {
                var newName = "builder | " + numberCreep;
                body = creepBody(amountEnergy, 'builder');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.Refillers < Memory.room.One.Creeps.Amount.Refillers) {
                var newName = "refiller | " + numberCreep;
                body = creepBody(amountEnergy, 'refiller');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "refiller" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.zerglings < Memory.room.One.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy, 'zergling');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.Claimers < Memory.room.One.Creeps.Amount.Claimers) {
                var newName = "claimer | " + numberCreep;
                body = creepBody(amountEnergy, 'claimer');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.FarBuilders < Memory.room.One.Creeps.Amount.FarBuilders) {
                var newName = "FarBuilder | " + numberCreep;
                body = creepBody(amountEnergy, 'FarBuilder');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "FarBuilder" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.Healers < Memory.room.One.Creeps.Amount.Healers) {
                var newName = "healer | " + numberCreep;
                body = creepBody(amountEnergy, 'healer');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "healer" } });
            }
        }

        if (Game.spawns['RT-SP2']) {
            if (Memory.room.Two.Creeps.AmountIsLive.Miners0 < Memory.room.Two.Creeps.Amount.Miners0) {
                let newName = 'DroneMiner | ' + numberCreep;
                let body = creepBody(amountEnergy1, 'miner0');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources1[0].id } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.Miners1 < Memory.room.Two.Creeps.Amount.Miners1 && Memory.room.Two.Creeps.AmountIsLive.DroneTransporters == Memory.room.Two.Creeps.Amount.DroneTransporters) {
                let newName = 'DroneMiner | ' + numberCreep;
                let body = creepBody(amountEnergy1, 'miner1');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources1[1].id } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.DroneTransporters < Memory.room.Two.Creeps.Amount.DroneTransporters) {
                let newName = 'DroneTransporter | ' + numberCreep;
                let body = creepBody(amountEnergy1, 'transporter');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "transporter", sourceId: sources1[0].id } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.Builders < Memory.room.Two.Creeps.Amount.Builders) {
                let newName = 'DroneBuilder | ' + numberCreep;
                let body = creepBody(amountEnergy1, 'builder');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "builder", sourceId: sources1[0].id } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.zerglings < Memory.room.Two.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy1, 'zergling');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.Refillers < Memory.room.Two.Creeps.Amount.Refillers) {
                var newName = "refiller | " + numberCreep;
                body = creepBody(amountEnergy1, 'refiller');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "refiller" } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.Healers < Memory.room.Two.Creeps.Amount.Healers) {
                var newName = "healer | " + numberCreep;
                body = creepBody(amountEnergy2, 'healer');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "healer" } });
            }
        }

        if (Game.spawns['SP-R3']) {
            if (Memory.room.Three.Creeps.AmountIsLive.Miners0 < Memory.room.Three.Creeps.Amount.Miners0) {
                var newName = "miner0 | " + numberCreep;
                body = creepBody(amountEnergy2, 'miner0');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources2[0].id } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.DroneTransporters < Memory.room.Three.Creeps.Amount.DroneTransporters) {
                var newName = "transporter | " + numberCreep;
                body = creepBody(amountEnergy2, 'transporter');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.Miners1 < Memory.room.Three.Creeps.Amount.Miners1) {
                var newName = "miner1 | " + numberCreep;
                body = creepBody(amountEnergy2, 'miner1');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources2[1].id } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.Builders < Memory.room.Three.Creeps.Amount.Builders) {
                var newName = "builder | " + numberCreep;
                body = creepBody(amountEnergy2, 'builder');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.Refillers < Memory.room.Three.Creeps.Amount.Refillers) {
                var newName = "refiller | " + numberCreep;
                body = creepBody(amountEnergy2, 'refiller');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "refiller" } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.zerglings < Memory.room.Three.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy2, 'zergling');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.Claimers < Memory.room.Three.Creeps.Amount.Claimers) {
                var newName = "claimer | " + numberCreep;
                body = creepBody(amountEnergy2, 'claimer');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.FarBuilders < Memory.room.Three.Creeps.Amount.FarBuilders) {
                var newName = "FarBuilder | " + numberCreep;
                body = creepBody(amountEnergy2, 'FarBuilder');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "FarBuilder" } });
            }
        }
        
        if (Game.spawns['SP-R']) {
            if (Memory.room.Four.Creeps.AmountIsLive.Miners0 < Memory.room.Four.Creeps.Amount.Miners0) {
                var newName = "miner0 | " + numberCreep;
                body = creepBody(amountEnergy3, 'miner0');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources3[0].id } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.DroneTransporters < Memory.room.Four.Creeps.Amount.DroneTransporters) {
                var newName = "transporter | " + numberCreep;
                body = creepBody(amountEnergy3, 'transporter');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.Miners1 < Memory.room.Four.Creeps.Amount.Miners1) {
                var newName = "miner1 | " + numberCreep;
                body = creepBody(amountEnergy3, 'miner1');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources3[1].id } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.Builders < Memory.room.Four.Creeps.Amount.Builders) {
                var newName = "builder | " + numberCreep;
                body = creepBody(amountEnergy3, 'builder');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.Refillers < Memory.room.Four.Creeps.Amount.Refillers) {
                var newName = "refiller | " + numberCreep;
                body = creepBody(amountEnergy3, 'refiller');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "refiller" } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.zerglings < Memory.room.Four.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy3, 'zergling');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.Refillers < Memory.room.Four.Creeps.Amount.Refillers) {
                var newName = "refiller | " + numberCreep;
                body = creepBody(amountEnergy3, 'refiller');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "refiller" } });
            }
        }

        if (Game.spawns['SP-R5']) {
            if (Memory.room.Five.Creeps.AmountIsLive.Miners0 < Memory.room.Five.Creeps.Amount.Miners0) {
                var newName = "miner0 | " + numberCreep;
                body = creepBody(amountEnergy4, 'miner0');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources4[0].id } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.DroneTransporters < Memory.room.Five.Creeps.Amount.DroneTransporters) {
                var newName = "transporter | " + numberCreep;
                body = creepBody(amountEnergy4, 'transporter');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "transporter" } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.Miners1 < Memory.room.Five.Creeps.Amount.Miners1) {
                var newName = "miner1 | " + numberCreep;
                body = creepBody(amountEnergy4, 'miner1');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources4[1].id } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.Builders < Memory.room.Five.Creeps.Amount.Builders) {
                var newName = "builder | " + numberCreep;
                body = creepBody(amountEnergy4, 'builder');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "builder" } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.Refillers < Memory.room.Five.Creeps.Amount.Refillers) {
                var newName = "refiller | " + numberCreep;
                body = creepBody(amountEnergy4, 'refiller');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "refiller" } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.zerglings < Memory.room.Five.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy4, 'zergling');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.Refillers < Memory.room.Five.Creeps.Amount.Refillers) {
                var newName = "refiller | " + numberCreep;
                body = creepBody(amountEnergy4, 'refiller');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "refiller" } });
            }
        }

    }
};
module.exports = roleSpawn;
