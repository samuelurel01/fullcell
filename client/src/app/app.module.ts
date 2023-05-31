import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {HeaderComponent} from "./layout/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SideNavComponent} from "./layout/side-nav/side.nav.component";
import {HomeComponent} from "./layout/home/home.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MarcaCrudComponent} from "./cadastros/marca-crud/marca.crud.component";
import {CrudComponent} from "./layout/crud/crud.component";
import {MatInputModule} from "@angular/material/input";
import {TextBoxComponent} from "./core/text-box/text.box.component";
import {
  DevExtremeModule,
  DxButtonModule, DxCalendarModule,
  DxDataGridModule, DxDrawerModule, DxFileManagerModule,
  DxFormModule, DxListModule, DxLoadPanelModule, DxMenuModule, DxNumberBoxModule, DxPieChartModule,
  DxTextAreaModule,
  DxTextBoxModule, DxToolbarModule, DxTreeListModule, DxTreeViewModule
} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {MarcaService} from "./service/marca.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppStateService} from "./core/app.state.service";
import {RootInjectorFacade} from "./core/root.injector.facade";
import {DashboardComponent} from "./layout/dashboard/dashboard.component";
import {loadMessages, locale} from 'devextreme/localization';
import {ProdutoCrudComponent} from "./cadastros/produto-crud/produto.crud.component";

let messagespt = require("devextreme/localization/messages/pt.json");
loadMessages(messagespt);
locale('pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    MarcaCrudComponent,
    CrudComponent,
    TextBoxComponent,
    DashboardComponent,
    ProdutoCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatSidenavModule,
    MatInputModule,
    DxFormModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxDataGridModule,
    DxButtonModule,
    HttpClientModule,
    DxDrawerModule,
    DxListModule,
    DxTreeListModule,
    DxTreeViewModule,
    DxToolbarModule,
    FontAwesomeModule,
    DxNumberBoxModule,
    DxLoadPanelModule,
    DxFileManagerModule,
    DxMenuModule,
    NgOptimizedImage,
    DxCalendarModule,
    DxPieChartModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    MarcaService,
    AppStateService,
    RootInjectorFacade

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
