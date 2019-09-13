var Main = {
  control(main) {

    var roleSpawn = require("role.spawn");
    var amountCreeps = require("amountCreeps");
    var amountCreepsIsLive = require("amountCreepsIsLive");

    Memory.target = {};
    Memory.amountCreeps = {};
    Memory.amountCreeps.room = {};
    Memory.amountCreeps.room.One = {};
    Memory.room = {};
    Memory.room.One = {};
    Memory.sources = {};
    Memory.mode = 1;

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    //roleTower.control();
    roleSpawn.run();
    amountCreepsIsLive.run();
    amountCreeps.run();
  }
};
module.exports = Main;


    /*
    console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:")
    if (Memory.sourceId0) {
      console.log("|>-< Source1 >-<|>-< OK >-<|")
    } else {
      console.log("|>-< Source1 >-<|>-< X >--<|")
    }

    if (Memory.sourceId1) {
      console.log("|>-< Source2 >-<|>-< OK >-<|")
    } else {
      console.log("|>-< Source2 >-<|>-< X >--<|")
    }
    console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:")
    */
