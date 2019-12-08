/*
 ______________________________________
/                                      \
|                                      |
|    ██  ██    ██    ██  ██    ████    |
|    ██  ██    ██    ██  ██    ██      |
|    ██████    ██    ██  ██    ████    |
|    ██  ██    ██    ██  ██    ██      |
|    ██  ██    ██      ██      ████    |
|                                      |
\______________SCREEPS AI______________/

@ Author: Jourloy
@ Repository: https://github.com/Jourloy/HIVE
@ How to use: Will be soon

*/

const Console = require("Console");
const ControlMemory = require("ControlMemory");
const ControlRoom = require("ControlRoom");
const roleSpawn = require("role.spawn");
const roleTower = require("role.tower");

Memory.room = {};

// Костыль
Memory.group = {};
Memory.group.attack = {};
Memory.group.attack.flag1 = {};
Memory.group.attack.flag2 = {};

function stats () {
    if (Game.spawns['Spawn1']) {
        Memory.room.One.Name = Game.spawns['Spawn1'].room.name;
        Memory.room.One.Controller.level = Game.spawns['Spawn1'].room.controller.level;
        Memory.room.One.Controller.progress = Math.round(Game.spawns['Spawn1'].room.controller.progress / Game.spawns['Spawn1'].room.controller.progressTotal * 100);
    }
    if (Game.spawns['RT-SP2']) {
        Memory.room.Two.Name = Game.spawns['RT-SP2'].room.name;
        Memory.room.Two.Controller.level = Game.spawns['RT-SP2'].room.controller.level;
        Memory.room.Two.Controller.progress = Math.round(Game.spawns['RT-SP2'].room.controller.progress / Game.spawns['RT-SP2'].room.controller.progressTotal * 100);
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

module.exports.loop = function () {

    ControlMemory.setting();
    stats();
    ControlRoom.control();

    Console.setting();
    
    roleTower.control();
    roleSpawn.run();

};
