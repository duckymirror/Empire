function amountCreepsIsLive() {

    const Overlord = require("Overlord")
    const Drone = require("Drone");
    const DroneMiner = require("DroneMiner")
    const DroneRemoute = require("DroneRemoute");
    const zergling = require("zergling");

    for (let z in Game.rooms) {
        let room = Game.rooms[z];

        for (let i in Game.creeps) {
            let creep = Game.creeps[i];
            Memory.room[room.name + ".amountIsLive." + creep.memory.role] = 0
            var cpuDrone = 0;
            var cpuDroneMiner = 0;
        }
    }

    
    for (let z in Game.rooms) {
        let room = Game.rooms[z];

        for (let i in Game.creeps) {
            let creep = Game.creeps[i];

            if (room.name == creep.memory.room) {
                Memory.room[room.name + ".amountIsLive." + creep.memory.role]++
            }

            switch (creep.memory.role) {

                case "DroneMiner":
                    let cpu11 = Game.cpu.getUsed();
                    DroneMiner.control(creep);
                    let cpu22 = Game.cpu.getUsed() - cpu11;
                    cpuDroneMiner = cpuDrone + cpu22;
                    break;
                case "Drone":
                    let cpu1 = Game.cpu.getUsed();
                    Drone.control(creep);
                    let cpu2 = Game.cpu.getUsed() - cpu1;
                    cpuDrone = cpuDrone + cpu2;
                    break;
                case "healer":
                    DroneHealer.control(creep);
                    break;
                case "Zergling":
                    zergling.control(creep);
                    break;
                case "Overseer":
                    Overlord.control(creep);
                    break;
                case "DroneRemoute":
                    DroneRemoute.control(creep);
                    break;

            }
        }
    }

    
    const checkTime = Game.time % 101;
    if (checkTime == 100) {
        console.log("CPU роли DroneMiner");
        console.log("└ " + cpuDroneMiner);
        console.log("CPU роли Drone");
        console.log("└ " + cpuDrone);
    }
}

let ControlRoom = {
    control(room) {

        amountCreepsIsLive();
        
    }
};
module.exports = ControlRoom;