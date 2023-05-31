import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarcaCrudComponent} from "./cadastros/marca-crud/marca.crud.component";
import {MenuScopeEnum} from "./model/menu.scope.enum";
import {ProdutoCrudComponent} from "./cadastros/produto-crud/produto.crud.component";

const routes: Routes = [
  {path: "marca", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.CADASTRO, menu: 'Marca', icon: 'fa fa-plus-circle'}},
  {path: "marca/create", component: MarcaCrudComponent},
  {path: "marca/edit/:id", component: MarcaCrudComponent},

  {path: "produto", component: ProdutoCrudComponent, data: {scope: MenuScopeEnum.CADASTRO, menu: 'Produto', icon: 'fa fa-cart-shopping'}},
  {path: "produto/create", component: ProdutoCrudComponent},
  {path: "produto/edit/:id", component: ProdutoCrudComponent},

  {path: "cliente", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.CADASTRO, menu: 'Clientes', icon: 'fa fa-people-group'}},
  {path: "cliente/create", component: MarcaCrudComponent},
  {path: "cliente/edit/:id", component: MarcaCrudComponent},


  {path: "estoque-entrada", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.ESTOQUE, menu: 'Entradas', icon: 'fa fa-plus-circle'}},
  {path: "estoque-entrada/create", component: MarcaCrudComponent},
  {path: "estoque-entrada/edit/:id", component: MarcaCrudComponent},

  {path: "orcamento", component: MarcaCrudComponent, data: {scope: MenuScopeEnum.ORCAMENTO, menu: 'Entradas', icon: 'fa fa-cart-plus'}},
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
    (entryMap, e) => entryMap.set(e.data['scope'], [...entryMap.get(e.data['scope']) || [], {text: e.data['menu'], path: e.path, icon: e.data['icon']}]),
    new Map()).forEach((menuPath: {}[], scope: MenuScopeEnum) => {
    menus.push({text: scope, items: menuPath})
  })

  return menus;
}



