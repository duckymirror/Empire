var amountCreepsIsLive = {
    run(amountCreeps) {

        var DroneMiner = require("DroneMiner");
        var roleBuilder = require("role.builder");
        var roleTransporter = require("role.transporter");
        var roleWarrior = require("role.warrior");
        var roleClaimer = require("role.claimer");
        var roleFarBuilder = require("role.farBuilder");

        var roleRefiller = require("role.refiller");

        Memory.room.E45N9.amountMiners0IsLive = 0;
        Memory.room.E45N9.amountMiners1IsLive = 0;
        Memory.room.E45N9.amountBuildersIsLive = 0;
        Memory.room.E45N9.amountTransportersIsLive = 0;
        Memory.room.E45N9.amountWarriorsIsLive = 0;
        Memory.room.E45N9.amountClaimersIsLive = 0;
        Memory.room.E45N9.amountFarBuildersIsLive = 0;
        Memory.room.E45N9.amountRefillersIsLive = 0

        Memory.room.W49S27.amountMiners0IsLive = 0;
        Memory.room.W49S27.amountMiners1IsLive = 0;
        Memory.room.W49S27.amountBuildersIsLive = 0;
        Memory.room.W49S27.amountTransportersIsLive = 0;
        Memory.room.W49S27.amountWarriorsIsLive = 0;
        Memory.room.W49S27.amountClaimersIsLive = 0;
        Memory.room.W49S27.amountFarBuildersIsLive = 0;

        Memory.room.W48S27.amountMiners0IsLive = 0;
        Memory.room.W48S27.amountMiners1IsLive = 0;
        Memory.room.W48S27.amountBuildersIsLive = 0;
        Memory.room.W48S27.amountTransportersIsLive = 0;
        Memory.room.W48S27.amountWarriorsIsLive = 0;
        Memory.room.W48S27.amountClaimersIsLive = 0;
        Memory.room.W48S27.amountFarBuildersIsLive = 0;

        Memory.room.W49S26.amountMiners0IsLive = 0;
        Memory.room.W49S26.amountMiners1IsLive = 0;
        Memory.room.W49S26.amountBuildersIsLive = 0;
        Memory.room.W49S26.amountTransportersIsLive = 0;
        Memory.room.W49S26.amountWarriorsIsLive = 0;
        Memory.room.W49S26.amountClaimersIsLive = 0;
        Memory.room.W49S26.amountFarBuildersIsLive = 0;

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            switch (creep.memory.role) {
                case "miner0":
                    DroneMiner.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountMiners0IsLive++;
                    } else if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountMiners0IsLive++;
                    } else if (creep.memory.room == "W48S27") {
                        Memory.room.W48S27.amountMiners0IsLive++;
                    } else if (creep.memory.room == "W49S26") {
                        Memory.room.W49S26.amountMiners0IsLive++;
                    }
                    break;
                case "miner1":
                    DroneMiner.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountMiners1IsLive++;
                    } else if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountMiners1IsLive++;
                    } else if (creep.memory.room == "W48S27") {
                        Memory.room.W48S27.amountMiners1IsLive++;
                    } else if (creep.memory.room == "W49S26") {
                        Memory.room.W49S26.amountMiners1IsLive++;
                    }
                    break;
                case "builder":
                    roleBuilder.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountBuildersIsLive++;
                    } else if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountBuildersIsLive++;
                    } else if (creep.memory.room == "W48S27") {
                        Memory.room.W48S27.amountBuildersIsLive++;
                    } else if (creep.memory.room == "W49S26") {
                        Memory.room.W49S26.amountBuildersIsLive++;
                    }
                    break;
                case "transporter":
                    roleTransporter.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountTransportersIsLive++;
                    } else if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountTransportersIsLive++;
                    } else if (creep.memory.room == "W48S27") {
                        Memory.room.W48S27.amountTransportersIsLive++;
                    } else if (creep.memory.room == "W49S26") {
                        Memory.room.W49S26.amountTransportersIsLive++;
                    }
                    break;
                case "claimer":
                    roleClaimer.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountClaimersIsLive++;
                    } else if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountClaimersIsLive++;
                    } else if (creep.memory.room == "W48S27") {
                        Memory.room.W48S27.amountClaimersIsLive++;
                    } else if (creep.memory.room == "W49S26") {
                        Memory.room.W49S26.amountClaimersIsLive++;
                    }
                    break;
                case "warrior":
                    roleWarrior.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountWarriorsIsLive++;
                    } else if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountWarriorsIsLive++;
                    } else if (creep.memory.room == "W48S27") {
                        Memory.room.W48S27.amountWarriorsIsLive++;
                    } else if (creep.memory.room == "W49S26") {
                        Memory.room.W49S26.amountWarriorsIsLive++;
                    }
                    break;
                case "farBuilder":
                    roleFarBuilder.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountFarBuildersIsLive++;
                    } else if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountFarBuildersIsLive++;
                    } else if (creep.memory.room == "W48S27") {
                        Memory.room.W48S27.amountFarBuildersIsLive++;
                    } else if (creep.memory.room == "W49S26") {
                        Memory.room.W49S26.amountFarBuilders0IsLive++;
                    }
                    break;
                case "refiller":
                    roleRefiller.control(creep);
                    if (creep.memory.room == "E45N9") {
                        Memory.room.E45N9.amountRefillersIsLive++;
                    }
            }
        }
    }
};
module.exports = amountCreepsIsLive;
