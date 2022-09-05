import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieDto } from "../models/movie";

@Injectable({
    providedIn: "root",
})
export class MoviesService {
    baseUrl: string = "https://api.themoviedb.org/3";
    apiKey: string = "abf432fa0d96636c4cec637e60ab28d8";

    constructor(private http: HttpClient) {}

    getMovies(type: string = "upcoming") {
        return this.http.get<MovieDto>(
            `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
        );
    }
}
