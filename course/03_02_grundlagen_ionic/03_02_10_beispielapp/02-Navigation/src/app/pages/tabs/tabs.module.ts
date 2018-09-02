import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPageRoutingModule } from "./tabs.router.module";

import { TabsPage }                 from "./tabs.page";
import { HomePageModule }           from '../home/home.module';
import { PeoplePageModule }         from "../people/people.module";
import { PlanetsPageModule }        from '../planets/planets.module';
import { DataPageModule }       from '../data-list/data-list.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        TabsPageRoutingModule,

        HomePageModule,
        PeoplePageModule,
        DataPageModule,
        PlanetsPageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {}
