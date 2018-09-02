import { NgModule }                         from "@angular/core";
import { Routes, RouterModule }             from "@angular/router";

const routes: Routes = [
  { path: "",               loadChildren: "./pages/tabs/tabs.module#TabsPageModule" },
  { path: "home",           loadChildren: "./pages/home/home.module#HomePageModule" },
  { path: "list",           loadChildren: "./pages/list/list.module#ListPageModule" },
  { path: 'data',           loadChildren: './pages/data/data.module#DataPageModule' },
  { path: 'details/:name',  loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'people',         loadChildren: './pages/people/people.module#PeoplePageModule' },
  { path: 'planets',        loadChildren: './pages/planets/planets.module#PlanetsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
