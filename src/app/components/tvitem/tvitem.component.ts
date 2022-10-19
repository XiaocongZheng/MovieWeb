import { Component, Input, OnInit } from "@angular/core";
import { TVShow } from "../../models/tvshows";
import { IMAGES_SIZES } from "../../constants/iamges-sizes";

@Component({
    selector: "tvitem",
    templateUrl: "./tvitem.component.html",
    styleUrls: ["./tvitem.component.css"],
})
export class TVitemComponent implements OnInit {
    @Input() itemData: TVShow | null = null;
    imagesSizes = IMAGES_SIZES;

    constructor() {}

    ngOnInit(): void {}
}
