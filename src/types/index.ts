export interface FilmImage {
    Poster?: string;
    Title: string;
}

export interface Film extends FilmImage {
    imdbID: string;
    Year: Date;
    Type: string;
}

type ResponseType = 'True' | 'False'

export interface PaginatedResponse {
    totalResults: number;
    Response: ResponseType;
}

export interface PaginatedFilms extends PaginatedResponse {
    Search: Film[];
}

export interface PaginationParams {
  page: number;
  limit: number;
}