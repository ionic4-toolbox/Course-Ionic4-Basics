import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../models/Item';
import { RestAPIService } from './../../services/rest-api.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsPage implements OnInit {

  currentYear: Number = new Date().getFullYear();
  item: Item;

  constructor(private route: ActivatedRoute, public apiService: RestAPIService) {
    console.log('DetailsPage:constructor');
  }

  ngOnInit() {
    console.log('DetailsPage:ngOnInit');      
  }

  ionViewWillEnter() {
    console.log('DetailsPage:ngOnInit');    
    console.log('DetailsPage:ngOnInit:route.snapshot', this.route.snapshot);
    const name = this.route.snapshot.paramMap.get('name');
    
    this.item = this.apiService.getItem(name);
    console.log('name=', name);
    console.log('item=', this.item);
    
  }
}
