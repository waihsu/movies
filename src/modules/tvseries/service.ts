import { TvseriesPage } from "./model";

export abstract class Tvseries {
  static async getTvserieByPage({ page = 1 }: TvseriesPage.getTvseriesQuery) {
    try {
      const res = await fetch(`${Bun.env.API}/tv-shows?page=${page}`, {
        // verbose: true,
      });
      if (!res.ok) {
        console.log(`❌ Failed to fetch tvseres page ${page}`);
      }
      const tvserieData = await res.json();
      return tvserieData.data;
    } catch (err) {
      console.log(err);
      return TvseriesPage.getTvInvalidResponse;
    }
  }
  static async getTvseriesByName({ slug }: TvseriesPage.getTvseriesParams) {
    try {
      const res = await fetch(`${Bun.env.API}/tv-shows/${slug}`, {
        // verbose: true,
      });
      if (!res.ok) {
        console.log(`❌ Failed to fetch tvseres `);
      }
      const tvseries = await res.json();
      return tvseries.data;
    } catch (err) {
      console.log(err);
      return TvseriesPage.getTvInvalidResponse;
    }
  }
}
