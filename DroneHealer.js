/*

Коды предупреждения:

01 - Нет флага и нет целей
02 - Нет целей, крип движется к флагу
0  - Цель есть, но она далеко
1  - Доступно только лечение на расстоянии
99 - Лечит

*/

var DroneHealer = {
    /** @param {Creep} creep **/
    control(creep) {

        if (creep.spawning) {

            creep.memory.room = creep.room.name;

        } else {

            if (Game.flags.heal) {
                creep.moveTo(Game.flags.heal);
                creep.say("02");
            }
            
            var target = creep.room.find(FIND_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username == "kotyara" || creep.owner.username == "JOURLOY") && creep.hits < creep.hitsMax;
                }
            });

            if(target.length > 0) {

                target.sort((a,b) => a.hits - b.hits);

                if(creep.heal(target[0]) == -9) {
                    if (creep.rangedHeal(target[0]) == -9) {
                        creep.moveTo(target[0]);
                        creep.say("0");
                    } else {
                        creep.rangedHeal(target[0]);
                        creep.moveTo(target[0]);
                        creep.say("1");
                    }
                } else {
                    creep.heal(target[0]);
                    creep.say("99");
                }
            }

        }
    }
};
module.exports = DroneHealer;