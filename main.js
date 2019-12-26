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
    const checkTime = Game.time % 101;
    if (checkTime == 100) {
        console.log("CPU всей колонии");
        console.log("└ " + Game.cpu.getUsed() + " / 20")
        console.log("Свободная Memory")
        console.log("└ " + Math.round((2*1024*1024 - RawMemory.get().length)/1024))
        console.log("Используемая Memory")
        console.log("└ " + Math.round(RawMemory.get().length/1024))
        console.log("------------------------");
    }
};
