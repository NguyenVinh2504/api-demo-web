// Định nghĩa interface cho Genre
export interface Genre {
  id: number;
  name: string;
}

// Định nghĩa interface cho Production Company
export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

// Định nghĩa interface cho Production Country
export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

// Định nghĩa interface cho Spoken Language
export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

// Định nghĩa interface cho Movie Details
export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection | null; // Nếu có thông tin cụ thể, bạn có thể định nghĩa thêm interface cho Collection
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
