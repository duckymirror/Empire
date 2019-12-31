function amountCreeps() {
    for (let name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    Memory.rolies = ["DroneBuilder", "DroneMiner1", "DroneMiner2", "DroneRefiller", "DroneSeller", "DroneUpgrader", "Zergling"];
    for (let z in Game.rooms) {
        let room = Game.rooms[z];
        if (room.controller && room.controller.my) {
            for (let i in Memory.rolies) {
                if ("DroneBuilder" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]  = 2;
                if ("DroneMiner1" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]   = 1;
                if ("DroneMiner2" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]   = 1;
                if ("DroneRefiller" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                if ("DroneSeller" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]   = 0;
                if ("DroneUpgrader" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                if ("Zergling" == Memory.rolies[i]) Memory.room[room.name + ".amount." + Memory.rolies[i]]      = 0;
            }
        }
    }
}
function amountCreepsIsLive() {
    for (let z in Game.rooms) {
        let room = Game.rooms[z];
        if (room.controller && room.controller.my) {
            for (let i in Game.creeps) {
                let creep = Game.creeps[i];
                Memory.room[room.name + ".amountIsLive." + creep.memory.role] = 0
            }
        }
    }
    for (let z in Game.rooms) {
        let room = Game.rooms[z];
        if (room.controller && room.controller.my) {
            for (let i in Game.creeps) {
                let creep = Game.creeps[i];
                if (room.name == creep.memory.room) Memory.room[room.name + ".amountIsLive." + creep.memory.role]++;
            }
        }
    }
}

function runCreep() {
    const DroneControl = require("DroneControl");
    for (let z in Game.rooms) {
        let room = Game.rooms[z];
        if (room.controller && room.controller.my) {
            for (let i in Game.creeps) {
                let creep = Game.creeps[i];
                DroneControl.control(creep);
            }
        }
    }
}
const Control = {
    control(colony) {
        amountCreeps();
        amountCreepsIsLive();
        runCreep();
    }
}
module.exports = Control;