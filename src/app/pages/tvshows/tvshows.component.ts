import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";
import { TVShow } from "../../models/tvshows";
import { TvshowService } from "../../services/tvshow.service";

@Component({
    selector: "app-tvshows",
    templateUrl: "./tvshows.component.html",
    styleUrls: ["./tvshows.component.css"],
})
export class TVshowsComponent implements OnInit {
    tvshows: TVShow[] = [];
    constructor(
        private tvshowService: TvshowService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(take(1)).subscribe(() => {
            this.getPagedTVshows(1);
        });
    }

    getPagedTVshows(page: number) {
        this.tvshowService.searchTVShows(page).subscribe((tvshows) => {
            this.tvshows = tvshows;
        });
    }

    paginate(event: any) {
        this.getPagedTVshows(event.page + 1);
    }
}
