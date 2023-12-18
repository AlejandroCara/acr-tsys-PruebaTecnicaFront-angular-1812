import { Genre } from "./genre.model";

export class Movie {
    id?: number;
    title?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    genres?: Genre[];
}
