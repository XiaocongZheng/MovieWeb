import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../models/movie";
import { switchMap } from "rxjs/operators";
import { SliderComponent } from "src/app/components/slider/slider.component";
import { ItemsBannerComponent } from "src/app/components/items-banner/items-banner.component";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    //Get movies
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];

    constructor(private movieService: MoviesService) {}

    ngOnInit(): void {
        this.movieService.getMovies("popular").subscribe((res) => {
            this.popularMovies = res;
            console.log(this.popularMovies);
        });
        this.movieService.getMovies("top_rated").subscribe((res) => {
            this.topRatedMovies = res;
            console.log(this.topRatedMovies);
        });
        this.movieService.getMovies("upcoming").subscribe((res) => {
            this.upcomingMovies = res;
            console.log(this.upcomingMovies);
        });
    }
}
