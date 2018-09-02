import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-home-page",
    templateUrl: "./home.page.html",
    styleUrls: ["./home.page.scss"],
    encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
    myVariable: string = "The force is with me!";

    constructor() {}

    updateValue() {
        console.log("HomePage:updateValue")
        this.myVariable = "Perfect, you changed the Value!";
    }

    ngOnInit() {}
}
