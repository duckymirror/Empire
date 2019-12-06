/*

Коды предупреждения:

01 - Хранилище и контейнер заполнены (*)
02 - Контейнер заполнен (*)
0  - В хранилище находится более 999999 энергии (*)
1  - В комнате нельзя добывать, потому что она занята другим игроком (*)
2  - В источнике ресурсов закончились ресурсы (*)
3  - В комнате присутствует СЕТЬ, но крип не имеет CARRY
97 - Крип движется к СЕТИ
98 - Крип движется к ИСТОЧНИКУ
99 - Крип добывает

(*) - Добыча ресурсов не идет, если данный код активен

*/

var DroneMiner = {
    /** @param {Creep} creep **/
    control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;
            creep.memory.visualizePath = {
                stroke: 'yellow',
                lineStyle: 'dashed',
                opacity: 1,
            };

        } else {
            
            var linkInRoom = creep.room.find(FIND_STRUCTURES,{filter:s=>s.structureType == STRUCTURE_LINK});
            var containerNear = creep.pos.findInRange(FIND_STRUCTURES, 2,{filter:s=>s.structureType == STRUCTURE_CONTAINER});
            var source = Game.getObjectById(creep.memory.sourceId);

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

            if (creep.room.storage) {

                if (linkInRoom.length > 0) {

                    if (creep.store.getCapacity > 0) {

                        if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity) {
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                                creep.say("98")
                            } else if (creep.harvest(source) == ERR_NOT_OWNER) {
                                creep.say("1")
                            } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                                creep.say('2')
                            } else {
                                creep.harvest(source);
                                creep.say("99")
                            }
                        } else {
                            if (creep.transfer(linkInRoom[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(linkInRoom[0]);
                                creep.say("97")
                            }
                        }

                    } else {

                        if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                            if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                                creep.moveTo(containerNear[0].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                                creep.say("98")
                            } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                                if (creep.harvest(source) == ERR_NOT_OWNER) {
                                    creep.say("1")
                                } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                                    creep.say('2')
                                } else {
                                    creep.harvest(source);
                                    creep.say("99")
                                }
                            } else {
                                creep.say("02")
                            }
                        } else if (containerNear.length == 2 && creep.pos.isNearTo(source)) {
                            if (containerNear[0].pos.isNearTo(source) && !creep.pos.isEqualTo(containerNear[0].pos)) {
                                creep.moveTo(containerNear[0].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                            } else if (containerNear[1].pos.isNearTo(source) && !creep.pos.isEqualTo(containerNear[1].pos)) {
                                creep.moveTo(containerNear[1].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                            }
                        }

                    }

                } else {

                    if (creep.room.storage.store[RESOURCE_ENERGY] < 1000000) {

                        if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                            if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                                creep.moveTo(containerNear[0].pos, {ignoreCreeps: false, reusePath: 10, visualizePathStyle: creep.memory.visualizePath});
                                creep.say("98")
                            } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                                if (creep.harvest(source) == ERR_NOT_OWNER) {
                                    creep.say("1")
                                } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                                    creep.say('2')
                                } else {
                                    creep.harvest(source);
                                    creep.say("99")
                                }
                            } else {
                                creep.say("02")
                            }
                        } else if (containerNear.length == 2 && creep.pos.isNearTo(source)) {
                            if (containerNear[0].pos.isNearTo(source) && !creep.pos.isEqualTo(containerNear[0].pos)) {
                                creep.moveTo(containerNear[0].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                            } else if (containerNear[1].pos.isNearTo(source) && !creep.pos.isEqualTo(containerNear[1].pos)) {
                                creep.moveTo(containerNear[1].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                            }
                        } else {
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                                creep.say("98")
                            } else {
                                creep.harvest(source);
                                creep.say("99")
                            }
                        }
                        
                    } else {

                        if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                            if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                                creep.moveTo(containerNear[0].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                                creep.say("98")
                            } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                                if (creep.harvest(source) == ERR_NOT_OWNER) {
                                    creep.say("1")
                                } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                                    creep.say('2')
                                } else {
                                    creep.harvest(source);
                                    creep.say("99")
                                }
                            } else {
                                creep.say("02")
                            }
                        } else {
                            if (creep.pos.findInRange(source, 1)) {
                                creep.say("0")
                            } else {
                                creep.moveTo(source, {rignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                                creep.say("98")
                            }
                        }

                    }

                }
            } else {
                if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                    if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                        creep.moveTo(containerNear[0].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                        creep.say("98")
                    } else if (containerNear[0].store[RESOURCE_ENERGY] < 1950) {
                        if (creep.harvest(source) == ERR_NOT_OWNER) {
                            creep.say("1")
                        } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                            creep.say('2')
                        } else {
                            creep.harvest(source);
                            creep.say("99")
                        }
                    } else {
                        creep.say("02")
                    }
                } else if (containerNear.length == 2 && creep.pos.isNearTo(source)) {
                    if (containerNear[0].pos.isNearTo(source) && !creep.pos.isEqualTo(containerNear[0].pos)) {
                        creep.moveTo(containerNear[0].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                    } else if (containerNear[1].pos.isNearTo(source) && !creep.pos.isEqualTo(containerNear[1].pos)) {
                        creep.moveTo(containerNear[1].pos, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                    }
                } else {
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source, {ignoreCreeps: false, reusePath: 50, visualizePathStyle: creep.memory.visualizePath});
                        creep.say("98")
                    } else {
                        creep.harvest(source);
                        creep.say("99")
                    }
                }

            }
        }
    }
};
module.exports = DroneMiner;