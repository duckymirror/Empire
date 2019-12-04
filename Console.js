function params() {
    global.help = function (com) {
        help = []
        if (!com) {
            help.push("enable_ui()     - Включает интерфейс")
            help.push("disable_ui()    - Выключает интерфейс")
            help.push("info(roomNumber)  - Выводит информацио о комнате")
            help.push("  * roomNumber    - Номер комнаты.")
            help.push("claim(roomName) - Ставит задачу по захвату указанной комнаты")
            help.push("  * roomName    - Имя комнаты.")
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
    global.enable_ui = function () {
        Memory.UI = true;
        return "UI теперь включен"
    };
    global.disable_ui = function() {
        Memory.UI = false;
        return "UI теперь выключен"
    };
    global.info = function (roomNumber) {
        info = [];
        info.push("------------------------")

        if (roomNumber == 1) {
            info.push("Имя комнаты: " + Memory.room.One.Name)
            info.push("Уровень контроллера: " + Memory.room.One.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.One.Controller.progress);
        } else if (roomNumber == 2) {
            info.push("Имя комнаты: " + Memory.room.Two.Name)
            info.push("Уровень контроллера: " + Memory.room.Two.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Two.Controller.progress);
        } else if (roomNumber == 3) {
            info.push("Имя комнаты: " + Memory.room.Three.Name)
            info.push("Уровень контроллера: " + Memory.room.Three.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Three.Controller.progress);
        } else if (roomNumber == 4) {
            info.push("Имя комнаты: " + Memory.room.Four.Name)
            info.push("Уровень контроллера: " + Memory.room.Four.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Four.Controller.progress);
        } else if (roomNumber == 5) {
            info.push("Имя комнаты: " + Memory.room.Five.Name)
            info.push("Уровень контроллера: " + Memory.room.Five.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Five.Controller.progress);
        } else if (roomNumber == "All") {
            info.push("Имя комнаты: " + Memory.room.One.Name)
            info.push("Уровень контроллера: " + Memory.room.One.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.One.Controller.progress);
            info.push("------------------------")
            info.push("Имя комнаты: " + Memory.room.Two.Name)
            info.push("Уровень контроллера: " + Memory.room.Two.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Two.Controller.progress);
            info.push("------------------------")
            info.push("Имя комнаты: " + Memory.room.Three.Name)
            info.push("Уровень контроллера: " + Memory.room.Three.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Three.Controller.progress);
            info.push("------------------------")
            info.push("Имя комнаты: " + Memory.room.Four.Name)
            info.push("Уровень контроллера: " + Memory.room.Four.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Four.Controller.progress);
            info.push("------------------------")
            info.push("Имя комнаты: " + Memory.room.Five.Name)
            info.push("Уровень контроллера: " + Memory.room.Five.Controller.level);
            info.push("Прогресс контроллера: " + Memory.room.Five.Controller.progress);
        } else {
            return "Номер комнаты либо не указан, либо указан неверно"
        }

        info.push("------------------------")
        info = info.join("\n");

        return info
    }
}

var ConsoleSetting = {
    setting(console) {

        params();

    }
}

module.exports = ConsoleSetting;