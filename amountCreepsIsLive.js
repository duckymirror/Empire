var amountCreepsIsLive = {
    run(amountCreeps) {
        var role_CR_MN = require("role_CR_MN");

        Memory.room.One.amount_CR_MN_0_IsLive = 0;
        Memory.room.One.amount_CR_MN_1_IsLive = 0;
        Memory.room.One.amount_CR_BD_IsLive = 0;
        Memory.room.One.amount_CR_TR_IsLive = 0;

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            switch (creep.memory.role) {
                case "CR-MN-0":
                    roleMiner.control(creep);
                    if (creep.memory.room == "One") {
                        Memory.room.One.amount_CR_MN_0_IsLive++;
                    }
                    break;
                case "CR-MN-1":
                    roleMiner.control(creep);
                    if (creep.memory.room == "One") {
                        Memory.room.One.amount_CR_MN_1_IsLive++;
                    }
                    break;
                case "CR-BD":
                    roleCR_BD.control(creep);
                    if (creep.memory.room == "One") {
                        Memory.room.One.amount_CR_BD_sIsLive++;
                    }
                    break;
                case "CR-TR":
                    roleTransporter.control(creep);
                    if (creep.memory.room == "One") {
                        Memory.room.One.amount_CR_TR_IsLive++;
                    }
                    break;
            }
        }
    }
};
module.exports = amountCreepsIsLive;
