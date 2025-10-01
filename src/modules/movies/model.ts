import { t } from "elysia";

export namespace MoviesPage {
  export const getMovies = t.Object({
    page: t.String(),
  });
  export type getMovies = typeof getMovies.static;
  export const getMovieByName = t.Object({
    slug: t.String(),
  });
  export type getMovieByName = typeof getMovieByName.static;

  export const getMoviesResponse = t.Any();

  export const getMoviesInvalid = t.Literal("❌ Failed to fetch movies");

  export const moviesNotFound = t.Literal("❌ Movies not found");

  export type moviesNotFound = typeof moviesNotFound.static;

  export type getMoivesInvalid = typeof getMoviesInvalid.static;
}
