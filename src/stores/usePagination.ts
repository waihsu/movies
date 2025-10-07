import { create } from "zustand";

interface PaginationState {
  moviePage: number;
  setMoviePage: (page: number) => void;
  seriePage: number;
  setSeriePage: (page: number) => void; // ❗ “setSeriePage” not “setSerieePage”
}

export const usePagination = create<PaginationState>((set) => ({
  moviePage: 1,
  setMoviePage: (page) => set({ moviePage: page }),

  seriePage: 1,
  setSeriePage: (page) => set({ seriePage: page }),
}));
