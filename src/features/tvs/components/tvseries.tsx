import { MovieCard } from "@/components/movie-card";
import reactLogo from "@/react.svg";
import { Link } from "react-router";
import { useGetTvSeries } from "../api/use-get-tvseries";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Loading from "@/components/loading";
import { usePagination } from "@/stores/usePagination";

export function TvseriesScreen() {
  const { seriePage, setSeriePage } = usePagination();
  const {
    data,
    isFetched,
    isPending,
    isLoading,
    isError,
    isPlaceholderData,
    isFetching,
  } = useGetTvSeries({
    page: seriePage,
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
  if (!data) return null;
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {data.map((movie) => (
          <Link to={`/tv-series/${movie.slug}`} key={movie.id}>
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
        <span>Current Page: {seriePage}</span>
        <div className="flex justify-center items-center gap-2">
          <Button
            className="transition-all duration-400 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] hover:[box-shadow:0_0_20px_rgba(167,18,77,0.6),0_0_40px_rgba(0,200,255,0.4)]"
            variant="outline"
            onClick={() => setSeriePage(seriePage - 1)}
            disabled={seriePage === 1}
          >
            Previous Page
          </Button>
          <Button
            className="transition-all duration-400 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] hover:[box-shadow:0_0_20px_rgba(167,18,77,0.6),0_0_40px_rgba(0,200,255,0.4)]"
            variant="outline"
            onClick={() => {
              if (!isPlaceholderData) {
                setSeriePage(seriePage + 1);
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
  );
}

export default TvseriesScreen;
