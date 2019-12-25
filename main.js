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
const Nydus = require("Nydus");

Memory.room = {};

module.exports.loop = function () {
    
    ControlMemory.setting();
    ControlRoom.control();
    Console.setting();
    Nydus.run();
    roleTower.control();
    roleSpawn.run();

    const checkTime = Game.time % 51;
    if (checkTime == 50) {
        console.log("CPU всей колонии");
        console.log("└ " + Game.cpu.getUsed() + " / 20")
        console.log("------------------------");
    }
};
