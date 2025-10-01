import Test from "@/components/test";
import { MoviesScreen } from "@/features/mvs/components/movies";
import React from "react";
import { Route, Routes } from "react-router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import MovieDetails from "@/features/mvs/components/details";
import TvseriesScreen from "@/features/tvs/components/tvseries";
import TvseriesDetails from "@/features/tvs/components/details";

export default function AppRoute() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MoviesScreen />} />
        <Route path="/:slug" element={<MovieDetails />} />
        <Route path="/tv-series" element={<TvseriesScreen />} />
        <Route path="/tv-series/:slug" element={<TvseriesDetails />} />
      </Routes>
    </QueryClientProvider>
  );
}
