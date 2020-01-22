const Terminal = {
    control(room) {
        if (room.controller && room.controller.my) {
            if (room.terminal) {
                if (room.terminal.store[RESOURCE_ENERGY] > 20000) {
                    const orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_ENERGY && order.type == ORDER_BUY && order.price > 0.03 &&
                        Game.market.calcTransactionCost(10000, room.name, order.roomName) < 10000);
                    Game.market.deal(orders[0].id, 10000, room.name);
                }
                if (room.terminal.store[RESOURCE_HYDROGEN] > 3000 && room.terminal.store[RESOURCE_ENERGY] >= 5000) {
                    const orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN && order.type == ORDER_BUY && order.price > 0.03 &&
                        Game.market.calcTransactionCost(3000, room.name, order.roomName) < 5000);
                    Game.market.deal(orders[0].id, 3000, room.name);
                }
            }
        }
    }
}
module.exports = Terminal;