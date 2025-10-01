import { MoviesPage } from "./model";
import { writeFileSync, readFileSync } from "fs";
import type { Movie, MovieDetails, MovieList } from "./movie-type";

export abstract class Movies {
  static async getMovies({ page }: MoviesPage.getMovies) {
    try {
      console.log({ page });
      const res = await fetch(`${Bun.env.API}/movies?page=${page}`, {
        verbose: true,
      });
      if (!res.ok) return MoviesPage.moviesNotFound;
      const listData = await res.json();
      //   console.log(listData);
      return listData.data as MovieList[];
    } catch (err) {
      console.log(err);
      return MoviesPage.getMoviesInvalid;
    }
  }
  static async getMovie({ slug }: MoviesPage.getMovieByName) {
    console.log({ slug });
    try {
      const res = await fetch(`${Bun.env.API}/movies/${slug}`, {
        verbose: true,
      });
      if (!res.ok) return MoviesPage.getMoviesInvalid;
      const movieDataJson = await res.json();
      const movieData = movieDataJson.data as MovieDetails;
      const movie = {
        id: movieData.id,
        title: movieData.title,
        slug: movieData.slug,
        year: movieData.year,
        poster: movieData.poster,
        overview: movieData.overview,
        original_title: movieData.original_title,
        tmdb_id: movieData.tmdb_id,
        imdb_id: movieData.imdb_id,
        release_date: movieData.release_date,
        runtime: movieData.runtime,
        rating: movieData.rating,
        vote_count: movieData.vote_count,
        backdrop_path: movieData.backdrop_path,
        directors: movieData.directors,
        tagline: movieData.tagline,
        casts: movieData.casts,
        categories: movieData.categories,
        tags: movieData.tags,
        resolution: movieData.resolution,
        views: movieData.views,
        is_adult: movieData.is_adult,
        type: movieData.type,
        is_bookmark: movieData.is_bookmark,
        bookmark_id: movieData.bookmark_id,
        shareable_link: movieData.shareable_link,
        movie_download_links: movieData.movie_download_links,
      };
      return movie;
    } catch (err) {
      console.log(err);
      return MoviesPage.getMoviesInvalid;
    }
  }
}
