function params() {
    global.help = function (com) {
        help = []
        if (!com) {
            help.push("info()                          - Выводит информацио о всех комнатах")
            help.push("calculate_time(time, tickRate)  - Конвертирует тики в настоящее время")
            help.push("  * time                        - Количество тиков.")
            help.push("  * tickRate                    - Тик рейт сервера. НЕОБЯЗАТЕЛЬНО. По умолчанию: 2.69")
            help.push("calculate_сreeps(body)          - Расчет стоимости и времени строительства крипа")
            help.push("  * body                        - Массив с телом крипа")
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

            let capacity = 0;
            let harvEnergy = 0;
            let harvMineral = 0;
            let build = 0;
            let upgrade = 0;

            let price = 0;
            let time = body.length * 3;

            for (let i in body) {
                bodyCount++;
                if (body[i] == "move" || body[i] == "carry") {
                    price = price + 50;
                    if (body[i] == "move") {
                        moveCount++;
                    } else {
                        carryCount++;
                        capacity = capacity + 50;
                    }
                } else if (body[i] == "work") {
                    price = price + 100;
                    workCount++;
                    harvEnergy = harvEnergy + 2;
                    harvMineral = harvMineral + 1;
                    build = build + 5;
                    upgrade++;
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

            const badBodyParts = carryCount+workCount+attackCount+rangedAttackCount+healCount+toughCount+claimCount

            result = [];
            result.push("------------------------")
            result.push("Время появления");
            result.push("└ В тиках: " + time);
            result.push("Количество");
            result.push("├ Всех частей тела: " + bodyCount);
            if (badBodyParts > moveCount) result.push("├ MOVE: " + moveCount + " (крип будет ходить с задержкой, для ее устранения необходимо еще " + (badBodyParts-moveCount) + " частей MOVE)");
            else result.push("├ MOVE: " + moveCount);
            result.push("├ CARRY: " + carryCount);
            result.push("│ └ CAPACITY: " + capacity)
            result.push("├ WORK: " + workCount);
            result.push("│ └ HARVEST ENERGY: " + harvEnergy)
            result.push("│ └ HARVESN MINERAL: " + harvMineral)
            result.push("│ └ BUILD: " + build)
            result.push("│ └ UPGRADE: " + upgrade)
            result.push("├ ATTACK: " + attackCount);
            result.push("├ RANGED ATTACK: " + rangedAttackCount);
            result.push("├ HEAL: " + healCount);
            result.push("├ TOUGH: " + toughCount);
            result.push("└ CLAIM: " + claimCount);
            result.push("Стоимость");
            result.push("└ " + price + " единиц энергии");
            result.push("------------------------");
            result = result.join("\n");

            return result
        } else {
            return "Тело не определено"
        }
    };
    global.info = function () {
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
            info.push("├ Основные параметры");
            info.push("│ ├ Количество энергии: " + spawn.room.energyCapacityAvailable);
            info.push("│ └ Количество доступной сейчас энергии: " + spawn.room.energyAvailable);
            info.push("├ Контроллер");
            info.push("│ ├ Уровень контроллера: " + spawn.room.controller.level);
            info.push("│ └ Прогресс контроллера: " + spawn.room.controller.progress/spawn.room.controller.progressTotal*100 + "%");
            info.push("├ Хранилище");
            if (spawn.room.storage) {
                info.push("│ ├ Количество свободного места: " + spawn.room.storage.store.getFreeCapacity());
                info.push("│ └ Количество энергии: " + spawn.room.storage.store[RESOURCE_ENERGY])
            } else info.push("└ Отсутствует")
            info.push("└ Терминал");
            if (spawn.room.terminal) {
                info.push("  ├ Количество свободного места: " + spawn.room.terminal.store.getFreeCapacity());
                info.push("  ├ Количество энергии: " + spawn.room.terminal.store[RESOURCE_ENERGY])
                if (spawn.room.terminal.cooldown) info.push("└ Откат: " + spawn.room.terminal.cooldown)
                else info.push("  └ Откат: 0")
            } else info.push("  └ Отсутствует")
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