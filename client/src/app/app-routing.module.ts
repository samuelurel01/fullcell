import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarcaCrudComponent} from "./cadastros/marca-crud/marca.crud.component";
import {MenuScopeEnum} from "./model/menu.scope.enum";

const routes: Routes = [
  {path: "marca", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.CADASTRO, menu: 'Marca'}},
  {path: "marca/create", component: MarcaCrudComponent},
  {path: "marca/edit/:id", component: MarcaCrudComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function getMenuByRoutes() {

  let menus: {}[] = []

  routes.filter(e => e && e.data && e.data['scope']).reduce(
    (entryMap, e) => entryMap.set(e.data['scope'], [...entryMap.get(e.data['scope']) || [], {text: e.data['menu'], path: e.path}]),
    new Map()).forEach((menuPath: {}[], scope: MenuScopeEnum) => {
    menus.push({text: scope, items: menuPath})
  })

  return menus;
}



