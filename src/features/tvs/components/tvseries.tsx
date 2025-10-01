import Layout from "@/components/layout";
import { MovieCard } from "@/components/movie-card";
import reactLogo from "@/react.svg";
import { Link } from "react-router";
import { useGetTvSeries } from "../api/use-get-tvseries";
import { useState } from "react";

export function TvseriesScreen() {
  const [page, setPage] = useState<number>(1);
  const { data, isFetched, isPending, isLoading, isError } = useGetTvSeries({
    page,
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
    <Layout>
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
      </div>
    </Layout>
  );
}

export default TvseriesScreen;
