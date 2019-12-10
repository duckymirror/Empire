function creepBody(energy, role) {

    if (role == 'miner0' || role == 'miner1') {
        if (energy == 300) {
            return [MOVE, CARRY, WORK]
        } else if (energy == 350) {
            return [MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 400) {
            return [MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 450) {
            return [MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK]
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

    if (role == "DroneRemoute") {
        if (energy == 300) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 350) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 400) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 450) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1350) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy >= 1400) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        }
    }

    if (role == "FarBuilder" || role == "Drone") {
        if (energy == 300) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 350) {
            return [MOVE, MOVE, MOVE, CARRY, CARRY, WORK]
        } else if (energy == 400) {
            return [MOVE, MOVE, MOVE, CARRY, CARRY, WORK]
        } else if (energy == 450) {
            return [MOVE, MOVE, MOVE, CARRY, CARRY, WORK]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK]
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

    if (role == 'zergling') {
        if (energy == 300) {
            return [MOVE, ATTACK]
        } else if (energy == 350) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy == 400) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy == 450) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy == 500) {
            return [MOVE, ATTACK, MOVE, ATTACK]
        } else if (energy >= 550) {
            return [TOUGH, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK]
        }
    }

    if (role == 'Overlord') {
        return [MOVE]
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
        if (energy >= 400 && energy < 1000) {
            return [TOUGH, MOVE, MOVE, HEAL]
        } else if (energy == 1000) {
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

function calculateCreeps (energy, role, target) {
    creep = creepBody(energy, role);
    
    let price = 0;
    if (target == 'spawnTime') {
        time = creep.length * 3;
        return time
    } else if (target == 'spawnPrice') {
        for (var i in creep) {
            if (creep[i] == "move" || creep[i] == "carry") {
                price = price + 50;
            } else if (creep[i] == "work") {
                price = price + 100;
            } else if (creep[i] == "attack") {
                price = price + 80;
            } else if (creep[i] == "ranged_attack") {
                price = price + 150;
            } else if (creep[i] == "heal") {
                price = price + 250;
            } else if (creep[i] == "tough") {
                price = price + 10;
            } else if (creep[i] == "claim") {
                price = price + 600;
            }
        }

        return price
    }
}

var roleSpawn = {
    run(spawn) {

        if (Game.spawns["Spawn1"]) {
            var originSpawn = Game.spawns["Spawn1"];
            var originRoom = originSpawn.room;
            var sources = originRoom.find(FIND_SOURCES);
            var amountEnergy = originRoom.energyCapacityAvailable;
            
            if (!Game.flags.RoomOne) {
                originRoom.createFlag(originSpawn, 'RoomOne');
            }
        }

        if (Game.spawns["Spawn2"]) {
            var originSpawn1 = Game.spawns["Spawn2"];
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

        if (Game.spawns["SP-R6"]) {
            var originSpawn5 = Game.spawns["SP-R6"];
            var originRoom5 = originSpawn5.room;
            var sources5 = originRoom5.find(FIND_SOURCES);
            var amountEnergy5 = originRoom5.energyCapacityAvailable;
        }

        var numberCreep = Game.time;

        if (Game.spawns['Spawn1']) {
            if (Memory.room.One.Creeps.AmountIsLive.Miners0 < Memory.room.One.Creeps.Amount.Miners0) {
                var newName = "Drone | " + numberCreep;
                body = creepBody(amountEnergy, 'miner0');
                originSpawn.spawnCreep(body, newName, {memory: {role: "miner0", sourceId: sources[0].id}});
            } else if (Memory.room.One.Creeps.AmountIsLive.Drone < Memory.room.One.Creeps.Amount.Drone) {
                var newName = "Drone" + numberCreep;
                body = creepBody(amountEnergy, 'Drone');
                originSpawn.spawnCreep(body, newName, { memory: {role: "Drone"}});
            } else if (Memory.room.One.Creeps.AmountIsLive.Miners1 < Memory.room.One.Creeps.Amount.Miners1) {
                var newName = "Drone | " + numberCreep;
                body = creepBody(amountEnergy, 'miner1');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources[1].id } });
            } else if (Memory.room.One.Creeps.AmountIsLive.zerglings < Memory.room.One.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy, 'zergling');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "zergling"} });
            } else if (Memory.room.One.Creeps.AmountIsLive.Healers < Memory.room.One.Creeps.Amount.Healers) {
                var newName = "healer | " + numberCreep;
                body = creepBody(amountEnergy, 'healer');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "healer" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.Overlords < Memory.room.One.Creeps.Amount.Overlords) {
                var newName = "Overlord | " + numberCreep;
                body = creepBody(amountEnergy, 'Overlord');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "overlord" } });
            } else if (Memory.room.One.Creeps.AmountIsLive.DroneRemoute < Memory.room.One.Creeps.Amount.DroneRemoute) {
                var newName = "Drone | " + numberCreep;
                body = creepBody(amountEnergy, 'DroneRemoute');
                originSpawn.spawnCreep(body, newName,
                    { memory: { role: "DroneRemoute" } });
            }
            
            if ((Memory.room.One.Creeps.AmountIsLive.Drone == 0) && originRoom.energyAvailable < calculateCreeps(amountEnergy, 'Drone', 'spawnPrice')) {
                originSpawn.spawnCreep([MOVE, MOVE, CARRY, WORK], 'Drone |' + Game.time, {memory: {role: "Drone"}});
            }
        }

        if (Game.spawns['Spawn2']) {
            if (Memory.room.Two.Creeps.AmountIsLive.Miners0 < Memory.room.Two.Creeps.Amount.Miners0) {
                let newName = 'Drone | ' + numberCreep;
                let body = creepBody(amountEnergy1, 'miner0');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources1[0].id } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.Drone < Memory.room.Two.Creeps.Amount.Drone) {
                var newName = "Drone" + numberCreep;
                body = creepBody(amountEnergy1, 'Drone');
                originSpawn1.spawnCreep(body, newName, { memory: {role: "Drone"}});
            } else if (Memory.room.Two.Creeps.AmountIsLive.Miners1 < Memory.room.Two.Creeps.Amount.Miners1 && Memory.room.Two.Creeps.AmountIsLive.DroneTransporters == Memory.room.Two.Creeps.Amount.DroneTransporters) {
                let newName = 'Drone | ' + numberCreep;
                let body = creepBody(amountEnergy1, 'miner1');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources1[1].id } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.zerglings < Memory.room.Two.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy1, 'zergling');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.Healers < Memory.room.Two.Creeps.Amount.Healers) {
                var newName = "healer | " + numberCreep;
                body = creepBody(amountEnergy1, 'healer');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "healer" } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.Claimers < Memory.room.Two.Creeps.Amount.Claimers) {
                var newName = "claimer | " + numberCreep;
                body = creepBody(amountEnergy1, 'claimer');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.Two.Creeps.AmountIsLive.FarBuilders < Memory.room.Two.Creeps.Amount.FarBuilders) {
                var newName = "FarBuilder | " + numberCreep;
                body = creepBody(amountEnergy1, 'FarBuilder');
                originSpawn1.spawnCreep(body, newName,
                    { memory: { role: "FarBuilder" } });
            }
        }

        if (Game.spawns['SP-R3']) {
            if (Memory.room.Three.Creeps.AmountIsLive.Miners0 < Memory.room.Three.Creeps.Amount.Miners0) {
                var newName = "Drone | " + numberCreep;
                body = creepBody(amountEnergy2, 'miner0');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources2[0].id } });
            } else if (Memory.room.Three.Creeps.AmountIsLive.Drone < Memory.room.Three.Creeps.Amount.Drone) {
                var newName = "Drone" + numberCreep;
                body = creepBody(amountEnergy2, 'Drone');
                originSpawn2.spawnCreep(body, newName, { memory: {role: "Drone"}});
            } else if (Memory.room.Three.Creeps.AmountIsLive.Miners1 < Memory.room.Three.Creeps.Amount.Miners1) {
                var newName = "Drone | " + numberCreep;
                body = creepBody(amountEnergy2, 'miner1');
                originSpawn2.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources2[1].id } });
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
            } else if (Memory.room.Four.Creeps.AmountIsLive.Drone < Memory.room.Four.Creeps.Amount.Drone) {
                var newName = "Drone" + numberCreep;
                body = creepBody(amountEnergy3, 'Drone');
                originSpawn3.spawnCreep(body, newName, { memory: {role: "Drone"}});
            } else if (Memory.room.Four.Creeps.AmountIsLive.Miners1 < Memory.room.Four.Creeps.Amount.Miners1) {
                var newName = "Drone | " + numberCreep;
                body = creepBody(amountEnergy3, 'miner1');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources3[1].id } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.zerglings < Memory.room.Four.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy3, 'zergling');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.Claimers < Memory.room.Four.Creeps.Amount.Claimers) {
                var newName = "claimer | " + numberCreep;
                body = creepBody(amountEnergy3, 'claimer');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "claimer" } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.FarBuilders < Memory.room.Four.Creeps.Amount.FarBuilders) {
                var newName = "FarBuilder | " + numberCreep;
                body = creepBody(amountEnergy3, 'FarBuilder');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "FarBuilder" } });
            } else if (Memory.room.Four.Creeps.AmountIsLive.zerglings < Memory.room.Four.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy3, 'zergling');
                originSpawn3.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            }
        }

        if (Game.spawns['SP-R5']) {
            if (Memory.room.Five.Creeps.AmountIsLive.Miners0 < Memory.room.Five.Creeps.Amount.Miners0) {
                var newName = "minDroneer0 | " + numberCreep;
                body = creepBody(amountEnergy4, 'miner0');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources4[0].id } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.Drone < Memory.room.Five.Creeps.Amount.Drone) {
                var newName = "Drone" + numberCreep;
                body = creepBody(amountEnergy4, 'Drone');
                originSpawn4.spawnCreep(body, newName, { memory: {role: "Drone"}});
            } else if (Memory.room.Five.Creeps.AmountIsLive.Miners1 < Memory.room.Five.Creeps.Amount.Miners1) {
                var newName = "Drone | " + numberCreep;
                body = creepBody(amountEnergy4, 'miner1');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources4[1].id } });
            } else if (Memory.room.Five.Creeps.AmountIsLive.zerglings < Memory.room.Five.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy4, 'zergling');
                originSpawn4.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            }
        }

        if (Game.spawns['SP-R6']) {
            if (Memory.room.Six.Creeps.AmountIsLive.Miners0 < Memory.room.Six.Creeps.Amount.Miners0) {
                let newName = 'Drone | ' + numberCreep;
                let body = creepBody(amountEnergy5, 'miner0');
                originSpawn5.spawnCreep(body, newName,
                    { memory: { role: "miner0", sourceId: sources5[0].id } });
            } else if (Memory.room.Six.Creeps.AmountIsLive.Drone < Memory.room.Six.Creeps.Amount.Drone) {
                var newName = "Drone" + numberCreep;
                body = creepBody(amountEnergy5, 'Drone');
                originSpawn5.spawnCreep(body, newName, { memory: {role: "Drone"}});
            } else if (Memory.room.Six.Creeps.AmountIsLive.Miners1 < Memory.room.Six.Creeps.Amount.Miners1 && Memory.room.Two.Creeps.AmountIsLive.DroneTransporters == Memory.room.Two.Creeps.Amount.DroneTransporters) {
                let newName = 'Drone | ' + numberCreep;
                let body = creepBody(amountEnergy5, 'miner1');
                originSpawn5.spawnCreep(body, newName,
                    { memory: { role: "miner1", sourceId: sources5[1].id } });
            } else if (Memory.room.Six.Creeps.AmountIsLive.zerglings < Memory.room.Six.Creeps.Amount.zerglings) {
                var newName = "zergling | " + numberCreep;
                body = creepBody(amountEnergy5, 'zergling');
                originSpawn5.spawnCreep(body, newName,
                    { memory: { role: "zergling" } });
            } else if (Memory.room.Six.Creeps.AmountIsLive.Healers < Memory.room.Six.Creeps.Amount.Healers) {
                var newName = "healer | " + numberCreep;
                body = creepBody(amountEnergy5, 'healer');
                originSpawn5.spawnCreep(body, newName,
                    { memory: { role: "healer" } });
            }
        }

    }
};
module.exports = roleSpawn;
