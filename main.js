var roleSpawn = require("role.spawn");
var roleTower = require("role.tower");
var amountCreeps = require("amountCreeps");
var amountCreepsIsLive = require("amountCreepsIsLive");

Memory.target = {};

Memory.room = {};
Memory.amountCreeps = {};

Memory.room.E45N9 = {};
Memory.room.E46N9 = {};
Memory.room.E48N5 = {};
Memory.room.W49S26 = {};

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
};
