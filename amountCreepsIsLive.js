var amountCreepsIsLive = {
    run(amountCreeps) {
        var roleMiner = require("role.miner");
        var roleBuilder = require("role.builder");
        var roleTransporter = require("role.transporter");
        var roleWarrior = require("role.warrior");
        var roleClaimer = require("role.claimer");
        var roleFarBuilder = require("role.farBuilder");

        Memory.room.W49S27.amountMiners0IsLive = 0;
        Memory.room.W49S27.amountMiners1IsLive = 0;
        Memory.room.W49S27.amountBuildersIsLive = 0;
        Memory.room.W49S27.amountTransportersIsLive = 0;
        Memory.room.W49S27.amountWarriorsIsLive = 0;
        Memory.room.W49S27.amountClaimersIsLive = 0;
        Memory.room.W49S27.amountFarBuildersIsLive = 0;

        Memory.room.E49S39.amountMiners0IsLive = 0;
        Memory.room.E49S39.amountMiners1IsLive = 0;
        Memory.room.E49S39.amountBuildersIsLive = 0;
        Memory.room.E49S39.amountTransportersIsLive = 0;
        Memory.room.E49S39.amountWarriorsIsLive = 0;
        Memory.room.E49S39.amountClaimersIsLive = 0;
        Memory.room.E49S39.amountFarBuildersIsLive = 0;

        Memory.room.E16S28.amountMiners0IsLive = 0;
        Memory.room.E16S28.amountMiners1IsLive = 0;
        Memory.room.E16S28.amountBuildersIsLive = 0;
        Memory.room.E16S28.amountTransportersIsLive = 0;
        Memory.room.E16S28.amountWarriorsIsLive = 0;
        Memory.room.E16S28.amountClaimersIsLive = 0;
        Memory.room.E16S28.amountFarBuildersIsLive = 0;

        Memory.room.W13N47.amountMiners0IsLive = 0;
        Memory.room.W13N47.amountMiners1IsLive = 0;
        Memory.room.W13N47.amountBuildersIsLive = 0;
        Memory.room.W13N47.amountTransportersIsLive = 0;
        Memory.room.W13N47.amountWarriorsIsLive = 0;
        Memory.room.W13N47.amountClaimersIsLive = 0;
        Memory.room.W13N47.amountFarBuildersIsLive = 0;

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            switch (creep.memory.role) {
                case "miner0":
                    roleMiner.control(creep);
                    if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountMiners0IsLive++;
                    } else if (creep.memory.room == "E49S39") {
                        Memory.room.E49S39.amountMiners0IsLive++;
                    } else if (creep.memory.room == "E16S28") {
                        Memory.room.E16S28.amountMiners0IsLive++;
                    } else if (creep.memory.room == "W13N47") {
                        Memory.room.W13N47.amountMiners0IsLive++;
                    }
                    break;
                case "miner1":
                    roleMiner.control(creep);
                    if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountMiners1IsLive++;
                    } else if (creep.memory.room == "E49S39") {
                        Memory.room.E49S39.amountMiners1IsLive++;
                    } else if (creep.memory.room == "E16S28") {
                        Memory.room.E16S28.amountMiners1IsLive++;
                    } else if (creep.memory.room == "W13N47") {
                        Memory.room.W13N47.amountMiners1IsLive++;
                    }
                    break;
                case "builder":
                    roleBuilder.control(creep);
                    if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountBuildersIsLive++;
                    } else if (creep.memory.room == "E49S39") {
                        Memory.room.E49S39.amountBuildersIsLive++;
                    } else if (creep.memory.room == "E16S28") {
                        Memory.room.E16S28.amountBuildersIsLive++;
                    } else if (creep.memory.room == "W13N47") {
                        Memory.room.W13N47.amountBuildersIsLive++;
                    }
                    break;
                case "transporter":
                    roleTransporter.control(creep);
                    if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountTransportersIsLive++;
                    } else if (creep.memory.room == "E49S39") {
                        Memory.room.E49S39.amountTransportersIsLive++;
                    } else if (creep.memory.room == "E16S28") {
                        Memory.room.E16S28.amountTransportersIsLive++;
                    } else if (creep.memory.room == "W13N47") {
                        Memory.room.W13N47.amountTransportersIsLive++;
                    }
                    break;
                case "claimer":
                    roleClaimer.control(creep);
                    if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountClaimersIsLive++;
                    } else if (creep.memory.room == "E49S39") {
                        Memory.room.E49S39.amountClaimersIsLive++;
                    } else if (creep.memory.room == "E16S28") {
                        Memory.room.E16S28.amountClaimersIsLive++;
                    } else if (creep.memory.room == "W13N47") {
                        Memory.room.W13N47.amountClaimersIsLive++;
                    }
                    break;
                case "warrior":
                    roleWarrior.control(creep);
                    if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountWarriorsIsLive++;
                    } else if (creep.memory.room == "E49S39") {
                        Memory.room.E49S39.amountWarriorsIsLive++;
                    } else if (creep.memory.room == "E16S28") {
                        Memory.room.E16S28.amountWarriorsIsLive++;
                    } else if (creep.memory.room == "W13N47") {
                        Memory.room.W13N47.amountWarriorsIsLive++;
                    }
                    break;
                case "farBuilder":
                    roleFarBuilder.control(creep);
                    if (creep.memory.room == "W49S27") {
                        Memory.room.W49S27.amountFarBuildersIsLive++;
                    } else if (creep.memory.room == "E49S39") {
                        Memory.room.E49S39.amountFarBuildersIsLive++;
                    } else if (creep.memory.room == "E16S28") {
                        Memory.room.E16S28.amountFarBuildersIsLive++;
                    } else if (creep.memory.room == "W13N47") {
                        Memory.room.W13N47.amountFarBuilders0IsLive++;
                    }
                    break;
            }
        }
    }
};
module.exports = amountCreepsIsLive;
