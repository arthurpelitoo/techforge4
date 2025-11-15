

export abstract class Inventory {

    protected items: Record<string, number> = {};

    public abstract addItem(item: string, quantity: number): void

    public abstract removeItem(item: string): void

    public abstract getInventory(): Record<string, number>

}