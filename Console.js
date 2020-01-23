function params() {
    global.help = function (com) {
        help = []
        if (!com) {
            help.push("info()                          - Выводит информацио о всех комнатах")
            help.push("calculate_time(time, tickRate)  - Конвертирует тики в настоящее время")
            help.push("  * time                        - Количество тиков.")
            help.push("  * tickRate                    - Тик рейт сервера. НЕОБЯЗАТЕЛЬНО. По умолчанию: 2.69")
            help.push("Creeps(body)          - Расчет стоимости и времени строительства крипа")
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

    global.svgBody = function (color, count = 1, width = 16, height = 16) {
        const cx = width / 2;
        const cy = height / 2;
        const r = cx;

        body = []
        for (let i = 0; i < count; i += 1) {
            body.push('<svg width="' + width + '" height="' + height + '"> <circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke="black" stroke-width="1" fill="' + color + '"/></svg>')
        }
        body = body.join("");
        return body;
    };

    /*
    TODO: Доделать вывод картинки крипа

    global.CreepSvg = function (width = 32, height = 32) {
        const cx = width / 2;
        const cy = height / 2;
        const r = cx;
        return "<svg> <path fill=\"none\" stroke=\"yellow\" stroke-width=\"3\" d=\"M10,55 C15,5 100,5 100,55\" /> </svg>"
        //return "<svg width=" + width + " height=" + height + ">  <rect width=\100%\" height=\"100%\" fill=\"#1F2024\" /> <g>  <circle id=\"fon\" cx=" + cx + " cy=" + cy + " r=" + r + " stroke=\"#673E93\" stroke-width=\"2\" stroke-dasharray = " + (2*3.14*r)/2 + " stroke-dashoffset= " + (2*3.14*r)/2 + " fill=\"none\" /> </g> /> </svg>"
    }*/

    global.Creeps = function (body = null, creepRole = null) {
        if (body || creepRole) {

            if (creepRole && !body) {
                spawnFile = require("role.spawn");
                energy = 9999999999
                body = spawnFile.getBody(energy, creepRole);
            }

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

            const badBodyParts = carryCount + workCount + attackCount + rangedAttackCount + healCount + toughCount + claimCount

            result = [];

            for (var i = 0; i < bodyCount; i++) {
                if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50) result.push("\n")
                if (body[i] == "move") result.push(svgBody('grey'))
                if (body[i] == "carry") result.push(svgBody('darkgrey'))
                if (body[i] == "work") result.push(svgBody('yellow'))
                if (body[i] == "attack") result.push(svgBody('red'))
                if (body[i] == "ranged_attack") result.push(svgBody('blue'))
                if (body[i] == "heal") result.push(svgBody('green'))
                if (body[i] == "tough") result.push(svgBody('white'))
                if (body[i] == "claim") result.push(svgBody('purple'))
            }
            result.push("\n\n<table border=\"1\">");
            result.push("<caption>Характеристики крипа</caption>");
            result.push("<tr>");
            result.push("<th></th>");
            result.push("<th> " + svgBody("grey") + " </th>");
            result.push("<th> " + svgBody("darkgrey") + " </th>");
            result.push("<th> " + svgBody("yellow") + " </th>");
            result.push("<th> " + svgBody("red") + " </th>");
            result.push("<th> " + svgBody("blue") + " </th>");
            result.push("<th> " + svgBody("green") + " </th>");
            result.push("<th> " + svgBody("white") + " </th>");
            result.push("<th> " + svgBody("purple") + " </th>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>КОЛИЧЕСТВО </td>");
            result.push("<td> " + moveCount + " </td>");
            result.push("<td> " + carryCount + " </td>");
            result.push("<td> " + workCount + " </td>");
            result.push("<td> " + attackCount + " </td>");
            result.push("<td> " + rangedAttackCount + " </td>");
            result.push("<td> " + healCount + " </td>");
            result.push("<td> " + toughCount + " </td>");
            result.push("<td> " + claimCount + " </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>CAPACITY </td>");
            result.push("<td>  </td>");
            result.push("<td> " + capacity + " </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>HARVEST ENERGY </td>");
            result.push("<td>  </td>");
            result.push("<td> " + "" + " </td>");
            result.push("<td> " + harvEnergy + " </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>HARVEST MINERAL </td>");
            result.push("<td>  </td>");
            result.push("<td> " + "" + " </td>");
            result.push("<td> " + harvMineral + " </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>BUILD </td>");
            result.push("<td>  </td>");
            result.push("<td> " + "" + " </td>");
            result.push("<td> " + build + " </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>UPGRADE </td>");
            result.push("<td>  </td>");
            result.push("<td> " + "" + " </td>");
            result.push("<td> " + upgrade + " </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("</tr>");
            result.push("</table>");

            result = result.join("");
            return result
        } else {
            return "Тело не определено"
        }
    };
    global.info = function () {
        info = [];
        info.push("--------------------------")

        let spawns = [];
        for (let i in Game.rooms) {
            let room = Game.rooms[i];
            let roomSpawns = room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_SPAWN } });
            spawns = spawns.concat(roomSpawns);
        }
        for (let i in spawns) {
            let spawn = spawns[i];
            info.push("Имя комнаты: " + spawn.room.name);
            info.push("├ Основные параметры");
            info.push("│ ├ Количество энергии: " + spawn.room.energyCapacityAvailable);
            info.push("│ └ Количество доступной сейчас энергии: " + spawn.room.energyAvailable);
            info.push("├ Контроллер");
            info.push("│ ├ Уровень контроллера: " + spawn.room.controller.level);
            info.push("│ └ Прогресс контроллера: " + spawn.room.controller.progress / spawn.room.controller.progressTotal * 100 + "%");
            info.push("├ Хранилище");
            if (spawn.room.storage) {
                info.push("│ ├ Количество свободного места: " + spawn.room.storage.store.getFreeCapacity());
                info.push("│ └ Количество энергии: " + spawn.room.storage.store[RESOURCE_ENERGY])
            } else info.push("└ Отсутствует")
            info.push("└ Терминал");
            if (spawn.room.terminal) {
                info.push("  ├ Количество свободного места: " + spawn.room.terminal.store.getFreeCapacity());
                info.push("  ├ Количество энергии: " + spawn.room.terminal.store[RESOURCE_ENERGY])
                if (spawn.room.terminal.cooldown) info.push("└ Откат: " + spawn.room.terminal.cooldown)
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