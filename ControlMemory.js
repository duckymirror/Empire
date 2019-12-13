function amountCreeps() {
    for (var z in Game.rooms) {
        var room = Game.rooms[z];

        for (var i in Memory.rolies) {
            if ("Drone" == Memory.rolies[i]){
                if (room.find(FIND_SOURCES_ACTIVE).length > 1) {
                    switch (room.controller.level) {
                        case 1:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                            break;
                        case 2:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 4;
                            break;
                        case 3:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 4;
                            break;
                        case 4:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 4;
                            break;
                        case 5:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 4;
                            break;
                        case 6:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 3;
                            break;
                        case 6:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                            break;
                        case 7:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                            break;
                        case 8:
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                            break;
                    }
                    
                }
            }

            if ("Zergling" == Memory.rolies[i]) {
                if (Game.flags.attack) {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 3;
                } else {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 0;
                }
            }

            if ("Overseer" == Memory.rolies[i]) {
                if (Game.flags.claim) {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                } else {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 0;
                }
            }

        }
        
    }
}

var ControlMemory = {
    setting(memory) {
        Memory.rolies = ["Drone", "Zergling", "Overseer"];

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }

        amountCreeps();

    }
};
module.exports = ControlMemory;