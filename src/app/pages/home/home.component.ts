import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { SliderComponent } from "src/app/components/slider/slider.component";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    //Get movies
    movies: any = [];

    constructor(private movieService: MoviesService) {}

    ngOnInit(): void {
        this.movieService.getMovies().subscribe((res: any) => {
            this.movies = res.results;
            console.log(this.movies);
        });
    }
}
