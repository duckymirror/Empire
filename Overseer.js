let Overlord = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {

            if (creep.memory.task == claim) {
                if (creep.memory.roomTarget) {
                    if (creep.room.name != creep.memory.roomTarget) {
                        creep.moveTo(new RoomPosition(25, 25, creep.memory.roomTarget), {heuristicWeight: 1.2, range: 1, reusePath: 50});
                    } else {
                        let hostileCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
                            filter: (creep) => {
                                return (creep.owner.username != "kotyara");
                            }
                        });

                        if (hostileCreeps.lenght > 0) {
                            creep.room.createFlag(creep.pos, ['attack'], ['COLOR_RED'], ['COLOR_RED'])
                        }
                    }
                }
            }

        }
    }
};
module.exports = Overlord;
