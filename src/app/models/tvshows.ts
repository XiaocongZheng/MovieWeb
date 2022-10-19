export interface TVShow {
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_name: String;
    origin_country: String[];
    overview: String;
    popularity: number;
    poster_path: String;
    first_air_date: Date;
    name: String;
    vote_average: number;
    vote_count: number;
}

export interface TVshowDto {
    page: number;
    results: TVShow[];
    total_results: number;
    total_pages: number;
}

export interface TVShowImages {
    backdrops: {
        file_path: string;
    }[];
}
