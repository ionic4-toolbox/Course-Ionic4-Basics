import { IonicModule } from "@ionic/angular";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PeoplePage } from "./people.page";

const routes: Routes = [{ path: "", component: PeoplePage }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeoplePage]
})
export class PeoplePageModule {}
