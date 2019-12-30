function amountCreeps() {
    Memory.rolies = ["DroneBuilder", "DroneMiner", "DroneRefiller", "DroneSeller", "DroneUpgrader", "Zergling"];
    for (let z in Game.rooms) {
        let room = Game.rooms[z];
        for (let i in Memory.rolies) {
            if ("DroneBuilder" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]  = 3;
            if ("DroneMiner" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]    = 0;
            if ("DroneRefiller" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]] = 0;
            if ("DroneSeller" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]   = 0;
            if ("DroneUpgrader" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
            if ("Zergling" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]      = 0;
        }
    }
}
function amountCreepsIsLive() {
    const DroneControl = require("DroneControl");
    for (let z in Game.rooms) {
        let room = Game.rooms[z];
        for (let i in Game.creeps) {
            let creep = Game.creeps[i];
            Memory.room[room.name + ".amountIsLive." + creep.memory.role] = 0
        }
    }
    for (let z in Game.rooms) {
        let room = Game.rooms[z];
        for (let i in Game.creeps) {
            let creep = Game.creeps[i];
            if (room.name == creep.memory.room) Memory.room[room.name + ".amountIsLive." + creep.memory.role]++;
            DroneControl.control(creep);
        }
    }
}

const Control = {
    control(colony) {
        amountCreeps();
        amountCreepsIsLive();
    }
}
module.exports = Control;