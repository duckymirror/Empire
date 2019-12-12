function MemorySetting() {

    if (Game.spawns["Spawn1"]) {
        Memory.room.One = {};
        Memory.room.One.Stats = {};
        Memory.room.One.Stats.Controller = {};
        Memory.room.One.Creeps = {};
        Memory.room.One.Creeps.Amount = {};
        Memory.room.One.Creeps.AmountIsLive = {};
    }

    if (Game.spawns["Spawn2"]) {
        Memory.room.Two = {};
        Memory.room.Two.Stats = {};
        Memory.room.Two.Stats.Controller = {};
        Memory.room.Two.Creeps = {};
        Memory.room.Two.Creeps.Amount = {};
        Memory.room.Two.Creeps.AmountIsLive = {};
    }

    if (Game.spawns["SP-R3"]) {
        Memory.room.Three = {};
        Memory.room.Three.Stats = {};
        Memory.room.Three.Stats.Controller = {};
        Memory.room.Three.Creeps = {};
        Memory.room.Three.Creeps.Amount = {};
        Memory.room.Three.Creeps.AmountIsLive = {};
    }

    if (Game.spawns["SP-R"]) {
        Memory.room.Four = {};
        Memory.room.Four.Stats.Controller = {};
        Memory.room.Four.Creeps = {};
        Memory.room.Four.Creeps.Amount = {};
        Memory.room.Four.Creeps.AmountIsLive = {};
    }

    if (Game.spawns["SP-R5"]) {
        Memory.room.Five = {};
        Memory.room.Five.Stats.Controller = {};
        Memory.room.Five.Creeps = {};
        Memory.room.Five.Creeps.Amount = {};
        Memory.room.Five.Creeps.AmountIsLive = {};
    }

    if (Game.spawns["SP-R6"]) {
        Memory.room.Six = {};
        Memory.room.Six.Stats.Controller = {};
        Memory.room.Six.Creeps = {};
        Memory.room.Six.Creeps.Amount = {};
        Memory.room.Six.Creeps.AmountIsLive = {};
    }

}


function stats() {
    if (Game.spawns['Spawn1']) {
        Memory.room.One.Name = Game.spawns['Spawn1'].room.name;
        Memory.room.One.Stats.Controller.level = Game.spawns['Spawn1'].room.controller.level;
        Memory.room.One.Stats.Controller.progress = Math.round(Game.spawns['Spawn1'].room.controller.progress / Game.spawns['Spawn1'].room.controller.progressTotal * 100);
        Memory.room.One.Stats.sourcesLength = Game.spawns['Spawn1'].room.find(FIND_SOURCES).length;
    }
    if (Game.spawns['Spawn2']) {
        Memory.room.Two.Name = Game.spawns['Spawn2'].room.name;
        Memory.room.Two.Stats.Controller.level = Game.spawns['Spawn2'].room.controller.level;
        Memory.room.Two.Stats.Controller.progress = Math.round(Game.spawns['Spawn2'].room.controller.progress / Game.spawns['Spawn2'].room.controller.progressTotal * 100);
        Memory.room.Two.Stats.sourcesLength = Game.spawns['Spawn2'].room.find(FIND_SOURCES).length;
    }
    if (Game.spawns['SP-R3']) {
        Memory.room.Three.Name = Game.spawns['SP-R3'].room.name;
        Memory.room.Three.Stats.Controller.level = Game.spawns['SP-R3'].room.controller.level;
        Memory.room.Three.Stats.Controller.progress = Math.round(Game.spawns['SP-R3'].room.controller.progress / Game.spawns['SP-R3'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['SP-R']) {
        Memory.room.Four.Name = Game.spawns['SP-R'].room.name;
        Memory.room.Four.Stats.Controller.level = Game.spawns['SP-R'].room.controller.level;
        Memory.room.Four.Stats.Controller.progress = Math.round(Game.spawns['SP-R'].room.controller.progress / Game.spawns['SP-R'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['SP-R5']) {
        Memory.room.Five.Name = Game.spawns['SP-R5'].room.name;
        Memory.room.Five.Stats.Controller.level = Game.spawns['SP-R5'].room.controller.level;
        Memory.room.Five.Stats.Controller.progress = Math.round(Game.spawns['SP-R5'].room.controller.progress / Game.spawns['SP-R5'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['SP-R6']) {
        Memory.room.Six.Name = Game.spawns['SP-R6'].room.name;
        Memory.room.Six.Stats.Controller.level = Game.spawns['SP-R6'].room.controller.level;
        Memory.room.Six.Stats.Controller.progress = Math.round(Game.spawns['SP-R6'].room.controller.progress / Game.spawns['SP-R6'].room.controller.progressTotal * 100);
    }
}

function amountCreeps() {

    if (Game.spawns["Spawn1"]) {

        Memory.room.One.Creeps.Amount.Drone = 0;
        Memory.room.One.Creeps.Amount.DroneRemoute = 0;
        Memory.room.One.Creeps.Amount.Overlords = 0;
        Memory.room.One.Creeps.Amount.zerglings = 0;

        if (Memory.room.One.Stats.sourcesLength == 2) {
            switch (Memory.room.One.Stats.Controller.level) {
                case 1:
                    Memory.room.One.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 2:
                    Memory.room.One.Creeps.Amount.Drone = 4; //Стандарт: 4
                    break;
                case 3:
                    Memory.room.One.Creeps.Amount.Drone = 4; //Стандарт: 4
                    break;
                case 4:
                    Memory.room.One.Creeps.Amount.Drone = 2; //Стандарт: 3
                    break;
                case 5:
                    Memory.room.One.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 6:
                    Memory.room.One.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 7:
                    Memory.room.One.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 8:
                    Memory.room.One.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
            }
        } else {
            switch (Memory.room.One.Stats.Controller.level) {
                case 1:
                    Memory.room.One.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 2:
                    Memory.room.One.Creeps.Amount.Drone = 3; //Стандарт: 3
                    break;
                case 3:
                    Memory.room.One.Creeps.Amount.Drone = 3; //Стандарт: 3
                    break;
                case 4:
                    Memory.room.One.Creeps.Amount.Drone = 3; //Стандарт: 3
                    break;
                case 5:
                    Memory.room.One.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 6:
                    Memory.room.One.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 7:
                    Memory.room.One.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 8:
                    Memory.room.One.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
            }
        }

        if (Game.flags.clearRoom) {
            Memory.room.One.Creeps.Amount.DroneRemoute = 3;
        }

        if (Game.flags.attack) {
            Memory.room.One.Creeps.Amount.zerglings = 5;
        }

        if (Game.flags.claim) {
            Memory.room.One.Creeps.Amount.DroneRemoute = 3;
        }
    }

    if (Game.spawns["Spawn2"]) {
        Memory.room.Two.Creeps.Amount.Drone = 0;
        Memory.room.Two.Creeps.Amount.DroneRemoute = 0;
        Memory.room.Two.Creeps.Amount.Overlords = 0;
        Memory.room.Two.Creeps.Amount.zerglings = 0;

        if (Memory.room.Two.Stats.sourcesLength == 2) {
            switch (Memory.room.Two.Stats.Controller.level) {
                case 1:
                    Memory.room.Two.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 2:
                    Memory.room.Two.Creeps.Amount.Drone = 4; //Стандарт: 4
                    break;
                case 3:
                    Memory.room.Two.Creeps.Amount.Drone = 4; //Стандарт: 4
                    break;
                case 4:
                    Memory.room.Two.Creeps.Amount.Drone = 3; //Стандарт: 3
                    break;
                case 5:
                    Memory.room.Two.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 6:
                    Memory.room.Two.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 7:
                    Memory.room.Two.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 8:
                    Memory.room.Two.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
            }
        } else {
            switch (Memory.room.Two.Stats.Controller.level) {
                case 1:
                    Memory.room.Two.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 2:
                    Memory.room.Two.Creeps.Amount.Drone = 3; //Стандарт: 3
                    break;
                case 3:
                    Memory.room.Two.Creeps.Amount.Drone = 3; //Стандарт: 3
                    break;
                case 4:
                    Memory.room.Two.Creeps.Amount.Drone = 3; //Стандарт: 3
                    break;
                case 5:
                    Memory.room.Two.Creeps.Amount.Drone = 2; //Стандарт: 2
                    break;
                case 6:
                    Memory.room.Two.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 7:
                    Memory.room.Two.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
                case 8:
                    Memory.room.Two.Creeps.Amount.Drone = 1; //Стандарт: 1
                    break;
            }
        }

        if (Game.flags.clearRoom2) {
            Memory.room.Two.Creeps.Amount.DroneRemoute = 3;
        }

        if (Game.flags.attack2) {
            Memory.room.Two.Creeps.Amount.zerglings = 5;
        }

        if (Game.flags.claim2) {
            Memory.room.Two.Creeps.Amount.DroneRemoute = 3;
        }
    }

    if (Game.spawns["SP-R3"]) {
        Memory.room.Three.Creeps.Amount.Miners0 = 1;
        Memory.room.Three.Creeps.Amount.Miners1 = 1;
        Memory.room.Three.Creeps.Amount.Drone = 1;
        if (Game.flags.claim) {
            Memory.room.Three.Creeps.Amount.Claimers = 0;
            Memory.room.Three.Creeps.Amount.FarBuilders = 0;
        } else {
            Memory.room.Three.Creeps.Amount.Claimers = 0;
            Memory.room.Three.Creeps.Amount.FarBuilders = 0;
        }
        if (Game.flags.attack) {
            Memory.room.Three.Creeps.Amount.zerglings = 0;
            //Memory.room.Three.Creeps.Amount.Healers       = 0;
        } else {
            Memory.room.Three.Creeps.Amount.zerglings = 0;
            //Memory.room.Three.Creeps.Amount.Healers       = 0;
        }
    }

    if (Game.spawns["SP-R"]) {
        Memory.room.Four.Creeps.Amount.Miners0 = 1;
        Memory.room.Four.Creeps.Amount.Miners1 = 1;
        Memory.room.Four.Creeps.Amount.Drone = 1;
        if (Game.flags.claim) {
            Memory.room.Four.Creeps.Amount.Claimers = 0;
            Memory.room.Four.Creeps.Amount.FarBuilders = 0;
        } else {
            Memory.room.Four.Creeps.Amount.Claimers = 0;
            Memory.room.Four.Creeps.Amount.FarBuilders = 0;
        }
        if (Game.flags.attack) {
            Memory.room.Four.Creeps.Amount.zerglings = 0;
            //Memory.room.Four.Creeps.Amount.Healers       = 0;
        } else {
            Memory.room.Four.Creeps.Amount.zerglings = 0;
            //Memory.room.Four.Creeps.Amount.Healers       = 0;
        }
    }

    if (Game.spawns["SP-R5"]) {
        Memory.room.Five.Creeps.Amount.Miners0 = 1;
        Memory.room.Five.Creeps.Amount.Miners1 = 1;
        Memory.room.Five.Creeps.Amount.Drone = 1;
        Memory.room.Five.Creeps.Amount.Claimers = 0;
        Memory.room.Five.Creeps.Amount.FarBuilders = 0;
        if (Game.flags.attack) {
            Memory.room.Five.Creeps.Amount.zerglings = 0;
            //Memory.room.Five.Creeps.Amount.Healers       = 0;
        } else {
            Memory.room.Five.Creeps.Amount.zerglings = 0;
            //Memory.room.Five.Creeps.Amount.Healers       = 0;
        }
    }

    if (Game.spawns["SP-R6"]) {
        Memory.room.Six.Creeps.Amount.Miners0 = 1;
        Memory.room.Six.Creeps.Amount.Miners1 = 0;
        Memory.room.Six.Creeps.Amount.Drone = 1;
    }

}

var ControlMemory = {
    setting(memory) {

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }

        Memory.room.claim = "W47N25"
        MemorySetting();
        stats();
        amountCreeps();

    }
};
module.exports = ControlMemory;