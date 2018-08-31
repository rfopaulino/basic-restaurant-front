import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestauranteGridComponent } from "./restaurante/grid/restaurante.grid.component";
import { RestauranteNewComponent } from "./restaurante/new/restaurante.new.component";
import { RestauranteEditComponent } from "./restaurante/edit/restaurante.edit.component";
import { PratoGridComponent } from "./prato/grid/prato.grid.component";
import { PratoNewComponent } from "./prato/new/prato.new.component";
import { PratoEditComponent } from "./prato/edit/prato.edit.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restaurante', component: RestauranteGridComponent },
  { path: 'restaurante/new', component: RestauranteNewComponent },
  { path: 'restaurante/edit/:id', component: RestauranteEditComponent },
  { path: 'prato', component: PratoGridComponent },
  { path: 'prato/new', component: PratoNewComponent },
  { path: 'prato/edit/:id', component: PratoEditComponent }
];
