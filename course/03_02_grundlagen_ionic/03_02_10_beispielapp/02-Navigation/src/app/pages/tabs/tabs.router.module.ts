import { NgModule }                         from "@angular/core";
import { RouterModule, Routes }             from "@angular/router";

import { TabsPage }                         from "./tabs.page";
import { PeoplePage }                       from "../people/people.page";
import { PlanetsPage }                      from "../planets/planets.page";
import { DataPage }                     from './../data-list/data-list.page';

const routes: Routes = [
    {
        path: "tabs",
        component: TabsPage,
        children: [
            { path: "data-list",    outlet: "data-list",    component: DataPage },
            { path: "people",       outlet: "people",       component: PeoplePage },
            { path: "planets",      outlet: "planets",      component: PlanetsPage }
        ]
    },
    { path: "", redirectTo: "/tabs/(data-list:data-list)", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
