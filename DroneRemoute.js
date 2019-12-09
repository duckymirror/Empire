var DroneRemoute = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;
            
        } else {

            if (creep.store.getUsedCapacity() == 0) {
                creep.memory.work = 'getResource';
            } else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {
                creep.memory.work = 'doWork';
            }

            if (creep.memory.work == 'getResource') {

                if (Game.flags.clearRoom) {
                    creep.memory.task = 'clearRoom';
                    creep.memory.taskRoom = Game.flags.clearRoom.room;
                }

                if (creep.memory.task == 'clearRoom') {
                    if (creep.room.name != creep.memory.taskRoom.name) {
                        creep.moveTo(Game.flags.clearRoom, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                    } else {

                        storage = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_STORAGE) && structure.owner.username != "Kotyara" && structure.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity();
                            }
                        });

                        if (storage) {
                            speak = ['FOR', 'THE', 'HIVE'];
                            speakNow = speak[Game.time % speak.length];
                            creep.say(speakNow, true);

                            if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.storage, {ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50});
                            }
                        } else {
                            if (creep.room.storage) {
                                speak = ['OPEN', 'THE', 'GATES'];
                                speakNow = speak[Game.time % speak.length];
                                creep.say(speakNow, true);

                                creep.moveTo(Game.flags.clearRoom, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                            } else {
                                creep.moveTo(Game.flags.clearRoom, {heuristicWeight: 1.2, range: 1, reusePath: 50});
                            }
                        }
                        
                    }
                }

            } else {

                if (creep.room.name != creep.memory.room) {
                    creep.moveTo(new RoomPosition(25, 25, creep.memory.room), {heuristicWeight: 1.2, range: 1, reusePath: 50});
                } else {
                    if (creep.room.storage) {
                        if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.storage, {ignoreRoads: true, euristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    } else {
                        if (creep.transfer(creep.room.storage, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.storage, {ignoreRoads: true, heuristicWeight: 1.2, range: 1, reusePath: 50});
                        }
                    }
                }

            }
        }
    }
};
module.exports = DroneRemoute;
