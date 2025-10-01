import type { MovieList } from "@/modules/movies/movie-type";

export async function getMoviesByPage({ page }: { page: number }) {
  const resp = await fetch(`/api/v1/movies?page=${page}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data as MovieList[];
}

export async function getMovieDetails({ slug }: { slug: string }) {
  const resp = await fetch(`/api/v1/movies/${slug}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data;
}
