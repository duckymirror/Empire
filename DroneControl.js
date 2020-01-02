function getResource(creep) {
    if (creep.memory.role == "DroneMiner") doMineMiner(creep);
    else {
        const containerInRoom = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 20;
            }
        });
        if (creep.room.storage && creep.memory.role != "DroneRefiller") {
            if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.storage, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
        } else if (containerInRoom.length == 1) {
            if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
        } else if (containerInRoom.length >= 2) {
            containerInRoom.sort((a, b) => b.store[RESOURCE_ENERGY] - a.store[RESOURCE_ENERGY]);
            if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
        } else {
            const source = creep.room.find(FIND_SOURCES);
            if (creep.room.storage && (creep.room.storage.store[RESOURCE_ENERGY] > 100000 && source.length == 2) || creep.room.storage && (creep.room.storage.store[RESOURCE_ENERGY] > 50000 && source.length == 1)) {
                if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.storage, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
            } else {
                const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) creep.moveTo(source);
            }
        }
    }
}

function getResourceByRefiller(creep) {
    const containerInRoom = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 20;
        }
    });
    if (containerInRoom.length == 1) {
        if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
    } else if (containerInRoom.length >= 2) {
        containerInRoom.sort((a, b) => b.store[RESOURCE_ENERGY] - a.store[RESOURCE_ENERGY]);
        if (creep.withdraw(containerInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(containerInRoom[0], { heuristicWeight: 1.2, range: 1, reusePath: 50 });
    } else {
        if (creep.room.terminal && creep.room.terminal.store[RESOURCE_ENERGY] > 20) {
            if (creep.withdraw(creep.room.terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.terminal, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
        } else {
            console.log("room: " + creep.room.name + " | Problem: Energy disenough");
            if ((!Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner1"] || Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner1"] == 0) || (!Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner2"] || Memory.room[creep.room.name + ".amountIsLive." + "DroneMiner2"] == 0)) {
                if (creep.room.storage && (creep.room.storage.store[RESOURCE_ENERGY] > 20)) {
                    if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.storage, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
                }
            }
        }
    }
}

function doRefill(creep) {
    const spawnEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
        }
    });
    if (spawnEnergy) {
        if (creep.transfer(spawnEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawnEnergy, { heuristicWeight: 1.2, range: 1, reusePath: 50 });
        }
    } else if (creep.memory.role == "DroneRefiller") {
        const towerWithoutEnergy = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_TOWER) && structure.store[RESOURCE_ENERGY] <= 750;
            }
        });
        if (towerWithoutEnergy.length > 0 && creep.room.controller.level > 2) {
            towerWithoutEnergy.sort((a, b) => a.store[RESOURCE_ENERGY] - b.store[RESOURCE_ENERGY]);
            if (creep.transfer(towerWithoutEnergy[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(towerWithoutEnergy[0], { heuristicWeight: 1.2, range: 1, reusePath: 20 });
            }
        } else {
            if (creep.room.storage && creep.room.storage.store[RESOURCE_ENERGY] < 100001) {
                if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.storage, { heuristicWeight: 1.2, range: 1, reusePath: 20 });
                }
            } else {
                doUpgrade(creep);
            }
        }
    }
}

function doMineMiner(creep) {
    const containerNear = creep.pos.findInRange(FIND_STRUCTURES, 2, { filter: s => s.structureType == STRUCTURE_CONTAINER });
    const source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);

    if (creep.store[RESOURCE_ENERGY] === 0) {
        creep.memory.repair = false;
    }
    if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
        creep.memory.repair = true;
    }

    if (containerNear.length == 1) {
        if (containerNear[0].hits < containerNear[0].hitsMax && creep.memory.repair) {
            creep.repair(containerNear[0]);
        } else if (containerNear[0].hits < containerNear[0].hitsMax && !creep.memory.repair) {
            creep.harvest(source);
        }
    }

    if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
        if (!creep.pos.isEqualTo(containerNear[0].pos)) {
            creep.moveTo(containerNear[0].pos, { ignoreCreeps: false, reusePath: 50 });
        } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
            creep.harvest(source);
        }
    } else {
        creep.moveTo(source, { rignoreCreeps: false, reusePath: 50 });
    }
}

function doBuild(creep, count) {
    const constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);

    if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) creep.moveTo(constructionSite, { heuristicWeight: 1.2, range: 3, reusePath: 10 });
}

function doUpgrade(creep) {
    const spawnEnergy = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
        }
    });
    if (spawnEnergy.length > 0 && !Memory.room[creep.room.name + ".amountIsLive." + "DroneRefiller"] || (!Memory.room[creep.room.name + ".amountIsLive." + "DroneUpgrader"] && creep.memory.role == "DroneBuilder")) doRefill(creep)
    else if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) creep.moveTo(creep.room.controller, { heuristicWeight: 1.2, range: 3, reusePath: 50 });
}

function doMine(creep) {
    const linkInRoom = creep.room.find(FIND_STRUCTURES, { filter: s => s.structureType == STRUCTURE_LINK });
    if (linkInRoom.length > 0) {
        var linkIsNear = creep.pos.findInRange(FIND_STRUCTURES, 1, { filter: s => s.structureType == STRUCTURE_LINK });
    }
    const containerNear = creep.pos.findInRange(FIND_STRUCTURES, 1, { filter: s => s.structureType == STRUCTURE_CONTAINER });
    const sourceInRoom = creep.room.find(FIND_SOURCES);

    if (creep.memory.role == "DroneMiner1" && (!creep.memory.source || creep.memory.source == null)) {
        creep.memory.source = sourceInRoom[0].id;
    } else if (creep.memory.role == "DroneMiner2" && sourceInRoom.length == 2 && (!creep.memory.source || creep.memory.source == null)) {
        creep.memory.source = sourceInRoom[1].id;
    }

    const source = Game.getObjectById(creep.memory.source);

    if (creep.store[RESOURCE_ENERGY] == 0) creep.memory.repair = false;
    else if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) creep.memory.repair = true;

    if (containerNear.length == 1) {
        if (containerNear[0].hits < containerNear[0].hitsMax && creep.memory.repair) {
            creep.repair(containerNear[0]);
        } else if (containerNear[0].hits < containerNear[0].hitsMax && !creep.memory.repair) {
            creep.harvest(source);
        }
    }

    if (linkInRoom && linkInRoom.length > 1 && linkIsNear && linkIsNear.length > 0) {

        if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
            if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                    creep.moveTo(containerNear[0].pos, { ignoreCreeps: false, reusePath: 50 });
                } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950 || linkIsNear[0].store[RESOURCE_ENERGY] < 800) {
                    creep.harvest(source);
                }
            } else {
                creep.moveTo(source, { ignoreCreeps: false, reusePath: 50 });
            }
        } else {
            if (linkIsNear[0].store[RESOURCE_ENERGY] < 800) {
                creep.transfer(linkIsNear[0], RESOURCE_ENERGY);
                creep.harvest(source);
            } else {
                if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                    creep.harvest(source);
                }
            }
        }

    } else {
        if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
            if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                creep.moveTo(containerNear[0].pos, { ignoreCreeps: false, reusePath: 50 });
            } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                creep.harvest(source);
            }
        } else {
            creep.moveTo(source, { ignoreCreeps: false, reusePath: 10 });
        }
    }
}

function doWork(creep) {
    switch (creep.memory.role) {
        case "DroneBuilder":
            creep.say("Builder")
            const constructionSiteInRoom = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (constructionSiteInRoom.length > 0) doBuild(creep, constructionSiteInRoom.length);
            else doUpgrade(creep);
            break;
        case "DroneMiner1":
            creep.say("Miner")
            doMine(creep);
            break;
        case "DroneMiner2":
            creep.say("Miner")
            doMine(creep);
            break;
        case "DroneRefiller":
            creep.say("Refiller")
            doRefill(creep);
            break;
        case "DroneSeller":
            creep.say("Seller")
            doSell(creep);
            break;
        case "DroneUpgrader":
            creep.say("Upgrader")
            doUpgrade(creep);
            break;
    }
}

const DroneControl = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {
            creep.memory.room = creep.room.name;
        } else {
            if (creep.room.name == creep.memory.room) {
                if (creep.store.getUsedCapacity() == 0 && (creep.memory.role != "DroneMiner1" && creep.memory.role != "DroneMiner2")) creep.memory.state = "getResource";
                else if (creep.store.getUsedCapacity() == creep.store.getCapacity() || (creep.memory.role == "DroneMiner1" || creep.memory.role == "DroneMiner2")) creep.memory.state = "doWork";
                if (creep.memory.state == "getResource") {
                    if (creep.memory.role == 'DroneRefiller') {
                        getResourceByRefiller(creep);
                    }
                    getResource(creep);
                }
                if (creep.memory.state == "doWork") doWork(creep);
            } else {
                creep.moveTo(new RoomPosition(25, 25, creep.memory.room), { ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50 });
            }
        }
    }
}
module.exports = DroneControl;