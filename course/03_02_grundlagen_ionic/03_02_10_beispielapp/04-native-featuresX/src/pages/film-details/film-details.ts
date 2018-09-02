import { Component }					from "@angular/core";
import { IonicPage }					from "ionic-angular";
import { NavController, NavParams }		from "ionic-angular";

import { EmailComposer }				from "@ionic-native/email-composer";

import { FavoriteProvider }				from "./../../providers/favorite/favorite";

@IonicPage()
@Component({
	selector: "page-details",
	templateUrl: "details.html"
})
export class DetailsPage {
	data: any;
	isFavorite = false;

	constructor(
		public navCtrl: NavController,
		public favoriteProvider: FavoriteProvider,
		public navParams: NavParams,
		// private emailComposer: EmailComposer
	) {
		console.log('DetailsPage::constructor');

		this.data = this.navParams.get("data");
		this.favoriteProvider.isFavorite(this.data.episode_id).then(isFav => {
			this.isFavorite = isFav;
		});
	}

	favoriteFilm() {
		console.log('DetailsPage::constructor');

		this.favoriteProvider.favoriteFilm(this.data.episode_id).then(() => {
			this.isFavorite = true;
		});
	}

	unfavoriteFilm() {
		console.log('DetailsPage::unfavoriteFilm');

		this.favoriteProvider.unfavoriteFilm(this.data.episode_id).then(() => {
			this.isFavorite = false;
		});
	}

	shareFilm() {
		console.log('DetailsPage::shareFilm');

		let email = {
			to: "saimon@devdactic.com",
			subject: "I love this one: " + this.data.title,
			body:
				'Can you remember the opening?<br><br>"' +
				this.data.opening_crawl +
				'"',
			isHtml: true
		};

		// this.emailComposer.open(email);
	}
}
