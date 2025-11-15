"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesFavoriteManager = void 0;
const FavoriteManager_1 = require("./FavoriteManager");
class MoviesFavoriteManager extends FavoriteManager_1.FavoriteManager {
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            console.log(`Filme "${item}" adicionado.`);
        }
        else {
            console.log(`Filme "${item}" já está na lista.`);
        }
    }
    getFavorites() {
        return [...this.favorites].sort((a, b) => a.localeCompare(b));
    }
}
exports.MoviesFavoriteManager = MoviesFavoriteManager;
