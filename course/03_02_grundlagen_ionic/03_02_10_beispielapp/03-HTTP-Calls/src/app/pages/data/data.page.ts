import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { RestAPIService } from "../../services/rest-api.service";
import { Item } from './../../models/Item';


@Component({
    selector: "appe-data",
    templateUrl: "data.page.html"
})
export class DataPage implements OnInit {
    data: any;

    items: Item[];

    constructor(
        public navCtrl: NavController,
        public httpClient: HttpClient,
        public apiService: RestAPIService
    ) {
        console.log("DataPage::constructor");

        this.data=this.apiService.getData();

        this.apiService.itemsData.subscribe((items: Item[]) => {
          this.items = items;
        });
  
      this.apiService.getAllItems();

    }

    ngOnInit() {}
}
