import Layout from "@/components/layout";
import { MovieCard } from "@/components/movie-card";
import reactLogo from "@/react.svg";
import { useQuery } from "@tanstack/react-query";
import { getMoviesByPage } from "../api/useGetMovies";
import { Link } from "react-router";
import type { Movie } from "@/modules/movies/movie-type";

export function MoviesScreen() {
  const page = 1;
  const { data, isFetched, isPending, isLoading, isError } = useQuery({
    queryKey: ["movies", page],
    queryFn: async () => await getMoviesByPage({ page }),
    retry: 1,
  });

  if (isLoading && isPending)
    return (
      <img
        src={reactLogo}
        alt="React Logo"
        className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
      />
    );

  if (isError) return <div>Error</div>;

  return (
    <Layout>
      <div className="container bg-chart-2 mx-auto p-8 text-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {data.map((movie: Movie) => (
            <Link to={`/${movie.slug}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                year={movie.year}
                poster={movie.poster}
                genre={[]}
                isLiked
                isSaved
                rating={movie.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MoviesScreen;
