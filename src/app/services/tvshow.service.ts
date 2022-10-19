import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TVShow, TVShowImages, TVshowDto } from "../models/tvshows";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class TvshowService {
    baseUrl: string = "https://api.themoviedb.org/3";
    apiKey: string = "abf432fa0d96636c4cec637e60ab28d8";

    constructor(private http: HttpClient) {}

    searchTVShows(page: number, searchValue?: string) {
        const uri = searchValue ? "/search/movie" : "/tv/popular";
        return this.http
            .get<TVshowDto>(
                `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, 20));
                })
            );
    }
}
