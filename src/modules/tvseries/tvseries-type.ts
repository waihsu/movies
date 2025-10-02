// media-types.ts

/** allowed top-level media kinds */
export type MediaType = "tv-show" | "movie" | "miniseries" | string;

/** Representation of a single media item returned by your API */
export interface TvSeries {
  id: number;
  title: string;
  slug: string;
  year: string; // kept as string to match your payload ("2025"), change to number if you prefer
  poster: string | null; // url or null
  rating: string | number | null; // API sometimes returns "8.2" (string) or numeric; accept both
  resolution: string | null; // e.g. "1080p", or null if unknown
  is_adult: 0 | 1; // numeric flag in your JSON
  categories: string[]; // empty array in your sample; could be populated with category slugs/names
  seasons?: number | null; // optional because movies won't have seasons
  type: MediaType;
}

export interface SeriesDownloadLink {
  id: number;
  tvshow_episode_id: number;
  server_name_id: number;
  server_name: string;
  url: string;
  size: string;
  quality_id: number;
  quality: string;
  resolution_id: number;
  resolution: string;
  viewable: number;
  stream_id: number | null;
}

export interface Episode {
  id: number;
  tvshow_id: number;
  tvshow_season_id: number;
  episode_number: number;
  name: string;
  poster: string;
  air_date: string;
  tvshow_download_links: SeriesDownloadLink[];
}

export interface Season {
  id: number;
  tvshow_id: number;
  season_number: number;
  name: string;
  poster: string;
  air_date: string;
  episodes: Episode[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface Director {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  tmdb_genre_id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface SeriesDetails {
  id: number;
  title: string;
  slug: string;
  year: number;
  poster: string;
  overview: string;
  tmdb_id: number;
  imdb_id: string;
  release_date: string;
  runtime: number;
  rating: number;
  vote_count: number;
  backdrop: string;
  directors: Director[];
  casts: Cast[];
  categories: Category[];
  tags: Tag[];
  views: number;
  tvshow_status: string;
  tvshow_type: string;
  type: string;
  is_bookmark: number;
  bookmark_id: number | null;
  shareable_link: string;
  is_adult: number;
  seasons: Season[];
}
