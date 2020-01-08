function creepBody(energy, role) {

    if (role == "DroneBuilder" || role == "DroneUpgrader") {
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
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1350) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1400) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1450) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1500) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1550) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1600) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1650) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1800) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1850) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1900) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1950) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 2000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 2050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 2100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 2150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 2200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 2250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy >= 2300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        }
    }

    if (role == "DroneRefiller") {
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
        } else if (energy == 950) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        } else if (energy >= 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        }
    }

    if (role == "DroneMiner1" || role == "DroneMiner2") {
        if (energy == 300) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 350) {
            return [MOVE, MOVE, CARRY, WORK]
        } else if (energy == 400) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 450) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, CARRY, WORK, WORK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 950) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1350) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1400) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1450) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1550) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1600) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1650) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy == 1700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        } else if (energy >= 1750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        }
    }

    if (role == 'Stormtrooper') {
        if (energy == 300) {
            return [MOVE, MOVE, ATTACK, ATTACK]
        } else if (energy == 350) {
            return [MOVE, MOVE, ATTACK, ATTACK]
        } else if (energy == 400) {
            return [MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK]
        } else if (energy == 450) {
            return [MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK]
        } else if (energy == 500) {
            return [MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 550) {
            return [MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 600) {
            return [MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 650) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 700) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 750) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 800) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 850) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 900) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 950) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 1000) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 1050) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 1100) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 1150) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 1200) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy == 1250) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        } else if (energy >= 1300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]
        }
    }

    //if (role == "DroneSeller") {
    //    return [MOVE,CARRY];
    //}

    if (role == "DroneMineralMiner") {
        if (energy >= 2300) {
            return [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]
        }
    }
    if (role == "ScoutTrooper") {
        return [MOVE];
    }

}

let roleSpawn = {
    run(spawn, amountEnergy, role) {
        let newName = null;

        if (role == "DroneBuilder") newName = "AT-AT Walker | ID [" + Game.time%1001 + "]";
        if (role == "DroneMiner1" || role == "DroneMiner2") newName = "AT-ST Walker | ID [" + Game.time%1001 + "]";
        if (role == "DroneRefiller") newName = "AT-AT Walker | ID [" + Game.time%1001 + "]";
        if (role == "DroneUpgrader") newName = "AT-AT Walker | ID [" + Game.time%1001 + "]";
        if (role == "Stormtrooper") newName = "Stormtrooper | ID [" + Game.time%1001 + "]";
        if (role == "ScoutTrooper") newName = "Scout trooper | ID [" + Game.time%1001 + "]";
        if (role == "DroneMineralMiner") newName = "AT-ST Walker | ID [" + Game.time%1001 + "]";
        if (role == "DroneSeller") newName = "Merchant | ID [" + Game.time%1001 + "]";
        body = creepBody(amountEnergy, role);
        if (!Memory.room[spawn.room.name + ".amountIsLive." + "DroneRefiller"] && !Memory.room[spawn.room.name + ".amountIsLive." + "DroneBuilder"] && !Memory.room[spawn.room.name + ".amountIsLive." + "DroneUpgrader"] && spawn.room.energyCapacityAvailable > spawn.room.energyAvailable) {
            spawn.spawnCreep([MOVE, MOVE, CARRY, CARRY], newName, { memory: { role: "DroneRefiller" } });
        }
        spawn.spawnCreep(body, newName, { memory: { role: role } });
    }
};
module.exports = roleSpawn;
