import { FavoriteManager } from "./FavoriteManager";

export class BooksFavoriteManager extends FavoriteManager{

    public addFavorite(item: string): void {
        if(!this.favorites.includes(item)){
            this.favorites.unshift(item);
            console.log(`Livro "${item}" adicionado ao inicio da lista.`);
        } else{
            console.log(`Livro "${item}" já está na lista.`);
        }
    }

    public getFavorites(): string[] {
        return this.favorites;
    }
}