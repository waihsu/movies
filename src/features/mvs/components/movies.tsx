import Layout from "@/components/layout";
import { MovieCard } from "@/components/movie-card";
import reactLogo from "@/react.svg";
import { Link } from "react-router";
import type { Movie } from "@/modules/movies/movie-type";
import { useGetMovies } from "../api/useGetMovies";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Loading from "@/components/loading";
import { usePagination } from "@/stores/usePagination";

export function MoviesScreen() {
  const { moviePage, setMoviePage } = usePagination();
  const {
    isPending,
    isError,
    error,
    data,
    isFetching,
    isPlaceholderData,
    isLoading,
  } = useGetMovies({
    page: moviePage,
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
      <div className="container mx-auto p-8 text-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {data.map((movie: Movie) => (
            <Link to={`/movies/${movie.slug}`} key={movie.id}>
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

        <div className="glass-effect max-w-md mx-auto my-3 p-4 rounded-2xl text-center">
          <span>Current Page: {moviePage}</span>
          <div className="flex justify-center items-center gap-2">
            <Button
              className="transition-all duration-400 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] hover:[box-shadow:0_0_20px_rgba(167,18,77,0.6),0_0_40px_rgba(0,200,255,0.4)]"
              variant="outline"
              onClick={() => setMoviePage(moviePage - 1)}
              disabled={moviePage === 1}
            >
              Previous Page
            </Button>
            <Button
              className="transition-all duration-400 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] hover:[box-shadow:0_0_20px_rgba(167,18,77,0.6),0_0_40px_rgba(0,200,255,0.4)]"
              variant="outline"
              onClick={() => {
                if (!isPlaceholderData) {
                  setMoviePage(moviePage + 1);
                }
              }}
              // Disable the Next Page Button until we know a next page is available
              disabled={isPlaceholderData}
            >
              Next Page
            </Button>
            {isFetching ? <Loading height={10} /> : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MoviesScreen;
