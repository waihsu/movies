type Category = {
  id: number;
  tmdb_genre_id: number;
  name: string;
};

type Tag = {
  id: number;
  name: string;
};

type Cast = {
  name: string;
  profile_path: string;
};

type MovieDownloadLink = {
  id: number;
  movie_id: number;
  server_name_id: number;
  server_name: string;
  url: string;
  size: string;
  quality_id: number;
  quality: string;
  resolution_id: number;
  resolution: string;
  viewable: string;
  stream_id: string | null;
};

export type MovieDetails = {
  id: number;
  title: string;
  slug: string;
  year: string; // could be number if always numeric
  poster: string;
  overview: string;
  original_title: string;
  tmdb_id: string;
  imdb_id: string;
  release_date: string;
  runtime: string;
  rating: string;
  vote_count: string;
  backdrop_path: string;
  directors: string[];
  tagline: string | null;
  casts: Cast[];
  categories: Category[];
  tags: Tag[];
  resolution: string | null;
  views: number;
  is_adult: number; // could normalize to boolean
  type: string;
  is_bookmark: boolean | null;
  bookmark_id: number;
  shareable_link: string | null;
  movie_download_links: MovieDownloadLink[];
};

export interface Movie {
  id: number;
  title: string;
  slug: string;
  year: string;
  poster: string;
  rating: string;
  resolution: string | null;
  is_adult: number;
  categories: Category[];
  type: string;
  details?: MovieDetails;
  director: string[];
}

export interface MovieList {
  id: number;
  title: string;
  slug: string;
  year: string;
  poster: string;
  rating: string;
  resolution: string;
  is_adult: number;
  categories: Category[];
  type: "movie" | "series" | string;
}
