import { MoviesPage } from "./model";
import { writeFileSync, readFileSync } from "fs";
import type { Movie, MovieDetails, MovieList } from "./movie-type";

export abstract class Movies {
  static async getMovies({ page = "1" }: MoviesPage.getMovies) {
    try {
      const res = await fetch(`${Bun.env.API}/movies?page=${page}`, {
        // verbose: true,
      });
      if (!res.ok) return MoviesPage.moviesNotFound;
      const listData = await res.json();
      //   console.log(listData);
      return listData.data as MovieList[];
      // return listData.data.map((item) => ({
      //   categories: item.categories,

      //   id: item.id,
      //   is_adult: item.is_adult,
      //   poster: item.poster,
      //   rating: item.rating,
      //   resolution: item.resolution,
      //   slug: item.slug,
      //   title: item.title,
      //   type: item.type,
      //   year: item.year,
      //   decription: item.details?.overview,
      //   director: item.details?.directors,
      // }));
      // const file = readFileSync("./cm-movies.json", {
      //   encoding: "utf-8",
      // });

      // const pageByMovies = JSON.parse(file) as Movie[];
      // console.log(pageByMovies[0].title);
      // return pageByMovies.slice(Number(page) - 1, 20).map((item) => ({
      //   categories: item.categories,

      //   id: item.id,
      //   is_adult: item.is_adult,
      //   poster: item.poster,
      //   rating: item.rating,
      //   resolution: item.resolution,
      //   slug: item.slug,
      //   title: item.title,
      //   type: item.type,
      //   year: item.year,
      //   decription: item.details?.overview,
      //   director: item.details?.directors,
      // }));
    } catch (err) {
      console.log(err);
      return MoviesPage.getMoviesInvalid;
    }
  }
  static async getMovie({ slug }: MoviesPage.getMovieByName) {
    try {
      const res = await fetch(`${Bun.env.API}/movies/${slug}`, {
        // verbose: true,
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
      // const file = readFileSync("./cm-movies.json", {
      //   encoding: "utf-8",
      // });

      // const allMovies = JSON.parse(file) as Movie[];
      // const validMovie = allMovies.find((movie) => movie.slug === slug);
      // if (!validMovie) return MoviesPage.moviesNotFound;
      // return {
      //   categories: validMovie.categories,

      //   id: validMovie.id,
      //   is_adult: validMovie.is_adult,
      //   poster: validMovie.poster,
      //   rating: validMovie.rating,
      //   resolution: validMovie.resolution,
      //   slug: validMovie.slug,
      //   title: validMovie.title,
      //   type: validMovie.type,
      //   year: validMovie.year,
      //   decription: validMovie.details?.overview,
      //   director: validMovie.details?.directors,
      // };
    } catch (err) {
      console.log(err);
      return MoviesPage.getMoviesInvalid;
    }
  }
}
