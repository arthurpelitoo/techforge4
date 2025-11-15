export abstract class FavoriteManager {

    protected favorites: string[] = [];

    public abstract addFavorite(item: string): void;
    public abstract getFavorites(): string[];

}