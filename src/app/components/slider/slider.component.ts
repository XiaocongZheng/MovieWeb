import {
    state,
    style,
    trigger,
    transition,
    animate,
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { IMAGES_SIZES } from "../../constants/iamges-sizes";
import { Movie } from "src/app/models/movie";

@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.css"],
    animations: [
        trigger("slideFade", [
            state("void", style({ opacity: 0 })),
            transition("void <=> *", [animate("1s")]),
        ]),
    ],
})
export class SliderComponent implements OnInit {
    @Input() items: Movie[] = [];

    currentSlideIndex: number = 0;

    readonly imageSizes = IMAGES_SIZES;

    constructor() {}

    ngOnInit(): void {
        setInterval(() => {
            this.currentSlideIndex =
                ++this.currentSlideIndex % this.items.length;
        }, 3000);
    }
}
