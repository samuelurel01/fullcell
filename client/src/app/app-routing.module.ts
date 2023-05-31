import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarcaCrudComponent} from "./cadastros/marca-crud/marca.crud.component";
import {MenuScopeEnum} from "./model/menu.scope.enum";

const routes: Routes = [
  {path: "marca", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.CADASTRO, menu: 'Marca'}},
  {path: "marca/create", component: MarcaCrudComponent},
  {path: "marca/edit/:id", component: MarcaCrudComponent},

  {path: "produto", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.CADASTRO, menu: 'Produto'}},
  {path: "produto/create", component: MarcaCrudComponent},
  {path: "produto/edit/:id", component: MarcaCrudComponent},

  {path: "cliente", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.CADASTRO, menu: 'Clientes', icon: ''}},
  {path: "cliente/create", component: MarcaCrudComponent},
  {path: "cliente/edit/:id", component: MarcaCrudComponent},


  {path: "estoque-entrada", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.ESTOQUE, menu: 'Entradas'}},
  {path: "estoque-entrada/create", component: MarcaCrudComponent},
  {path: "estoque-entrada/edit/:id", component: MarcaCrudComponent},

  {path: "orcamento", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.ORCAMENTO, menu: 'Entradas'}},
  {path: "orcamento/create", component: MarcaCrudComponent},
  {path: "orcamento/edit/:id", component: MarcaCrudComponent},


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



