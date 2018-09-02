import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'List', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'About', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'Menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
