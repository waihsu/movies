import { MovieCard } from "@/components/movie-card";
import { Play, Sparkles, Film, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import HeroSection from "./hero-section";
import { useGetMovies } from "@/features/mvs/api/useGetMovies";
import { reactLogo } from "@/lib/logoAssets";
import type { Movie, MovieList } from "@/modules/movies/movie-type";
import { Link } from "react-router";
import { useGetTvSeries } from "@/features/tvs/api/use-get-tvseries";
import Loading from "@/components/loading";
import { Card } from "@/components/ui/card";

export default function Home() {
  const page = 1;
  const {
    data: movies,
    isFetched: movisFetched,
    isPending: movisPending,
    isLoading: movisLoading,
    isError: movisError,
  } = useGetMovies({
    page,
  });
  const {
    data: tvseries,
    isFetched: tvisFetched,
    isPending: tvisPending,
    isLoading: tvisLoading,
    isError: tvisError,
    isFetching: tvisFetching,
  } = useGetTvSeries({
    page,
  });

  return (
    <Layout>
      <main className="min-h-screen gradient-bg">
        <HeroSection />

        <section className="px-6 py-20 space-y-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Trending Movies
              </h2>
            </div>

            {movisLoading && movisPending ? (
              <div className="flex justify-center items-center">
                <Loading height={36} />
              </div>
            ) : (
              <>
                {(!movisError || movisFetched) && movies?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {movies.slice(0, 5).map((movie: MovieList) => (
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
                ) : (
                  <div className="flex justify-center items-center">
                    <Card className="flex justify-center items-center max-w-sm p-3 glass-effect">
                      <Loading height={20} />
                      <p>Movie Not Found!</p>
                      <Loading height={20} />
                    </Card>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Trending Series
              </h2>
            </div>

            {tvisLoading && tvisPending ? (
              <div className="flex justify-center items-center">
                <Loading height={36} />
              </div>
            ) : (
              <>
                {(!tvisError || tvisFetched) && tvseries?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {tvseries.slice(0, 5).map((movie: MovieList) => (
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
                ) : (
                  <div className="flex justify-center items-center">
                    <Card className="flex justify-center items-center max-w-sm p-3 glass-effect">
                      <Loading height={20} />
                      <p>Series Not Found!</p>
                      <Loading height={20} />
                    </Card>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
