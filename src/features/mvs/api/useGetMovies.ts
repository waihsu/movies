import type { MovieDetails, MovieList } from "@/modules/movies/movie-type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetMovies = ({ page }: { page: number }) => {
  return useQuery({
    queryKey: ["movies", page],
    queryFn: async () => await getMoviesByPage({ page }),
    placeholderData: keepPreviousData,
  });
};

async function getMoviesByPage({ page }: { page: number }) {
  const resp = await fetch(`/api/v1/movies?page=${page}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data as MovieList[];
}
