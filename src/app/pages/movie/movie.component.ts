import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
    Movie,
    MovieCredits,
    MovieImages,
    MovieVideo,
} from "src/app/models/movie";
import { MoviesService } from "../../services/movies.service";
import { IMAGES_SIZES } from "../../constants/iamges-sizes";
import { first } from "rxjs/operators";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit, OnDestroy {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    imagesSizes = IMAGES_SIZES;
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideos(id);
            this.getMovieImages(id);
            this.getMovieCredits(id);
        });
    }

    ngOnDestroy() {}

    getMovie(id: string) {
        this.moviesService.getMovie(id).subscribe((data) => {
            this.movie = data;
        });
    }

    getMovieVideos(id: string) {
        this.moviesService.getMovieVideos(id).subscribe((MVdata) => {
            this.movieVideos = MVdata;
        });
    }

    getMovieImages(id: string) {
        this.moviesService.getMovieImages(id).subscribe((MVdata) => {
            this.movieImages = MVdata;
        });
    }

    getMovieCredits(id: string) {
        this.moviesService.getMovieCredits(id).subscribe((MVdata) => {
            this.movieCredits = MVdata;
        });
    }
}
