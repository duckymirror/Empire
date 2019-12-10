function MemorySetting () {

    if (Game.spawns["Spawn1"]) {
        Memory.room.One                       = {};
        Memory.room.One.Stats                 = {};
        Memory.room.One.Stats.Controller      = {};
        Memory.room.One.Creeps                = {};
        Memory.room.One.Creeps.Amount         = {};
        Memory.room.One.Creeps.AmountIsLive   = {};
    }

    if (Game.spawns["Spawn2"]) {
        Memory.room.Two                       = {};
        Memory.room.Two.Controller            = {};
        Memory.room.Two.Creeps                = {};
        Memory.room.Two.Creeps.Amount         = {};
        Memory.room.Two.Creeps.AmountIsLive   = {};
    }

    if (Game.spawns["SP-R3"]) {
        Memory.room.Three                     = {};
        Memory.room.Three.Controller          = {};
        Memory.room.Three.Creeps              = {};
        Memory.room.Three.Creeps.Amount       = {};
        Memory.room.Three.Creeps.AmountIsLive = {};
    }

    if (Game.spawns["SP-R"]) {
        Memory.room.Four                      = {};
        Memory.room.Four.Controller           = {};
        Memory.room.Four.Creeps               = {};
        Memory.room.Four.Creeps.Amount        = {};
        Memory.room.Four.Creeps.AmountIsLive  = {};
    }

    if (Game.spawns["SP-R5"]) {
        Memory.room.Five                      = {};
        Memory.room.Five.Controller           = {};
        Memory.room.Five.Creeps               = {};
        Memory.room.Five.Creeps.Amount        = {};
        Memory.room.Five.Creeps.AmountIsLive  = {};
    }

    if (Game.spawns["SP-R6"]) {
        Memory.room.Six                       = {};
        Memory.room.Six.Controller            = {};
        Memory.room.Six.Creeps                = {};
        Memory.room.Six.Creeps.Amount         = {};
        Memory.room.Six.Creeps.AmountIsLive   = {};
    }

}


function stats () {
    if (Game.spawns['Spawn1']) {
        Memory.room.One.Name = Game.spawns['Spawn1'].room.name;
        Memory.room.One.Stats.Controller.level = Game.spawns['Spawn1'].room.controller.level;
        Memory.room.One.Stats.Controller.progress = Math.round(Game.spawns['Spawn1'].room.controller.progress / Game.spawns['Spawn1'].room.controller.progressTotal * 100);
        Memory.room.One.Stats.sourcesLength = Game.spawns['Spawn1'].room.find(FIND_SOURCES).length;
    }
    if (Game.spawns['Spawn2']) {
        Memory.room.Two.Name = Game.spawns['Spawn2'].room.name;
        Memory.room.Two.Controller.level = Game.spawns['Spawn2'].room.controller.level;
        Memory.room.Two.Controller.progress = Math.round(Game.spawns['Spawn2'].room.controller.progress / Game.spawns['Spawn2'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['SP-R3']) {
        Memory.room.Three.Name = Game.spawns['SP-R3'].room.name;
        Memory.room.Three.Controller.level = Game.spawns['SP-R3'].room.controller.level;
        Memory.room.Three.Controller.progress = Math.round(Game.spawns['SP-R3'].room.controller.progress / Game.spawns['SP-R3'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['SP-R']) {
        Memory.room.Four.Name = Game.spawns['SP-R'].room.name;
        Memory.room.Four.Controller.level = Game.spawns['SP-R'].room.controller.level;
        Memory.room.Four.Controller.progress = Math.round(Game.spawns['SP-R'].room.controller.progress / Game.spawns['SP-R'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['SP-R5']) {
        Memory.room.Five.Name = Game.spawns['SP-R5'].room.name;
        Memory.room.Five.Controller.level = Game.spawns['SP-R5'].room.controller.level;
        Memory.room.Five.Controller.progress = Math.round(Game.spawns['SP-R5'].room.controller.progress / Game.spawns['SP-R5'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['SP-R6']) {
        Memory.room.Six.Name = Game.spawns['SP-R6'].room.name;
        Memory.room.Six.Controller.level = Game.spawns['SP-R6'].room.controller.level;
        Memory.room.Six.Controller.progress = Math.round(Game.spawns['SP-R6'].room.controller.progress / Game.spawns['SP-R6'].room.controller.progressTotal * 100);
    }
}

function amountCreeps () {

    if (Game.spawns["Spawn1"]) {

        Memory.room.One.Creeps.Amount.Miners0 = 0; 
        Memory.room.One.Creeps.Amount.Miners1 = 0;
        Memory.room.One.Creeps.Amount.Drone = 0;
        Memory.room.One.Creeps.Amount.DroneRemoute = 0;
        Memory.room.One.Creeps.Amount.Overlords = 0;
        Memory.room.One.Creeps.Amount.Claimers = 0;
        Memory.room.One.Creeps.Amount.FarBuilders = 0;

        if (Memory.room.One.Stats.sourcesLength == 2) {
            Memory.room.One.Creeps.Amount.Miners0             = 1; 
            Memory.room.One.Creeps.Amount.Miners1             = 1;
        } else if (Memory.room.One.Stats.sourcesLength == 1) {
            Memory.room.One.Creeps.Amount.Miners0             = 1;
        }
        
        if (Memory.room.One.Creeps.Amount.Miners1 == 1) {
            if (Memory.room.One.Stats.Controller.level == 1) {
                Memory.room.One.Creeps.Amount.Drone = 1;
            } else if (Memory.room.One.Stats.Controller.level >= 2 && Memory.room.One.Stats.Controller.level <= 4) {
                Memory.room.One.Creeps.Amount.Drone = 5;
            } else if (Memory.room.One.Stats.Controller.level >= 5) {
                Memory.room.One.Creeps.Amount.Drone = 1;
            }
        } else {
            if (Memory.room.One.Stats.Controller.level == 1) {
                Memory.room.One.Creeps.Amount.Drone = 1;
            } else if (Memory.room.One.Stats.Controller.level >= 2 && Memory.room.One.Stats.Controller.level <= 4) {
                Memory.room.One.Creeps.Amount.Drone = 2;
            } else if (Memory.room.One.Stats.Controller.level >= 5) {
                Memory.room.One.Creeps.Amount.Drone = 1;
            }
        }

        if (Game.flags.clearRoom) {
            Memory.room.One.Creeps.Amount.DroneRemoute = 4;
        }

        if (Game.flags.attack) {
            Memory.room.One.Creeps.Amount.zerglings = 1;
            Memory.room.One.Creeps.Amount.Healers = 1;
        }
        
        if (Game.flags.claim) {
            Memory.room.One.Creeps.Amount.Overlords = 1;
            Memory.room.One.Creeps.Amount.zerglings = 1;
            Memory.room.One.Creeps.Amount.DroneRemoute = 1;
        }
    }

    if (Game.spawns["Spawn2"]) {
        Memory.room.Two.Creeps.Amount.Miners0             = 1;
        Memory.room.Two.Creeps.Amount.Miners1             = 1;
        Memory.room.Two.Creeps.Amount.Drone               = 1;
        if (Game.flags.claim) {
            Memory.room.Two.Creeps.Amount.Claimers        = 0;
            Memory.room.Two.Creeps.Amount.FarBuilders     = 0;
        } else {
            Memory.room.Two.Creeps.Amount.Claimers        = 0;
            Memory.room.Two.Creeps.Amount.FarBuilders     = 0;
        }
        if (Game.flags.attack) {
            Memory.room.Two.Creeps.Amount.zerglings        = 0;
            Memory.room.Two.Creeps.Amount.Healers          = 0;
        } else {
            Memory.room.Two.Creeps.Amount.zerglings        = 0;
            Memory.room.Two.Creeps.Amount.Healers          = 0;
        }
    }

    if (Game.spawns["SP-R3"]) {
        Memory.room.Three.Creeps.Amount.Miners0           = 1;
        Memory.room.Three.Creeps.Amount.Miners1           = 1;
        Memory.room.Three.Creeps.Amount.Drone             = 1;
        if (Game.flags.claim) {
            Memory.room.Three.Creeps.Amount.Claimers        = 0;
            Memory.room.Three.Creeps.Amount.FarBuilders     = 0;
        } else {
            Memory.room.Three.Creeps.Amount.Claimers        = 0;
            Memory.room.Three.Creeps.Amount.FarBuilders     = 0;
        }
        if (Game.flags.attack) {
            Memory.room.Three.Creeps.Amount.zerglings      = 0;
            //Memory.room.Three.Creeps.Amount.Healers       = 0;
        } else {
            Memory.room.Three.Creeps.Amount.zerglings      = 0;
            //Memory.room.Three.Creeps.Amount.Healers       = 0;
        }
    }
    
    if (Game.spawns["SP-R"]) {
        Memory.room.Four.Creeps.Amount.Miners0           = 1;
        Memory.room.Four.Creeps.Amount.Miners1           = 1;
        Memory.room.Four.Creeps.Amount.Drone             = 1;
        if (Game.flags.claim) {
            Memory.room.Four.Creeps.Amount.Claimers        = 0;
            Memory.room.Four.Creeps.Amount.FarBuilders     = 0;
        } else {
            Memory.room.Four.Creeps.Amount.Claimers        = 0;
            Memory.room.Four.Creeps.Amount.FarBuilders     = 0;
        }
        if (Game.flags.attack) {
            Memory.room.Four.Creeps.Amount.zerglings      = 0;
            //Memory.room.Four.Creeps.Amount.Healers       = 0;
        } else {
            Memory.room.Four.Creeps.Amount.zerglings      = 0;
            //Memory.room.Four.Creeps.Amount.Healers       = 0;
        }
    }

    if (Game.spawns["SP-R5"]) {
        Memory.room.Five.Creeps.Amount.Miners0           = 1;
        Memory.room.Five.Creeps.Amount.Miners1           = 1;
        Memory.room.Five.Creeps.Amount.Drone             = 1;
        Memory.room.Five.Creeps.Amount.Claimers          = 0;
        Memory.room.Five.Creeps.Amount.FarBuilders       = 0;
        if (Game.flags.attack) {
            Memory.room.Five.Creeps.Amount.zerglings      = 0;
            //Memory.room.Five.Creeps.Amount.Healers       = 0;
        } else {
            Memory.room.Five.Creeps.Amount.zerglings      = 0;
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

        Memory.room.claim = "E46N7"
        MemorySetting();
        stats();
        amountCreeps();
        
    }
};
module.exports = ControlMemory;