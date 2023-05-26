import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarcaCrudComponent} from "./cadastros/marca-crud/marca.crud.component";

const routes: Routes = [
  {path: "marca", component: MarcaCrudComponent, data: {titleMenu: 'Marca'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function getMenuByRoutes() {
  return routes;
}
