function params() {
    global.help = function (com) {
        help = []
        if (!com) {
            help.push("info()                          - Выводит информацио о всех комнатах")
            help.push("calculate_time(time, tickRate)  - Конвертирует тики в настоящее время")
            help.push("  * time                        - Количество tiks.")
            help.push("  * tickRate                    - Тик рейт сервера. НЕОБЯЗАТЕЛЬНО. По умолчанию: 2.69")
            help.push("Creeps(body)                    - Расчет стоимости и времени строительства крипа")
            help.push("  * body                        - Массив с телом крипа")
            help.push("CreepBuilder(body)              - Выводит информацию о представлленом крипе");
            help.push("  * body                        - help(\"CreepBuilder\") чтобы узнать об этом параметре");
        }

        if (com == "CreepBuilder") {
            help.push("CreepBuilder");
            help.push("\nПринимает количество BODY PARTS в таком порядке:");
            help.push("1. MOVE");
            help.push("2. CARRY");
            help.push("3. WORK");
            help.push("4. ATTACK");
            help.push("5. RANGED_ATTACK");
            help.push("6. HEAL");
            help.push("7. TOUGH");
            help.push("8. CLAIM");
            help.push("По умолчанию все значения равны 0.");
            help.push("\nТо есть, чтобы создать крипа с 2-мя WORK необходимо написать: CreepBuilder(0, 0, 2)");
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
        outTime.push("Количество tiks: " + time);
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

        body = [];
        for (let i = 0; i < count; i += 1) {
            body.push('<svg width="' + width + '" height="' + height + '"> <circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke="black" stroke-width="1" fill="' + color + '"/></svg>');
        }
        body = body.join("");
        return body;
    };

    global.svgCreep = function (width = 48, height = 48) {
        const cx = width / 2;
        const cy = height / 2;
        const r = cx;

        body = [];
        body.push('<svg width="' + width + '" height="' + height + '"> <circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke="black" stroke-width="1" fill="#202020"/></svg>');
        body = body.join("");
        return body;
    };
    
    global.CreepBuilder = function (move = 0, carry = 0, work = 0, attack = 0, rangedAttack = 0, heal = 0, tough = 0, claim = 0) {
        body = []
        if (move > 0) {
            for (var i = 0; i < move; i++) {
                body.push(MOVE);
            }
        }
        if (carry > 0) {
            for (var i = 0; i < carry; i++) {
                body.push(CARRY);
            }
        }
        if (work > 0) {
            for (var i = 0; i < work; i++) {
                body.push(WORK);
            }
        }
        if (attack > 0) {
            for (var i = 0; i < attack; i++) {
                body.push(ATTACK);
            }
        }
        if (rangedAttack > 0) {
            for (var i = 0; i < rangedAttack; i++) {
                body.push(RANGED_ATTACK);
            }
        }
        if (heal > 0) {
            for (var i = 0; i < heal; i++) {
                body.push(HEAL);
            }
        }
        if (tough > 0) {
            for (var i = 0; i < tough; i++) {
                body.push(TOUGH);
            }
        }
        if (claim > 0) {
            for (var i = 0; i < claim; i++) {
                body.push(CLAIM);
            }
        }
        return Creeps(body)
    }

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
            let damageAttack = 0;
            let damageRangedAttack = 0;
            let healShort = 0;
            let healDistance = 0;
            let hits = 0;

            let price = 0;
            let time = body.length * 3;

            for (let i in body) {
                bodyCount++;
                hits += 50;
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
                    damageAttack += 30;
                } else if (body[i] == "ranged_attack") {
                    price = price + 150;
                    rangedAttackCount++;
                    damageRangedAttack += 10;
                } else if (body[i] == "heal") {
                    price = price + 250;
                    healCount++;
                    healShort += 12;
                    healDistance += 4;
                } else if (body[i] == "tough") {
                    price = price + 10;
                    toughCount++;
                } else if (body[i] == "claim") {
                    price = price + 600;
                    claimCount++;
                }
            }

            const badBodyParts = carryCount + workCount + attackCount + rangedAttackCount + healCount + toughCount + claimCount

            let movePlain = 0;
            let moveRoad = 0;
            let moveSwamp = 0;

            let movePlainCarry = 0;
            let moveRoadCarry = 0
            let moveSwampCarry = 0

            if (moveCount == 0) {
                movePlain = "-";
                moveRoad = bodyCount;
                moveSwamp = "-";

                if (carryCount > 0) {
                    movePlainCarry = "-";
                    moveRoadCarry = 1;
                    moveSwampCarry = "-";
                }
            } else {
                movePlain = Math.ceil((badBodyParts * 2) / (moveCount * 2));
                moveRoad = Math.ceil((badBodyParts * 1) / (moveCount * 2));
                moveSwamp = Math.ceil((badBodyParts * 10) / (moveCount * 2));

                if (carryCount > 0) {
                    movePlainCarry = Math.ceil(((badBodyParts - carryCount) * 2) / (moveCount * 2));
                    moveRoadCarry = Math.ceil(((badBodyParts - carryCount) * 1) / (moveCount * 2));
                    moveSwampCarry = Math.ceil(((badBodyParts - carryCount) * 5) / (moveCount * 2));
                }
            }
           
            if (movePlain < 1) movePlain = 1;
            if (moveRoad < 1) moveRoad = 1;
            if (moveSwamp < 1) moveSwamp = 1

            result = [];
            result.push("[" + body.toString().toUpperCase() + "]\n\n");
            result.push("<table border=\"1\">");
            result.push('<caption>Крип\n\n</caption>');
            result.push("<tr>");
            result.push("<th> ТЕЛО </th>");
            result.push("<th> ВНЕШНИЙ ВИД </th>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>");
            for (var i = 0; i < bodyCount; i++) {
                if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50) result.push(" \n")
                if (body[i] == "move") result.push(svgBody('#A9B7C6'))
                if (body[i] == "carry") result.push(svgBody('#777777'))
                if (body[i] == "work") result.push(svgBody('#FFE56D'))
                if (body[i] == "attack") result.push(svgBody('#F93842'))
                if (body[i] == "ranged_attack") result.push(svgBody('#5D80B2'))
                if (body[i] == "heal") result.push(svgBody('#65FD62'))
                if (body[i] == "tough") result.push(svgBody('#FFFFFF'))
                if (body[i] == "claim") result.push(svgBody('#B99CFB'))
            }
            result.push("</td>");
            result.push("<td>  \n " + svgCreep() + " \n\n</td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>Время создания крипа </td>");
            result.push('<td> ' + time + ' tiks </td>');
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>Количество HITS крипа </td>");
            result.push("<td> " + hits + " HITS </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>Общее количество BODY PARTS: </td>");
            result.push("<td> " + bodyCount + " PARTS </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>Время передвижения крипа по PLAIN </td>");
            if (carryCount > 0) result.push('<td> ' + movePlain + ' / ' + movePlainCarry + ' tiks </td>');
            else result.push('<td> ' + movePlain + ' tiks </td>');
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>Время передвижения крипа по ROAD </td>");
            if (carryCount > 0) result.push('<td> ' + moveRoad + ' / ' + moveRoadCarry + ' tiks </td>');
            else result.push('<td> ' + moveRoad + ' tiks </td>');
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>Время передвижения крипа по SWAMP </td>");
            if (carryCount > 0) result.push('<td> ' + moveSwamp + ' / ' + moveSwampCarry + ' tiks </td>');
            else result.push('<td> ' + moveSwamp + ' tiks </td>');
            result.push("</tr>");
            result.push("</table>");
            result.push("\n\n<table border=\"1\">");
            if (badBodyParts > moveCount) result.push('<caption>Характеристики крипа\n<p><font color="#FF0000">Крип будет идти с задержкой\nНеобходимо добавить еще ' + (badBodyParts - moveCount) + ' частей MOVE</font></p></caption>');
            else result.push('<caption>Характеристики крипа\n\n</caption>');
            result.push("<tr>");
            result.push("<th></th>");
            result.push("<th> " + svgBody("#A9B7C6") + " </th>");
            result.push("<th> " + svgBody("#777777") + " </th>");
            result.push("<th> " + svgBody("#FFE56D") + " </th>");
            result.push("<th> " + svgBody("#F93842") + " </th>");
            result.push("<th> " + svgBody("#5D80B2") + " </th>");
            result.push("<th> " + svgBody("#65FD62") + " </th>");
            result.push("<th> " + svgBody("#FFFFFF") + " </th>");
            result.push("<th> " + svgBody("#B99CFB") + " </th>");
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
            result.push("<tr>");
            result.push("<td>ATTACK per tick </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>" + damageAttack + "</td>");
            result.push("<td>" + damageRangedAttack + "</td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>HEAL per tick (short)</td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>" + healShort + "</td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("</tr>");
            result.push("<tr>");
            result.push("<td>HEAL per tick (distance)</td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>  </td>");
            result.push("<td>" + healDistance + "</td>");
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