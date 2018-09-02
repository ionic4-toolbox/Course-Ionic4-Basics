import { Country } from './../models/Country';
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { Item } from "../models/Item";

@Injectable({
    providedIn: "root"
})
export class RestAPIService {
    data: Observable<any>;

    url = "https://restcountries.eu/rest/v2/all";

    public items: Item[] = [];
    public itemsData: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

    constructor(public http: HttpClient) {
        console.log("RestAPIService:constructor");
    }

    getData() {
        console.log("RestAPIService:getData");

        this.data=this.http.get(this.url);

        return this.data;
    }

    getAllItems() {
        this.items = [
            {
                id: "item-1",
                title: "Item 1",
                description: "Description 1",
                image: "https://avatars.io/twitter/juan"
            },
            {
                id: "item-2",
                title: "Item 2",
                description: "Description 2",
                image: "https://avatars.io/twitter/laura"
            },
            {
                id: "item-3",
                title: "Item 3",
                description: "Description 3",
                image: "https://avatars.io/twitter/luis"
            }
        ];
        this.itemsData.next(this.items);
    }

    getItem(title): Item {
        console.log("RestAPIService:getItem:type=", typeof this.data); 
        console.log("RestAPIService:getItem:title=", title);

        return this.items.find(item => item.title === title);
    }

    /*
    getCountries(): Observable<Country[]> {
        return this.http.get('http://api.request.com')
          .map((res: Response) => res.json()['results']);
      }
    
      getCountry(name: string): Observable<Country> {
        return this.getCountries()
          .map(movies => movies.find(country => country.name == name));
      }
      */
}
