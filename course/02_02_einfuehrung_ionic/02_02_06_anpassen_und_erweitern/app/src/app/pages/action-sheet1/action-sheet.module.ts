import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ActionSheetPage1 } from "./action-sheet.page";

const routes: Routes = [
  {
    path: "",
    component: ActionSheetPage1
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActionSheetPage1]
})
export class ActionSheetPageModule1 {}
