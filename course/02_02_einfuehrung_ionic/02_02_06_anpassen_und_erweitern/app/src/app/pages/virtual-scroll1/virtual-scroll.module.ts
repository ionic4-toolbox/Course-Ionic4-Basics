import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { VirtualScrollPage1 } from "./virtual-scroll.page";

const routes: Routes = [
  {
    path: "",
    component: VirtualScrollPage1
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VirtualScrollPage1]
})
export class VirtualScrollPageModule1 {}
