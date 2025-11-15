import { Inventory } from "./Inventory";

export class WarehouseInventory extends Inventory{

    public addItem(item: string, quantity: number): void {
        
        if(this.items[item]){
            this.items[item] += quantity;
        } else{
            this.items[item] = quantity;
        }
        console.log('[Warehouse] Adicionado ' + quantity + ' de ' + item + '. Total: ' + this.items[item]);

    }

    public removeItem(item: string): void {
        if(this.items[item]){
            delete this.items[item];
            console.log('[Warehouse] Item ' + item  + ' removido do inventario.');
        } else{
            console.log('[Warehouse] Item ' + item  + ' não existe no inventario para remoção.');
        }
    }

    public getInventory(): Record<string, number> {
        return this.items;
    }
}