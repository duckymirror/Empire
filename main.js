/*******************************************************************************
* TODO:                                                                        *
*                                                                              *
* 1. Написать ТОЧНОЕ определение id сурсов                                     *
* 2. Написать более экономное и практичное микро                               *
* 3. Удалить ненужные роли и файлы                                             *
* 4. Переписать названия SPAWN                                                 *
* 5. Написать UI с различной информацией                                       *
* 6. Написать автоматичесую расстановку дорог, расширителей, башеен и          *
*    хранилища                                                                 *
* 7. Подготовить код к развитию в комнате с одним сурсом                       *
* 8. Разделить по файлам и папкам код на односурсовый и двусурсовый курс       *
*    развития крипов                                                           *
* 9. Оптимизировать добычу ресурсов с помощью контейнеров                      *
* 10. Изменить код башен для того, чтобы стены улучшались до 1м хитпоинтов     *
* 11. Написать военный код с чизом                                             *
* 12. Сделать автодоспаун крипов, чтобы в момент смерти крипа его копия была   *
*     уже готова                                                               *
*                                                                              *
*******************************************************************************/

var roleSpawn = require("role.spawn");
var roleTower = require("role.tower");
var amountCreeps = require("amountCreeps");
var amountCreepsIsLive = require("amountCreepsIsLive");

Memory.target = {};

Memory.room = {};
Memory.amountCreeps = {};

Memory.room.E51S39 = {};
Memory.room.E49S39 = {};
Memory.room.E16S28 = {};
Memory.room.W13N47 = {};

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
