
import {
  getMovies,
  getFeaturedMovie,
  getPopularMovies,
} from "../../src/services/movieService";

import { movies } from "../../src/data/movies";

describe("movieService", () => {
  describe("getMovies", () => {
    it("deve retornar o catálogo de filmes", () => {
      expect(getMovies()).toEqual(movies);
    });

    it("deve retornar os 18 filmes cadastrados", () => {
      expect(getMovies()).toHaveLength(18);
    });

    it("deve retornar a lista original do catálogo", () => {
      expect(getMovies()).toBe(movies);
    });
  });

  describe("getFeaturedMovie", () => {
    it("deve retornar o primeiro filme do catálogo", () => {
      expect(getFeaturedMovie()).toEqual(movies[0]);
    });

    it("deve retornar Interestelar como filme em destaque", () => {
      expect(getFeaturedMovie()?.title).toBe("Interestelar");
    });
  });

  describe("getPopularMovies", () => {
    it("deve retornar todos os filmes", () => {
      expect(getPopularMovies()).toHaveLength(movies.length);
    });

    it("deve ordenar os filmes pela maior avaliação", () => {
      const popularMovies = getPopularMovies();

      for (let i = 0; i < popularMovies.length - 1; i++) {
        expect(popularMovies[i].rating).toBeGreaterThanOrEqual(
          popularMovies[i + 1].rating
        );
      }
    });

    it("deve colocar Batman em primeiro lugar", () => {
      expect(getPopularMovies()[0].title).toBe(
        "Batman: O Cavaleiro das Trevas"
      );
    });

    it("não deve modificar a lista original", () => {
      const originalMovies = [...movies];

      getPopularMovies();

      expect(movies).toEqual(originalMovies);
    });

    it("deve retornar uma nova lista", () => {
      expect(getPopularMovies()).not.toBe(movies);
    });
  });

  describe("integridade dos filmes", () => {
    it.each(movies)(
      "deve validar os dados do filme $title",
      (movie) => {
        expect(movie.id).toBeTruthy();
        expect(movie.title).toBeTruthy();
        expect(movie.year).toEqual(expect.any(Number));
        expect(movie.rating).toEqual(expect.any(Number));
        expect(movie.genre).toBeTruthy();
        expect(movie.synopsis).toBeTruthy();
        expect(movie.poster).toMatch(/^https?:\/\//);
        expect(movie.rating).toBeGreaterThanOrEqual(0);
        expect(movie.rating).toBeLessThanOrEqual(10);
      }
    );
  });
});
