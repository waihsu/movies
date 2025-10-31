import { reactLogo } from "@/lib/logoAssets";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronDown, Download, Eye, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import BackButton from "@/components/back-button";
import { useGetTvDetails } from "../api/use-get-tvdetails";
import { Spinner } from "@/components/ui/spinner";

export default function TvseriesDetails() {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: seriesData,
    isFetched,
    isPending,
    isLoading,
  } = useGetTvDetails({ slug });
  if (isLoading && isPending) return <Spinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-peach-50">
      <div className="p-3">
        <BackButton link="/tv-series" title="Tv Series" />
      </div>

      {/* Hero Section with Backdrop */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${seriesData.backdrop_path})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-blue-50/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-transparent to-pink-50/90" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-12">
          <div className="flex gap-8 items-end">
            {/* Poster */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <img
                src={seriesData.poster || "/placeholder.svg"}
                alt={seriesData.title}
                className="relative w-64 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Title and Basic Info */}
            <div className="flex-1 pb-4">
              <Badge className="mb-4 bg-purple-600/90 backdrop-blur-sm text-white border-0">
                {seriesData.tvshow_status}
              </Badge>
              <h1 className="text-6xl font-bold text-gray-900 mb-2 font-serif">
                {seriesData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {seriesData.original_title}
              </p>

              <div className="flex items-center gap-6 text-gray-700">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{seriesData.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{seriesData.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>{seriesData.views.toLocaleString()} views</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {seriesData.overview}
              </p>
            </div>

            {/* Cast */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Cast
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {seriesData.casts &&
                  seriesData.casts.map((cast, index) => (
                    <div key={index} className="group">
                      <div className="relative overflow-hidden rounded-2xl mb-3">
                        <img
                          src={cast.profile_path || "/placeholder.svg"}
                          alt={cast.name}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 text-center">
                        {cast.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Seasons & Episodes */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Episodes
              </h2>

              {seriesData.seasons.map((season) => (
                <div key={season.id} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {season.name}
                  </h3>

                  {season.episodes.map((episode) => (
                    <Collapsible key={episode.id}>
                      <div className="backdrop-blur-sm bg-white/40 rounded-2xl border border-white/30 overflow-hidden hover:shadow-md transition-shadow">
                        <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-white/20 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-24 h-16 rounded-lg overflow-hidden bg-gray-200">
                              <img
                                src={episode.poster || "/placeholder.svg"}
                                alt={`Episode ${episode.episode_number}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-gray-900">
                                Episode {episode.episode_number}
                                {episode.name && `: ${episode.name}`}
                              </p>
                              <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                                <Calendar className="w-4 h-4" />
                                {episode.air_date}
                              </p>
                            </div>
                          </div>
                          <ChevronDown className="w-5 h-5 text-gray-600 transition-transform ui-expanded:rotate-180" />
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <div className="px-6 pb-6 pt-2 space-y-3">
                            <p className="text-sm font-semibold text-gray-700 mb-3">
                              Download Links:
                            </p>

                            {/* Group by resolution */}
                            {["1080p", "720p"].map((resolution) => {
                              const links =
                                episode.tvshow_download_links.filter(
                                  (link) => link.resolution === resolution
                                );
                              if (links.length === 0) return null;

                              return (
                                <div key={resolution} className="space-y-2">
                                  <p className="text-xs font-medium text-gray-600 uppercase">
                                    {resolution}
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {links.map((link) => (
                                      <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                                      >
                                        <Download className="w-4 h-4" />
                                        {link.server_name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Series Info */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">
                Series Info
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-semibold text-gray-900">
                    {seriesData.tvshow_status}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Type</p>
                  <p className="font-semibold text-gray-900">
                    {seriesData.tvshow_type}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">First Air Date</p>
                  <p className="font-semibold text-gray-900">
                    {seriesData.release_date}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">TMDB ID</p>
                  <p className="font-semibold text-gray-900">
                    {seriesData.tmdb_id}
                  </p>
                </div>
              </div>
            </div>

            {/* Genres */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">
                Genres
              </h3>
              <div className="flex flex-wrap gap-2">
                {seriesData.categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {seriesData.tags.map((tag) => (
                  <Badge
                    key={tag.id}
                    variant="outline"
                    className="border-purple-300 text-purple-700"
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
