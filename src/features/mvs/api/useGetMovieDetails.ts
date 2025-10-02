import type { MovieDetails } from "@/modules/movies/movie-type";
import { useQuery } from "@tanstack/react-query";

export const useGetMovieDetails = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ["movie", slug],
    queryFn: async () => await getMovieDetails({ slug }),
  });
};

async function getMovieDetails({ slug }: { slug: string }) {
  const resp = await fetch(`/api/v1/movies/${slug}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data as MovieDetails;
}
