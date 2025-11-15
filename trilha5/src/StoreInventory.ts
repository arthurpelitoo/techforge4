import { Inventory } from "./Inventory";

const MaxItems = 10;

export class StoreInventory extends Inventory{

    public addItem(item: string, quantity: number): void {
        const currentQuantity = this.items[item] || 0;
        const newTotal = currentQuantity + quantity;
        
        if(newTotal > MaxItems){
           const remainingSpace = MaxItems - currentQuantity;
            
            if (remainingSpace > 0) {
                 this.items[item] = MaxItems;
                 console.log('[Store] Só foi possível adicionar ' + remainingSpace + ' de ' + item + ' (Limite de ' + MaxItems +').');
            } else {
                console.log('[Store] Item '+ item + ' já está no limite de ' + MaxItems + '. Adição de '+ quantity + ' cancelada.');
            }
        } else{
            this.items[item] = newTotal;
            console.log('[Store] Adicionado ' + quantity + ' de ' + item + '. Total: ' + newTotal);
        }
    }

    public removeItem(item: string): void {
        if(this.items[item]){
            delete this.items[item];
            console.log('[Store] Item ' + item  + ' removido do inventario.');
        } else{
            console.log('[Store] Item ' + item  + ' não existe no inventario para remoção.');
        }
    }

    public getInventory(): Record<string, number> {
        return this.items;
    }
}