var Overlord = {
    /** @param {Creep} creep **/
    control(creep) {
        if (creep.spawning) {

            creep.memory.room = creep.room.name;
            
        } else {

            

        }
    }
};
module.exports = Overlord;
