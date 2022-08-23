import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=abf432fa0d96636c4cec637e60ab28d8"
        );
    }
}
