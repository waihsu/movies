import { MovieCard } from "@/components/movie-card";
import { Play, Sparkles, Film, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import HeroSection from "./hero-section";
import { useGetMovies } from "@/features/mvs/api/useGetMovies";
import { reactLogo } from "@/lib/logoAssets";
import type { Movie } from "@/modules/movies/movie-type";
import { Link } from "react-router";

export default function Home() {
  const page = 1;
  const { data, isFetched, isPending, isLoading, isError } = useGetMovies({
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

  return (
    <Layout>
      <main className="min-h-screen gradient-bg">
        <HeroSection />

        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Trending Now
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {data.slice(0, 5).map((movie: Movie) => (
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
          </div>
        </section>
      </main>
    </Layout>
  );
}
