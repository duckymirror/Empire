var amountCreepsIsLive = {
    run(amountCreeps) {
		var role_CR_MN = require("role_CR_MN");
		var role_CR_TP = require("role_CR_TP");
		var role_CR_BD = require("role_CR_BD");

        Memory.room.One.amount_CR_MN_0_IsLive = 0;
        Memory.room.One.amount_CR_MN_1_IsLive = 0;
        Memory.room.One.amount_CR_BD_IsLive = 0;
        Memory.room.One.amount_CR_TP_IsLive = 0;

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            switch (creep.memory.role) {
                case "CR_MN_0":
                    role_CR_MN.control(creep);
                    if (creep.memory.room === Memory.roomOne.name) {
                        Memory.room.One.amount_CR_MN_0_IsLive =+ 1;
                    }
                    break;
                case "CR_MN_1":
                    role_CR_MN.control(creep);
                    if (creep.memory.room === Memory.roomOne.name) {
                        Memory.room.One.amount_CR_MN_1_IsLive++;
                    }
                    break;
                case "CR_BD":
                    role_CR_BD.control(creep);
                    if (creep.memory.room === Memory.roomOne.name) {
                        Memory.room.One.amount_CR_BD_IsLive++;
                    }
                    break;
                case "CR_TP":
					role_CR_TP.control(creep);
                    if (creep.memory.room === Memory.roomOne.name) {
                        Memory.room.One.amount_CR_TP_IsLive++;
                    }
                    break;
            }
        }
    }
};
module.exports = amountCreepsIsLive;
