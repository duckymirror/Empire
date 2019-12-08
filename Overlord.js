var Overlord = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;
            
        } else {

            creep.moveTo(Game.flags.overlord, {heuristicWeight: 1.2, range: 1, reusePath: 10});

        }
    }
};
module.exports = Overlord;
