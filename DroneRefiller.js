/*

Коды предупреждения:

0  - Башня не найдена
93 - Крип движется к башне
94 - Крип движется к ресурсам на земле
95 - Крип движется к руинам
96 - Крип движется к хранилищу
97 - В комнате один контейнер
98 - Крип движется к одному из двух контейнеров
99 - 

*/

var DroneRefiller = {
    /** @param {Creep} creep **/
    control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;

            creep.memory.visualizePathForWork = {
                stroke: 'cyan',
                lineStyle: 'dashed',
                opacity: 1,
            };

            creep.memory.visualizePathForGetStore = {
                stroke: 'orange',
                lineStyle: 'dashed',
                opacity: 1,
            };

        } else {
            
            var hostileCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != "kotyara");
                }
            });

            if (!creep.memory.room) {
                creep.memory.room = creep.room.name;
            }

            if (creep.store[RESOURCE_ENERGY] === 0) {

                creep.memory.building = false;
                

            } else if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {

                creep.memory.building = true;

            }
            
            var containerNear = creep.room.find(FIND_STRUCTURES,{filter:s=>s.structureType == STRUCTURE_CONTAINER});
            var tower = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER);
                }
            });
            var ruin = creep.room.find(FIND_RUINS, {
                filter: (ruin) => {
                    return ruin.store[RESOURCE_ENERGY] > 0;
                }
            });
                
            switch (creep.memory.building) {
                case true:

                    if (tower) {
                        tower.sort((a,b) => a.store[RESOURCE_ENERGY] - b.store[RESOURCE_ENERGY]);
                        if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(tower[0], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForWork});
                            creep.say("93");
                        }
                    } else {
                        creep.say("0");
                    }

                    break;

                case false:
        
                    if (containerNear.length == 2 && (containerNear[0].store[RESOURCE_ENERGY] > 0 || containerNear[1].store[RESOURCE_ENERGY] > 0) && hostileCreeps.length == 0) {
                        if (containerNear[0].store[RESOURCE_ENERGY] > 0 && containerNear[0].store[RESOURCE_ENERGY] > containerNear[1].store[RESOURCE_ENERGY]) {
                            if (creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(containerNear[0], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
                                creep.say("98");
                            }
                        } else {
                            if (creep.withdraw(containerNear[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(containerNear[1], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
                                creep.say("98");
                            }
                        }
                    } else if (containerNear.length == 1 && containerNear[0].store[RESOURCE_ENERGY] > 0 && hostileCreeps.length == 0) {
                        
                        if (creep.withdraw(containerNear[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(containerNear[0], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
                            creep.say("97");
                        }
                    } else if (creep.room.storage) {
                        
                        if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.storage, {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
                            creep.say("96");
                        }
                    } else if (ruin && ruin.length > 0) {
                        if(creep.withdraw(ruin[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(ruin[0], {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
                            creep.say("95");
                        }
                    } else {
                        const droppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(droppedEnergy, {reusePath: 30, visualizePathStyle: creep.memory.visualizePathForGetStore});
                            creep.say("94");
                        }
                    }
                    break;
            }

        }
    }
};
module.exports = DroneRefiller;