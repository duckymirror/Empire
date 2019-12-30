let Nydus = {
    run(link) {
        let nydus = [];
        for (let i in Game.rooms){
            let room = Game.rooms[i];
            let roomNydus = room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_LINK}});
            nydus = nydus.concat(roomNydus);
        }

        for (let i in nydus){
            let mainNydus = null;
            let nydusInRoom = nydus[i];

            let roomNydus = nydusInRoom.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_LINK}});
            nydusTarget = nydus.concat(roomNydus);

            for (let i in nydusTarget){
                let nydusTar = nydusTarget[i];
                if (nydusTar.pos.inRangeTo(nydusTar.room.storage.pos, 3)) mainNydus = nydusTar;
                else {
                    tower = nydusTar.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
                    if (nydusTar.pos.inRangeTo(tower[0],5)) mainNydus = nydusTar;
                }
            }

            if (nydusInRoom != mainNydus) {
                if (nydusInRoom.store[RESOURCE_ENERGY] >= 200 && mainNydus.store[RESOURCE_ENERGY] <= 600) {
                    nydusInRoom.transferEnergy(mainNydus);
                }
            }
        }
    }
};
module.exports = Nydus;