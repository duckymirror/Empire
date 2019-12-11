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

module.exports.loop = function () {

    ControlMemory.setting();
    ControlRoom.control();

    Console.setting();
    
    roleTower.control();
    roleSpawn.run();

};
