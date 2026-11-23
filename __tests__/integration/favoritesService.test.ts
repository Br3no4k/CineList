
const mockFavorites: string[] = [];

jest.mock("../../src/database/database", () => ({
  database: {
    getAllSync: jest.fn(() =>
      mockFavorites.map((movie_id) => ({ movie_id }))
    ),

    runSync: jest.fn((query: string, params: string[]) => {
      const movieId = params[0];

      if (query.includes("INSERT")) {
        if (!mockFavorites.includes(movieId)) {
          mockFavorites.push(movieId);
        }
      }

      if (query.includes("DELETE")) {
        const index = mockFavorites.indexOf(movieId);

        if (index !== -1) {
          mockFavorites.splice(index, 1);
        }
      }
    }),

    getFirstSync: jest.fn((query: string, params: string[]) => {
      const movieId = params[0];

      if (query.includes("SELECT")) {
        return mockFavorites.includes(movieId)
          ? { movie_id: movieId }
          : null;
      }

      return null;
    }),
  },
}));

import {
  getFavoriteIds,
  addFavorite,
  removeFavorite,
  checkFavorite,
} from "../../src/services/favoritesService";

import { database } from "../../src/database/database";

describe("Integração do serviço de favoritos", () => {
  beforeEach(() => {
    mockFavorites.length = 0;
    jest.clearAllMocks();
  });

  it("deve retornar uma lista vazia quando não existem favoritos", () => {
    expect(getFavoriteIds()).toEqual([]);
  });

  it("deve adicionar um filme aos favoritos", () => {
    addFavorite("1");

    expect(getFavoriteIds()).toContain("1");
  });

  it("deve consultar os favoritos no banco de dados", () => {
    getFavoriteIds();

    expect(database.getAllSync).toHaveBeenCalledWith(
      "SELECT movie_id FROM favorites"
    );
  });

  it("deve utilizar INSERT para adicionar um favorito", () => {
    addFavorite("1");

    expect(database.runSync).toHaveBeenCalledWith(
      "INSERT OR IGNORE INTO favorites (movie_id) VALUES (?)",
      ["1"]
    );
  });

  it("não deve duplicar um filme favorito", () => {
    addFavorite("1");
    addFavorite("1");

    expect(getFavoriteIds()).toEqual(["1"]);
  });

  it("deve permitir adicionar vários filmes", () => {
    addFavorite("1");
    addFavorite("2");
    addFavorite("3");

    expect(getFavoriteIds()).toEqual(["1", "2", "3"]);
  });

  it("deve remover um filme dos favoritos", () => {
    addFavorite("1");
    removeFavorite("1");

    expect(getFavoriteIds()).not.toContain("1");
  });

  it("deve utilizar DELETE para remover um favorito", () => {
    removeFavorite("1");

    expect(database.runSync).toHaveBeenCalledWith(
      "DELETE FROM favorites WHERE movie_id = ?",
      ["1"]
    );
  });

  it("deve retornar true quando o filme está favoritado", () => {
    addFavorite("1");

    expect(checkFavorite("1")).toBe(true);
  });

  it("deve retornar false quando o filme não está favoritado", () => {
    expect(checkFavorite("1")).toBe(false);
  });
});
