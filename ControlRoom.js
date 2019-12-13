function amountCreepsIsLive() {

    const Overlord = require("Overlord")
    const Drone = require("Drone");
    const DroneRemoute = require("DroneRemoute");
    const zergling = require("zergling");
    const DroneHealer = require("DroneHealer");

    for (var z in Game.rooms) {
        var room = Game.rooms[z];

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            Memory.room[room.name + ".amountIsLive." + creep.memory.role] = 0
        }
    }

    for (var z in Game.rooms) {
        var room = Game.rooms[z];

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];

            if (room.name == creep.memory.room) {
                Memory.room[room.name + ".amountIsLive." + creep.memory.role]++
            }

            switch (creep.memory.role) {

                case "Drone":
                    Drone.control(creep);
                    break;
                case "healer":
                    DroneHealer.control(creep);
                    break;
                case "zergling":
                    zergling.control(creep);
                    break;
                case "overlord":
                    Overlord.control(creep);
                    break;
                case "DroneRemoute":
                    DroneRemoute.control(creep);
                    break;

            }
        }
    }

}

var ControlRoom = {
    control(room) {

        amountCreepsIsLive();

    }
};
module.exports = ControlRoom;