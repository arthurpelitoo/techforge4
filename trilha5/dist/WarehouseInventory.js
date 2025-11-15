"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseInventory = void 0;
const Inventory_1 = require("./Inventory");
class WarehouseInventory extends Inventory_1.Inventory {
    addItem(item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
        console.log('[Warehouse] Adicionado ' + quantity + ' de ' + item + '. Total: ' + this.items[item]);
    }
    removeItem(item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log('[Warehouse] Item ' + item + ' removido do inventario.');
        }
        else {
            console.log('[Warehouse] Item ' + item + ' não existe no inventario para remoção.');
        }
    }
    getInventory() {
        return this.items;
    }
}
exports.WarehouseInventory = WarehouseInventory;
