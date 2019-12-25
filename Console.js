function params() {
    global.help = function (com) {
        help = []
        if (!com) {
            help.push("enable_ui()                     - Включает интерфейс")
            help.push("disable_ui()                    - Выключает интерфейс")
            help.push("info(roomNumber)                - Выводит информацио о комнате")
            help.push("  * roomNumber                  - Номер комнаты. НЕОБЯЗАТЕЛЬНО. По умолчанию: покажет все комнаты")
            help.push("claim(roomName)                 - Ставит задачу по захвату указанной комнаты")
            help.push("  * roomName                    - Имя комнаты.")
            help.push("calculate_time(time, tickRate)  - Конвертирует тики в настоящее время")
            help.push("  * time                        - Количество тиков.")
            help.push("  * tickRate                    - Тик рейт сервера. НЕОБЯЗАТЕЛЬНО. По умолчанию: 2.69")
            help.push("calculate_сreeps(body)          - Расчет стоимости и времени строительства крипа")
            help.push("  * body                        - Массив с телом крипа")
        } else if (com == "info") {
            help.push("1               - Первая комната")
            help.push("2               - Вторая комната")
            help.push("3               - Третья комната")
            help.push("4               - Четвертая комната")
            help.push("5               - Пятая комната")
            help.push("All             - Информация про все комнаты")
        }

        help = help.join("\n");
        return help
    };
    global.calculate_time = function (time, tickRate) {
        if (tickRate) {
            ticks = tickRate;
        } else {
            ticks = 2.69;
        }
        outTime = [];
        outTime.push("Количество тиков: " + time);
        outTime.push("Количество секунд: " + Math.round(time * ticks));
        if (time * ticks > 60) {
            outTime.push("Количество минут: " + Math.round(time * ticks / 60));
            if (time * ticks / 60 > 60) {
                outTime.push("Количество часов: " + Math.round(time * ticks / 60 / 60));
                if (time * ticks / 60 / 60 > 24) {
                    outTime.push("Количество дней: " + Math.round(time * ticks / 60 / 60 / 24));
                }
            }
        }
        outTime = outTime.join("\n");
        return outTime
    }
    global.enable_ui = function () {
        Memory.UI = true;
        return "UI теперь включен"
    };
    global.disable_ui = function () {
        Memory.UI = false;
        return "UI теперь выключен"
    };
    global.calculate_creeps = function (body) {
        if (body) {

            let bodyCount = 0;
            let moveCount = 0;
            let carryCount = 0;
            let workCount = 0;
            let attackCount = 0;
            let rangedAttackCount = 0;
            let healCount = 0;
            let toughCount = 0;
            let claimCount = 0;

            let price = 0;
            time = body.length * 3;

            for (let i in body) {
                bodyCount++;
                if (body[i] == "move" || body[i] == "carry") {
                    price = price + 50;
                    if (body[i] == "move") {
                        moveCount++;
                    } else {
                        carryCount++;
                    }
                } else if (body[i] == "work") {
                    price = price + 100;
                    workCount++;
                } else if (body[i] == "attack") {
                    price = price + 80;
                    attackCount++
                } else if (body[i] == "ranged_attack") {
                    price = price + 150;
                    rangedAttackCount++;
                } else if (body[i] == "heal") {
                    price = price + 250;
                    healCount++;
                } else if (body[i] == "tough") {
                    price = price + 10;
                    toughCount++;
                } else if (body[i] == "claim") {
                    price = price + 600;
                    claimCount++;
                }
            }

            result = [];
            result.push("------------------------")
            result.push("Время появления");
            result.push("└ В тиках: " + time);
            result.push("Количество");
            result.push("├ Всех частей тела: " + bodyCount);
            result.push("Стоимость");
            result.push("└ " + price + " единиц энергии");
            result.push("------------------------");
            result = result.join("\n");

            return result
        } else {
            return "Тело не определено"
        }
    };
    global.info = function (roomNumber) {
        info = [];
        info.push("--------------------------")

        let spawns = [];
        for (let i in Game.rooms){
            let room = Game.rooms[i];
            let roomSpawns = room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_SPAWN}});
            spawns = spawns.concat(roomSpawns);
        }
        for (let i in spawns){
            let spawn = spawns[i];
            info.push("Имя комнаты: " + spawn.room.name);
            info.push("├ Количество энергии: " + spawn.room.energyCapacityAvailable);
            info.push("├ Уровень контроллера: " + spawn.room.controller.level);
            info.push("└ Прогресс контроллера: " + spawn.room.controller.progress/spawn.room.controller.progressTotal*100 + "%");
            info.push("--------------------------")
        }

        info = info.join("\n");

        return info
    }
}

let ConsoleSetting = {
    setting(console) {

        params();

    }
}

module.exports = ConsoleSetting;

//Game.spawns['Spawn1'].room.find(FIND_STRUCTURES,{filter: {structureType: STRUCTURE_RAMPART}}).forEach(sites => sites.destroy());//Destroy structures