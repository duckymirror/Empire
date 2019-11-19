/*

Коды предупреждения:

0  - В хранилище находится более 750000 энергии (*)
01 - Хранилище и контейнер заполнены (*)
02 - Контейнер заполнен (*)
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
            var visualizePath = {
                stroke: 'yellow',
                lineStyle: 'dashed',
                opacity: 1,
            };

        } else {
            var linkInRoom = creep.room.find(FIND_STRUCTURES, 1,{filter:s=>s.structureType == STRUCTURE_LINK});
            var containerNear = creep.pos.findInRange(FIND_STRUCTURES, 1,{filter:s=>s.structureType == STRUCTURE_CONTAINER});
            var source = Game.getObjectById(creep.memory.sourceId);

            if (containerNear.length == 1) {
                if (containerNear[0].hits < containerNear[0].hitsMax) {
                    creep.repair(containerNear[0])
                }
            }
            if (creep.room.storage) {

                if (linkInRoom.length > 0) {

                    if (creep.store.getCapacity > 0) {

                        if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity) {
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(source, {reusePath: 50, visualizePathStyle: visualizePath});
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

                        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source, {reusePath: 50, visualizePathStyle: visualizePath});
                        } else if (creep.harvest(source) == ERR_NOT_OWNER) {
                            creep.say("1")
                        } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                            creep.say('2')
                        } else {
                            creep.harvest(source);
                            creep.say("99")
                        }
                        creep.say("3");

                    }

                } else {

                    if (creep.room.storage.store[RESOURCE_ENERGY] < 750001) {

                        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source, {reusePath: 50, visualizePathStyle: visualizePath});
                        } else if (creep.harvest(source) == ERR_NOT_OWNER) {
                            creep.say("1")
                        } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                            creep.say('2')
                        } else {
                            creep.harvest(source);
                            creep.say("99")
                        }
                        
                    } else {

                        if (containerNear.length == 1) {
                            if (containerNear[0].store[RESOURCE_ENERGY] != containerNear[0].store.getCapacity) {
                                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(containerNear[0].pos, {reusePath: 50, visualizePathStyle: visualizePath});
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
                                creep.say("01")
                            }
                        } else {
                            if (creep.pos.findInRange(source, 1)) {
                                creep.say("0")
                            } else {
                                creep.moveTo(source, {reusePath: 50, visualizePathStyle: visualizePath});
                                creep.say("98")
                            }
                        }

                    }

                }
            } else {
                if (containerNear.length == 1 && creep.pos.isNearTo(source)) {
                    if (!creep.pos.isEqualTo(containerNear[0].pos)) {
                        creep.moveTo(containerNear[0].pos, {reusePath: 50, visualizePathStyle: visualizePath});
                        creep.say("98")
                    } else if (containerNear[0].store[RESOURCE_ENERGY] < 2000) {
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
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source, {reusePath: 50, visualizePathStyle: visualizePath});
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