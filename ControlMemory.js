function MemorySetting () {

    if (Game.spawns["SP-R1"]) {
        Memory.room.One                       = {};
        Memory.room.One.Controller            = {};
        Memory.room.One.Stats                 = {};
        Memory.room.One.Creeps                = {};
        Memory.room.One.Creeps.Amount         = {};
        Memory.room.One.Creeps.AmountIsLive   = {};
    }

    if (Game.spawns["RT-SP2"]) {
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

function amountCreeps () {

    if (Game.spawns["SP-R1"]) {
        Memory.room.One.Creeps.Amount.Miners0             = 1; //Default: 1
        Memory.room.One.Creeps.Amount.Miners1             = 1; //Default: 1
        Memory.room.One.Creeps.Amount.Drone               = 1; //Default: 1
        Memory.room.One.Creeps.Amount.DroneTransporters   = 0; //Default: 2
        Memory.room.One.Creeps.Amount.Builders            = 0; //Default: 2
        if (Game.flags.claim) {
            Memory.room.One.Creeps.Amount.Claimers        = 0; //Default: 1
            Memory.room.One.Creeps.Amount.FarBuilders     = 2; //Default: 2
        } else {
            Memory.room.One.Creeps.Amount.Claimers        = 0; //Default: 0
            Memory.room.One.Creeps.Amount.FarBuilders     = 0; //Default: 0
        }
        Memory.room.One.Creeps.Amount.Refillers           = 0; //Default: 1
        if (Game.flags.attack) {
            Memory.room.One.Creeps.Amount.zerglings       = 0; //Default: 1
            Memory.room.One.Creeps.Amount.Healers         = 0; //Default: 1
        } else {
            Memory.room.One.Creeps.Amount.zerglings       = 0; //Default: 0
            Memory.room.One.Creeps.Amount.Healers         = 0; //Default: 0
        }
    }

    if (Game.spawns["RT-SP2"]) {
        Memory.room.Two.Creeps.Amount.Miners0             = 1; //Default: 1
        Memory.room.Two.Creeps.Amount.Miners1             = 1; //Default: 1
        Memory.room.Two.Creeps.Amount.DroneTransporters   = 2; //Default: 2
        Memory.room.Two.Creeps.Amount.Builders            = 1; //Default: 2
        Memory.room.Two.Creeps.Amount.Claimers            = 0; //Default: 0
        Memory.room.Two.Creeps.Amount.FarBuilders         = 0; //Default: 0
        Memory.room.Two.Creeps.Amount.Refillers           = 1; //Default: 1
        if (Game.flags.attack) {
            Memory.room.Two.Creeps.Amount.zerglings        = 0; //Default: 1
            Memory.room.Two.Creeps.Amount.Healers          = 0; //Default: 1
        } else {
            Memory.room.Two.Creeps.Amount.zerglings        = 0; //Default: 0
            Memory.room.Two.Creeps.Amount.Healers          = 0; //Default: 0
        }
    }

    if (Game.spawns["SP-R3"]) {
        Memory.room.Three.Creeps.Amount.Miners0           = 1; //Default: 1
        Memory.room.Three.Creeps.Amount.Miners1           = 1; //Default: 1
        Memory.room.Three.Creeps.Amount.DroneTransporters = 2; //Default: 2
        Memory.room.Three.Creeps.Amount.Builders          = 1; //Default: 2
        Memory.room.Three.Creeps.Amount.Claimers          = 0; //Default: 0
        Memory.room.Three.Creeps.Amount.FarBuilders       = 0; //Default: 0
        Memory.room.Three.Creeps.Amount.Refillers         = 1; //Default: 1
        if (Game.flags.attack) {
            Memory.room.Three.Creeps.Amount.zerglings      = 0; //Default: 1
            //Memory.room.Three.Creeps.Amount.Healers       = 0; //Default: 1
        } else {
            Memory.room.Three.Creeps.Amount.zerglings      = 0; //Default: 0
            //Memory.room.Three.Creeps.Amount.Healers       = 0; //Default: 0
        }
    }
    
    if (Game.spawns["SP-R"]) {
        Memory.room.Four.Creeps.Amount.Miners0           = 1; //Default: 1
        Memory.room.Four.Creeps.Amount.Miners1           = 1; //Default: 1
        Memory.room.Four.Creeps.Amount.DroneTransporters = 2; //Default: 2
        Memory.room.Four.Creeps.Amount.Builders          = 1; //Default: 2
        Memory.room.Four.Creeps.Amount.Claimers          = 0; //Default: 0
        Memory.room.Four.Creeps.Amount.FarBuilders       = 0; //Default: 0
        Memory.room.Four.Creeps.Amount.Refillers         = 1; //Default: 1
        if (Game.flags.attack) {
            Memory.room.Four.Creeps.Amount.zerglings      = 0; //Default: 1
            //Memory.room.Four.Creeps.Amount.Healers       = 0; //Default: 1
        } else {
            Memory.room.Four.Creeps.Amount.zerglings      = 0; //Default: 0
            //Memory.room.Four.Creeps.Amount.Healers       = 0; //Default: 0
        }
    }

    if (Game.spawns["SP-R5"]) {
        Memory.room.Five.Creeps.Amount.Miners0           = 1; //Default: 1
        Memory.room.Five.Creeps.Amount.Miners1           = 1; //Default: 1
        Memory.room.Five.Creeps.Amount.DroneTransporters = 2; //Default: 2
        Memory.room.Five.Creeps.Amount.Builders          = 1; //Default: 2
        Memory.room.Five.Creeps.Amount.Claimers          = 0; //Default: 0
        Memory.room.Five.Creeps.Amount.FarBuilders       = 0; //Default: 0
        Memory.room.Five.Creeps.Amount.Refillers         = 1; //Default: 1
        if (Game.flags.attack) {
            Memory.room.Five.Creeps.Amount.zerglings      = 0; //Default: 1
            //Memory.room.Five.Creeps.Amount.Healers       = 0; //Default: 1
        } else {
            Memory.room.Five.Creeps.Amount.zerglings      = 0; //Default: 0
            //Memory.room.Five.Creeps.Amount.Healers       = 0; //Default: 0
        }
    }
    
}

var ControlMemory = {
    setting(memory) {

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }

        MemorySetting();
        amountCreeps();
        
    }
};
module.exports = ControlMemory;