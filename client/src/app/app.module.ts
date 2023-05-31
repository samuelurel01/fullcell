import {NgModule} from '@angular/core';
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
  DxButtonModule,
  DxDataGridModule, DxDrawerModule, DxFileManagerModule,
  DxFormModule, DxListModule, DxLoadPanelModule, DxMenuModule, DxNumberBoxModule,
  DxTextAreaModule,
  DxTextBoxModule, DxToolbarModule, DxTreeListModule, DxTreeViewModule
} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {MarcaService} from "./service/marca.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppStateService} from "./core/app.state.service";
import {RootInjectorFacade} from "./core/root.injector.facade";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    MarcaCrudComponent,
    CrudComponent,
    TextBoxComponent
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
        NgOptimizedImage
    ],
  providers: [
    MarcaService,
    AppStateService,
    RootInjectorFacade

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
