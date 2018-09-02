import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
	selector: "page-details",
	templateUrl: "details.html"
})
export class DetailsPage {
	data: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.data = this.navParams.get("data");
	}

	goBack() {
		this.navCtrl.pop();
	}
}
