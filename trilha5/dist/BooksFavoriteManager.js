"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksFavoriteManager = void 0;
const FavoriteManager_1 = require("./FavoriteManager");
class BooksFavoriteManager extends FavoriteManager_1.FavoriteManager {
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item);
            console.log(`Livro "${item}" adicionado ao inicio da lista.`);
        }
        else {
            console.log(`Livro "${item}" já está na lista.`);
        }
    }
    getFavorites() {
        return this.favorites;
    }
}
exports.BooksFavoriteManager = BooksFavoriteManager;
