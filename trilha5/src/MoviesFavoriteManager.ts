import { FavoriteManager } from "./FavoriteManager";

export class MoviesFavoriteManager extends FavoriteManager{

    public addFavorite(item: string): void {
        if(!this.favorites.includes(item)){
            this.favorites.push(item);
            console.log(`Filme "${item}" adicionado.`);
        } else{
            console.log(`Filme "${item}" já está na lista.`);
        }
    }

    public getFavorites(): string[] {
        return [...this.favorites].sort((a,b) => a.localeCompare(b));
    }
}