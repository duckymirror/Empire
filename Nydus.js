let Nydus = {
    run(link) {
        let nydus = [];
        for (let i in Game.rooms){
            let room = Game.rooms[i];
            let roomNydus = room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_LINK}});
            nydus = nydus.concat(roomNydus);
        }

        for (let i in nydus){
            let nydusInRoom = nydus[i];
            if (nydusInRoom.pos.inRangeTo(nydusInRoom.room.storage.pos, 6)) {
                var mainNydus = nydusInRoom;
            }
        }
        for (let i in nydus){
            let nydusInRoom = nydus[i];

            if (nydusInRoom != mainNydus) {
                if (nydusInRoom.store[RESOURCE_ENERGY] >= 200) {
                    nydusInRoom.transferEnergy(mainNydus);
                }
            }
        }
        
    }
};
module.exports = Nydus;