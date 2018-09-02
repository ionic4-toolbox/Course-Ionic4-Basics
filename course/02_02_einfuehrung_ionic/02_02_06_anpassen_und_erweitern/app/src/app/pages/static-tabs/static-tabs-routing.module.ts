import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { StaticTabsPageComponent } from "./static-tabs.component";

const routes: Routes = [
  {
    path: "",
    component: StaticTabsPageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule, IonicModule]
})
export class StaticTabsRoutingModule {}
