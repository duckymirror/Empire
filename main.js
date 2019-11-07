var roleSpawn = require("role.spawn");
var roleTower = require("role.tower");
var amountCreeps = require("amountCreeps");
var amountCreepsIsLive = require("amountCreepsIsLive");

Memory.target = {};

Memory.room = {};
Memory.amountCreeps = {};

Memory.room.W49S28 = {};
Memory.room.W49S27 = {};
Memory.room.E16S28 = {};
Memory.room.W13N47 = {};
Memory.stats = {};

module.exports.loop = function () {

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    roleTower.control();
    roleSpawn.run();
    amountCreepsIsLive.run();
    amountCreeps.run();
    Memory.stats["colony.Bucket"] = Game.cpu.bucket;
    Memory.stats["colony.usedCpu"] = Game.cpu.getUsed()
};
