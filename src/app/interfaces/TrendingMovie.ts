/* eslint-disable @typescript-eslint/naming-convention */
export interface TrendingMovie {
  original_title: string;
  poster_path: string;
  video: boolean;
  vote_average: number;
  overview: string;
  release_date: string;
  vote_count: number;
  adult: boolean;
  id: number;
  title: string;
  genre_ids: number[];
  backdrop_path: string;
  original_language: string;
  popularity: number;
  media_type: string;
}
