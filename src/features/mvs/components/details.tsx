import Layout from "@/components/layout";
import { Link, useParams } from "react-router";
import { reactLogo } from "@/lib/logoAssets";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Play,
  Bookmark,
  Share2,
  Clock,
  Calendar,
  TrendingUp,
  Award,
  ChevronLeft,
  Eye,
  Download,
  Film,
} from "lucide-react";
import BackButton from "@/components/back-button";
import { useGetMovieDetails } from "../api/useGetMovieDetails";

export default function MovieDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [saved, setSaved] = useState(false);

  const [selectedResolution, setSelectedResolution] = useState<string>("all");

  const { data, isFetched, isPending, isLoading } = useGetMovieDetails({
    slug,
  });

  if (isLoading && isPending)
    return (
      <img
        src={reactLogo}
        alt="React Logo"
        className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
      />
    );

  const resolutions = [
    "all",
    ...Array.from(
      new Set(data.movie_download_links.map((link) => link.resolution))
    ),
  ];
  const filteredLinks =
    selectedResolution === "all"
      ? data.movie_download_links
      : data.movie_download_links.filter(
          (link) => link.resolution === selectedResolution
        );

  console.log(data);
  if (!data) return null;
  return (
    <Layout>
      <div className=" min-h-screen relative">
        {/* Back button */}
        <div className="  p-3">
          <BackButton link="/movies" title="Movies" />
        </div>

        {/* Hero section with backdrop */}
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${data.backdrop_path})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-blue-50/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-transparent to-pink-50/90" />

          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-12">
            <div className="flex gap-8 items-end">
              {/* Poster */}
              <div className="relative group hidden sm:flex">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <img
                  src={data.poster || "/placeholder.svg"}
                  alt={data.title}
                  className="relative w-64 h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Title and Basic Info */}
              <div className="flex-1 pb-4">
                <Badge className="mb-4 bg-purple-600/90 backdrop-blur-sm text-white border-0">
                  {data.type}
                </Badge>
                <h1 className="text-6xl font-bold text-gray-900 mb-2 font-serif">
                  {data.title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {data.original_title}
                </p>

                <div className="flex items-center gap-6 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{data.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{data.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>{data.views.toLocaleString()} views</span>
                  </div>
                </div>

                {/* <div className="flex gap-3 mt-6">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 gap-2">
                    <Play className="w-5 h-5" />
                    Watch Now
                  </Button>
                  <Button
                    variant="outline"
                    className="backdrop-blur-sm bg-white/50 border-gray-300"
                  >
                    Add to Watchlist
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}

        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <Card className="glass-card border-white/30 p-8 space-y-6">
                <h2 className="font-serif text-4xl font-bold text-foreground">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {data.overview}
                </p>
              </Card>

              <Card className="glass-card border-white/30 p-8 space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Download className="w-8 h-8 text-secondary" />
                    <h2 className="font-serif text-4xl font-bold text-foreground">
                      Download Links
                    </h2>
                  </div>
                  {/* Resolution filter */}
                  <div className="flex items-center gap-2">
                    {resolutions.map((res) => (
                      <Button
                        key={res}
                        variant={
                          selectedResolution === res ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedResolution(res)}
                        className={
                          selectedResolution === res
                            ? "bg-secondary text-white hover:bg-secondary/90"
                            : "glass-card border-white/30 hover:scale-105 transition-all"
                        }
                      >
                        {res === "all" ? "All" : res}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {filteredLinks.map((link) => (
                    <div
                      key={link.id}
                      className="glass-card border-white/30 p-6 rounded-2xl hover:scale-[1.02] transition-all group"
                    >
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-4">
                          <div className="glass-card p-4 rounded-xl bg-secondary/10">
                            <Film className="w-6 h-6 text-secondary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-semibold text-lg text-foreground">
                                {link.server_name}
                              </h4>
                              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                                {link.viewable}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="font-medium">
                                {link.quality} {link.resolution}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                              <span className="font-medium">{link.size}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          asChild
                          className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white font-semibold transition-all duration-300 group-hover:scale-105 rounded-xl"
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="w-5 h-5 mr-2" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card border-white/30 p-8 space-y-6">
                <h2 className="font-serif text-4xl font-bold text-foreground">
                  Cast
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.casts &&
                    data.casts.map((actor, index) => (
                      <div
                        key={index}
                        className="glass-card border-white/30 p-6 rounded-2xl flex items-center gap-4 hover:scale-105 transition-all"
                      >
                        <img
                          src={
                            actor.profile_path ||
                            "/placeholder.svg?height=80&width=80"
                          }
                          alt={actor.name}
                          className="w-20 h-20 rounded-full object-cover ring-2 ring-secondary/30"
                        />
                        <div>
                          <h4 className="font-semibold text-lg text-foreground">
                            {actor.name}
                          </h4>
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Movie info */}
              <Card className="glass-card border-white/30 p-8 space-y-6">
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  Details
                </h3>
                <Separator className="bg-white/30" />
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Director
                    </p>
                    <p className="font-semibold text-foreground text-lg">
                      {data.directors && data.directors.join(", ")}
                    </p>
                  </div>
                  <Separator className="bg-white/30" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      TMDB ID
                    </p>
                    <p className="font-semibold text-foreground text-lg">
                      {data.tmdb_id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      IMDB ID
                    </p>
                    <p className="font-semibold text-foreground text-lg">
                      {data.imdb_id}
                    </p>
                  </div>
                  <Separator className="bg-white/30" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Views
                    </p>
                    <p className="font-semibold text-foreground text-lg">
                      {data.views.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Available Formats
                    </p>
                    <p className="font-semibold text-foreground text-lg">
                      {Array.from(
                        new Set(
                          data.movie_download_links.map((l) => l.resolution)
                        )
                      ).join(", ")}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Movie poster */}
              <Card className="glass-card border-white/30 overflow-hidden">
                <img
                  src={data.poster || "/placeholder.svg"}
                  alt={data.title}
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
