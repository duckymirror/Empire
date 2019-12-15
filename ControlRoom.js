function Visual() {

    const firstX = -0.4;
    const lastX = 7.3;
    let step = (lastX - firstX) / 100;
    const Y = -0.4;

    if (Game.spawns["Spawn1"]) {
        const room = Game.rooms[Memory.room.One.Name];

        let X = firstX + step * Memory.room.One.Stats.Controller.progress;
        room.visual.rect(-0.35, -0.35, X, 0.8, { opacity: 0.3 })
        room.visual.rect(-0.4, -0.4, 7.4, 8.9, { opacity: 0.1 }).poly([[-0.4, -0.4], [7, -0.4], [7, 8.5], [-0.4, 8.5], [-0.4, -0.4]]);
        room.visual.text("Controller progress:", 2.4, 0.2, { color: 'white', font: 0.6 });
        room.visual.text(Memory.room.One.Stats.Controller.progress + "%", 6, 0.2, { color: 'white', font: 0.6 });
        room.visual.text("Made by JOURLOY", 3.4, 8.3, { color: 'red', font: 0.5 });
        room.visual.line(-0.35, 0.5, 6.95, 0.5, { opacity: 0.5 })


    }

    if (Game.spawns["Spawn2"]) {
        const room = Game.rooms[Memory.room.Two.Name];

        let X = firstX + step * Memory.room.Two.Stats.Controller.progress;
        room.visual.rect(-0.35, -0.35, X, 0.8, { opacity: 0.3 })
        room.visual.rect(-0.4, -0.4, 7.4, 8.9, { opacity: 0.1 }).poly([[-0.4, -0.4], [7, -0.4], [7, 8.5], [-0.4, 8.5], [-0.4, -0.4]]);
        room.visual.text("Controller progress:", 2.4, 0.2, { color: 'white', font: 0.6 });
        room.visual.text(Memory.room.Two.Stats.Controller.progress + "%", 6, 0.2, { color: 'white', font: 0.6 });
        room.visual.text("Made by JOURLOY", 3.4, 8.3, { color: 'red', font: 0.5 });
        room.visual.line(-0.35, 0.5, 6.95, 0.5, { opacity: 0.5 });
    }

    if (Game.spawns["SP-R3"]) {
        let X = firstX + step * Memory.room.Three.Stats.Controller.progress;

        Game.rooms[Memory.room.Three.Name].visual.rect(-0.35, -0.35, X, 0.8, { opacity: 0.3 })

        Game.rooms[Memory.room.Three.Name].visual.rect(-0.4, -0.4, 7.4, 8.9, { opacity: 0.1 }).poly([[-0.4, -0.4], [7, -0.4], [7, 8.5], [-0.4, 8.5], [-0.4, -0.4]]);
        Game.rooms[Memory.room.Three.Name].visual.text("Controller progress:", 2.4, 0.2, { color: 'white', font: 0.6 });
        Game.rooms[Memory.room.Three.Name].visual.text(Memory.room.Three.Stats.Controller.progress + "%", 6, 0.2, { color: 'white', font: 0.6 });
        Game.rooms[Memory.room.Three.Name].visual.text("Made by JOURLOY", 3.4, 8.3, { color: 'red', font: 0.5 });
        Game.rooms[Memory.room.Three.Name].visual.line(-0.35, 0.5, 6.95, 0.5, { opacity: 0.5 });
    }

}

function amountCreepsIsLive() {

    const Overlord = require("Overlord")
    const DroneMiner = require("DroneMiner");
    const Drone = require("Drone");
    const DroneRemoute = require("DroneRemoute");
    const zergling = require("zergling");

    if (Game.spawns['Spawn1']) {
        Memory.room.One.Creeps.AmountIsLive.Drone = 0;
        Memory.room.One.Creeps.AmountIsLive.DroneRemoute = 0;
        Memory.room.One.Creeps.AmountIsLive.Healers = 0;
        Memory.room.One.Creeps.AmountIsLive.zerglings = 0;
        Memory.room.One.Creeps.AmountIsLive.Overlords = 0;
    }

    if (Game.spawns['Spawn2']) {
        Memory.room.Two.Creeps.AmountIsLive.Drone = 0;
        Memory.room.Two.Creeps.AmountIsLive.Healers = 0;
        Memory.room.Two.Creeps.AmountIsLive.zerglings = 0;
    }

    if (Game.spawns['SP-R3']) {
        Memory.room.Three.Creeps.AmountIsLive.Drone = 0;
        Memory.room.Three.Creeps.AmountIsLive.Healers = 0;
        Memory.room.Three.Creeps.AmountIsLive.zerglings = 0;
    }

    if (Game.spawns['SP-R']) {
        Memory.room.Four.Creeps.AmountIsLive.Drone = 0;
        Memory.room.Four.Creeps.AmountIsLive.Healers = 0;
        Memory.room.Four.Creeps.AmountIsLive.zerglings = 0;
    }

    if (Game.spawns['SP-R5']) {
        Memory.room.Five.Creeps.AmountIsLive.Drone = 0;
        Memory.room.Five.Creeps.AmountIsLive.Healers = 0;
    }

    if (Game.spawns['SP-R6']) {
        Memory.room.Six.Creeps.AmountIsLive.Drone = 0;
    }

    for (var i in Game.creeps) {
        var creep = Game.creeps[i];
        switch (creep.memory.role) {
            case "Drone":
                Drone.control(creep);
                if (Game.spawns['Spawn1'] && creep.memory.room == Memory.room.One.Name) {
                    Memory.room.One.Creeps.AmountIsLive.Drone++;
                } else if (Game.spawns['Spawn2'] && creep.memory.room == Memory.room.Two.Name) {
                    Memory.room.Two.Creeps.AmountIsLive.Drone++;
                } else if (Game.spawns['SP-R3'] && creep.memory.room == Memory.room.Three.Name) {
                    Memory.room.Three.Creeps.AmountIsLive.Drone++;
                } else if (Game.spawns['SP-R'] && creep.memory.room == Memory.room.Four.Name) {
                    Memory.room.Four.Creeps.AmountIsLive.Drone++;
                } else if (Game.spawns['SP-R5'] && creep.memory.room == Memory.room.Five.Name) {
                    Memory.room.Five.Creeps.AmountIsLive.Drone++;
                } else if (Game.spawns['SP-R6'] && creep.memory.room == Memory.room.Six.Name) {
                    Memory.room.Six.Creeps.AmountIsLive.Drone++;
                }
                break;
            case "healer":
                DroneHealer.control(creep);
                if (Game.spawns['SP-R3'] && creep.memory.room == Memory.room.Three.Name) {
                    Memory.room.Three.Creeps.AmountIsLive.Healers++;
                } else if (Game.spawns['Spawn1'] && creep.memory.room == Memory.room.One.Name) {
                    Memory.room.One.Creeps.AmountIsLive.Healers++;
                }
                break;
            case "zergling":
                zergling.control(creep);
                if (Game.spawns['Spawn1'] && creep.memory.room == Memory.room.One.Name) {
                    Memory.room.One.Creeps.AmountIsLive.zerglings++;
                } else if (Game.spawns['Spawn2'] && creep.memory.room == Memory.room.Two.Name) {
                    Memory.room.Two.Creeps.AmountIsLive.zerglings++;
                } else if (Game.spawns['SP-R3'] && creep.memory.room == Memory.room.Three.Name) {
                    Memory.room.Three.Creeps.AmountIsLive.zerglings++;
                } else if (Game.spawns['SP-R'] && creep.memory.room == Memory.room.Four.Name) {
                    Memory.room.Four.Creeps.AmountIsLive.zerglings++;
                } else if (Game.spawns['SP-R5'] && creep.memory.room == Memory.room.Five.Name) {
                    Memory.room.Five.Creeps.AmountIsLive.zerglings++;
                }
                break;
            case "overlord":
                Overlord.control(creep);
                if (Game.spawns['Spawn1'] && creep.memory.room == Memory.room.One.Name) {
                    Memory.room.One.Creeps.AmountIsLive.Overlords++;
                }
                break;
            case "DroneRemoute":
                DroneRemoute.control(creep);
                if (Game.spawns['Spawn1'] && creep.memory.room == Memory.room.One.Name) {
                    Memory.room.One.Creeps.AmountIsLive.DroneRemoute++;
                }
                break;

        }
    }

}

var ControlRoom = {
    control(room) {

        if (Memory.UI == true) {
            Visual();
        }
        amountCreepsIsLive();

    }
};
module.exports = ControlRoom;